import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Product } from '../core/models/product.model';
import { Observable, filter, map, tap } from 'rxjs';
import { ProductService } from '../core/services/product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../core/services/form.service';
import { AlertService } from '../shared/_alert/alert.service';
import { SpinnerService } from '../shared/spinner/spinner.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {ngSkipHydration: 'true'},
})
export class ProductsComponent {
  product: Product;
  closeResult: string;
  relatedProduct$: Observable<Product[]>;
  enquiryForm: FormGroup;
  submitted = false;
  options = {
    autoClose: false,
    keepAfterRouteChange: true
  };
  constructor(
    private _router: Router,
    private route: ActivatedRoute, 
    private modalService: NgbModal,
    private productService: ProductService,
    private fb: FormBuilder,
    private formService: FormService,
    private spinnerService: SpinnerService,
    private alertService: AlertService
  ){
   
    this.route.data.pipe(map(({product}) => product)).subscribe(product => {      
      this.product = product;
      //console.log("===Product", this.product)
      
    });
  }

  ngOnInit(): void{
    this.relatedProduct$ = this.productService.getRelatedProducts(this.product.slug);
    this.enquiryForm = this.fb.group({
      product:[this.product.name],
      name: [null, Validators.required],
      email: [null, Validators.required],
      phone: [null, Validators.required],
      comments: [null, Validators.required],
    })
  }
  openVerticallyCentered(content: any) {
		this.modalService.open(content, { centered: true });
	}
  get enquiryControl(){
    return this.enquiryForm.controls;
  }
  onEnquirySubmit(){
    this.submitted = true;
    if(this.enquiryForm.valid){
      const formdata = this.enquiryForm.value;
      this.formService.sendProductEnquiry(formdata).subscribe({
        next: (res) => {         
          if(res.status){          
           this.alertService.success(res.success, this.options);
           this.spinnerService.setLoading(false);
           setTimeout(() => {
             this.clearForm();
           }, 3000);
          } else{
            this.alertService.error(res.error, this.options)
          }          
          
       },
       error: (err) => {
        if(err){
          this.alertService.error(err.error, this.options)
        } else{
          this.alertService.error('Something went wrong!.', this.options)
        }
         
       }
      })
    }
   
  }

  clearForm() {
    this.enquiryForm.reset();
    Object.keys(this.enquiryForm.controls).forEach(key => {
      this.enquiryForm.get(key)?.setErrors(null) ;
    });
  }
}

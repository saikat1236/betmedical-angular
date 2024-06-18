import { Component } from '@angular/core';
import { FormService } from './../../core/services/form.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/shared/_alert/alert.service';
import { SpinnerService } from 'src/app/shared/spinner/spinner.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  contactForm: FormGroup;
  submitted = false;
  options = {
    autoClose: false,
    keepAfterRouteChange: true
  };
  constructor(
    private fb: FormBuilder,
    private formService: FormService,
    public alertService: AlertService,
    private spinnerService: SpinnerService
  ){

  }
  ngOnInit(){
    this.contactForm = this.fb.group({
      name: [null, Validators.required],
      email: [null, Validators.required],
      phone: [null, Validators.required],
      subject: [null, Validators.required],
      comments: [null, Validators.required]
    });
  }
  contactSubmit(){
    this.submitted = true;
    
    if(this.contactForm.valid){
      const formdata = this.contactForm.value;
      this.spinnerService.setLoading(true);
     
      this.formService.sendContactEnquiry(formdata).subscribe({
        next: (res) => {
           console.log('res===',res); 
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
    this.contactForm.reset();
    Object.keys(this.contactForm.controls).forEach(key => {
      this.contactForm.get(key)?.setErrors(null) ;
    });
  }
}

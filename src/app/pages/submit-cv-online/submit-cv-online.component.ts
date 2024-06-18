import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { FormService } from './../../core/services/form.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError, map, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-submit-cv-online',
  templateUrl: './submit-cv-online.component.html',
  styleUrls: ['./submit-cv-online.component.scss']
})
export class SubmitCvOnlineComponent {
  resumeForm: FormGroup;
  submitted = false;

  selectedFile!: any;
  imageUrl: any = '';
  base64Output!: string;
  allowedExtError: boolean = false;
  resumeFile: File;
  constructor(
    private fb: FormBuilder,
    private formService: FormService,
    private http: HttpClient
  ){

  }

  ngOnInit(){
    this.resumeForm = this.fb.group({
      name: [null, Validators.required],
      email: [null, Validators.required],
      phone: [null, Validators.required],
      qualification: [null, Validators.required],
      experience: [null, Validators.required],
      curentemployer: [null],
      comments: [null],
      resume: [null, Validators.required],
    });
  }
  processFile(resume: any) {  
   
    const file: File = resume.files[0];
    this.resumeFile = resume.files[0];
    const allowedExt = file.name?.split('.')?.pop()?.toLowerCase();
    console.log(allowedExt);
    if(allowedExt == "pdf" || allowedExt == "doc" || allowedExt=="docx" || allowedExt=="ppt" || allowedExt=="pptx" || allowedExt =="jpg" || allowedExt=="png" || allowedExt=="jpeg"){
      this.resumeForm.get('resume')?.setErrors(null);
      const reader = new FileReader();   
      reader.addEventListener('load', (event: any) => { 
        console.log(resume.files);
        console.log(event);     
        this.imageUrl = event.target.result;      
        this.selectedFile = {
          src: event.target.result,
          name: file.name,
          type: file.type,
          size: file.size,
          lastModified: file.lastModified
        };

        return new ImageSnippet(event.target.result, file);
      });
      
      reader.readAsDataURL(file); 

    } else {
       this.allowedExtError = true;
       this.resumeForm.get('attachment')?.setErrors({allowedExtError: true})
    }
      
    console.log(this.resumeForm);
  }
  submitCvForm(){
    this.submitted = true;
    if(this.resumeForm.valid){
      // let formData: any = new FormData();       
      // Object.keys(this.resumeForm.controls).forEach(formControlName => {          
      //   formData.append(formControlName, this.resumeForm.get(formControlName).value);    
      // }); 
      // formData.append('attachment', this.selectedFile);
      // formData.append('uploadFile', this.resumeFile, this.resumeFile.name);
      let formData = this.resumeForm.value;
      formData = {...formData, ...{attachment:this.selectedFile}};
      console.log(formData);
      console.log(this.selectedFile);
      console.log(this.resumeFile);
      this.formService.sendResume(formData, this.resumeFile).subscribe(res => {
        console.log(res);
      })
      // let url = `${environment.apiUrl}/send-resume`;
      // let headers = new HttpHeaders({
      //     'Access-Control-Allow-Origin': '*',
      //     'Content-Type': 'multipart/form-data'
      // });
      // // this.http
      // // .post<any>(url, formData, {
      // //   headers: headers,
      // //   reportProgress: true, 
      // //   observe: 'events'
      // // }).pipe(
      // //   map((event) => event),
      // //   catchError(this.errorMgmt)
      // // );
      // this.http.post(url,formData, { headers: headers,reportProgress: true, observe: 'events'})
      // .subscribe({         
      //   next: (response) => console.log(response),   
      //   error: (error) =>console.log(error)  
      // })  
    }
   
  }
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}

export class ImageSnippet {
  constructor(public src: string, public file: File) {}
}
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiService } from './api.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(
    private apiService: ApiService
  ) { }

  sendProductEnquiry(formdata: any): Observable<any>{
    return this.apiService.post<any>('product-enquiry', formdata).pipe(map((res) => res));
  }

  sendContactEnquiry(formdata: any): Observable<any>{
    return this.apiService.post<any>('contact-enquiry', formdata).pipe(map((res) => res));
  }

  sendResume(formdata: any, file: File): Observable<any>{
    let upload:FormData = new FormData();
   
    upload.append("_method", 'PATCH');
    upload.append("upload", file, file.name);
    upload.append("name", formdata.name);
    
    // let payload = JSON.stringify({
    //     name: formdata.name,
    //     email: formdata.email,
    //     phone: formdata.phone,
    //     qualification: formdata.qualification,
    //     experience: formdata.experience,
    //     curentemployer: formdata.curentemployer,
    //     comments: formdata.comments,
    //     resume: formdata.resume,
    //     attachment: formdata.attachment
    // })
   
  
    // upload.append('payload', payload) // III.
    let options = {
      name: 'Content-Type',
      value: undefined
    };
    // console.log(upload.getAll('upload'));
    return this.apiService.patch<any>('send-resume', formdata).pipe(map((res) => res));
  }
}

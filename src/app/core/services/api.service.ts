import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiURL: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public get<T>(path: string): Observable<T>{
    return this.http.get<T>(`${this.apiURL}/${path}`);
  }

  public post<T>(path: string, data: object, options = null): Observable<T>{
    let headers = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers': '*',
        'Accept': 'application/json',
        'Access-Control-Expose-Headers': '*',       
      }),
     
    };
    if(options){
      headers.headers = headers.headers.delete('Content-Type', 'application/json');
      headers.headers = headers.headers.append(options.name, options.value)
    }
    return this.http.post<T>(`${this.apiURL}/${path}`, data, headers);
  }
  public patch<T>(path: string, data: object, options = null): Observable<T>{
    let headers = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers': '*',
        'Accept': 'application/json',
        'Access-Control-Expose-Headers': '*',       
      }),
     
    };
    if(options){
      headers.headers = headers.headers.delete('Content-Type', 'application/json');
      headers.headers = headers.headers.append(options.name, options.value)
    }
    return this.http.put<T>(`${this.apiURL}/${path}`, data, headers);
  }
}

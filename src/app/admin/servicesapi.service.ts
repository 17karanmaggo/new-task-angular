import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environment/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesapiService {

  constructor(private httpClient: HttpClient) { }
  
  base_url: string = environment.base_url;

  getDashboard(req:any): Observable<any>{
    var url = `${this.base_url}/api/users?page=${req?.page}`;
    return this.httpClient.get<any[]>(url);
  }
  addusers(data:any):  Observable<any>{
    var url= this.base_url+'/api/users',user;
    return this.httpClient.post<any>(url, data)
  }

  deleteEmployee(alumniId: any) {
    var url = `${this.base_url}/api/users/2`;
    return this.httpClient.delete<any>(url);
  }
}

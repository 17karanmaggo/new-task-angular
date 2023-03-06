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

  getDashboard(page:any): Observable<any> {
    var url = `${this.base_url}/api/users?page=${page}`;
    return this.httpClient.get<any>(url);
  }

}
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServicesapiService } from '../servicesapi.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  users: any[] = [];
  employeesBody:any;
  constructor(private http: HttpClient, private adminapiservices:ServicesapiService) { }

  ngOnInit() {
    
    this.adminapiservices.getDashboard(1).subscribe((response:any)=>{
      this.users= response.data;
    });
  }
}

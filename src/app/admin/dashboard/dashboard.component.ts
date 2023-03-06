import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LazyLoadEvent } from 'primeng/api';

import { FormsModule } from '@angular/forms';
import { ServicesapiService } from '../servicesapi.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @Input() isViewMode: any = false;
  users: any[] = [];
  display: boolean = false;
  isLoading: any;
  totalRecords: any = 0;
  totalPages: number | undefined;
user:any;


  constructor(private router: Router, private adminApiService: ServicesapiService, private fb: FormBuilder) { }


  ngOnInit() {

    this.user = {
      name: "",
      job: ""
    }


  }


  getDashboard(event: any) {
    console.log(this.users);

    let req: any = {
      "limit": 1000,
      "orderBy": "name",
      "orderDirection": "DESC",
      "page": 1,
    }
    if (event?.filters) {
      req['search'] = {
        name: event?.filters?.global?.value, "active": true,

      }
    }
    this.isLoading = true;
    req.limit = event.rows;
    req.orderBy = event.sortField;
    req.page = event.first / event.rows + 1;
    req.orderDirection = event.sortOrder == -1 ? 'DESC' : 'ASC';
    this.adminApiService.getDashboard(req).subscribe((res: any) => {
      this.users = res.data;
      this.totalRecords = res?.total;
      this.totalPages = res?.total_pages;
      this.isLoading = false;
    });



  }
  addstudent() {
    this.display = true;
  }


}

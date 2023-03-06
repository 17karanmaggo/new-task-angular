import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableModule} from 'primeng/table';
import { AdminRoutes } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import {ButtonModule} from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
  
    TableModule,
    ButtonModule,
    HttpClientModule,
    RouterModule.forChild(AdminRoutes),
  ],

})
export class AdminModule { }

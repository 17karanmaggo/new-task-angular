import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableModule} from 'primeng/table';
import { AdminRoutes, AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import {ButtonModule} from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import {DialogModule} from 'primeng/dialog';
import {AnimateModule} from 'primeng/animate';
import { FormsModule } from '@angular/forms';
import {ContextMenuModule} from 'primeng/contextmenu';
import {MenuItem} from 'primeng/api';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    TableModule,
    ButtonModule,
    HttpClientModule,
    DialogModule,
    FormsModule,
  ContextMenuModule,

    RouterModule.forChild(AdminRoutes),
  
  
  ],
  exports :[RouterModule]
})
export class AdminModule { }

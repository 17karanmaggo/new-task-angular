import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routes } from '../app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

 export const AdminRoutes: Routes = [{
  path: "",
  redirectTo:'dashboard',
  pathMatch:'full'
},
{
  path: 'dashboard',
  component: DashboardComponent,
}
];


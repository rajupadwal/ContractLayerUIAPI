import { NgModule } from '@angular/core';

import {
  Routes,
  RouterModule
} from '@angular/router';

import { EmployeeViewComponent } from './employee-view.component';
import { EmployeeInfoComponent } from '../employee-info/employee-info.component';


const routes: Routes = [
  {
    path: '',
    component: EmployeeViewComponent,
    data: {
      title: 'Employee view'
    }
  },
   {
    path: 'employeeinfo',
     component: EmployeeInfoComponent,
     data: {
       title: 'employeeinfo'
     }
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeviewRoutingModule { }

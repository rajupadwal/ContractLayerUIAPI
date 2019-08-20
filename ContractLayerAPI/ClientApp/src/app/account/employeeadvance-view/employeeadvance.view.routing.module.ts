import { NgModule } from '@angular/core';

import {
  Routes,
  RouterModule
} from '@angular/router';

import { EmployeeadvanceDetailsComponent } from '../employeeadvance-details/employeeadvance-details.component';
import { EmployeeadvanceViewComponent } from './employeeadvance-view.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeadvanceViewComponent,
    data: {
      title: 'Employee Advance View'
    }
  },

   {
     path: 'employeeadvancedetails',
     component: EmployeeadvanceDetailsComponent,
     data: {
       title: 'Employee Advance'
     }
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeadvanceViewRoutingModule { }

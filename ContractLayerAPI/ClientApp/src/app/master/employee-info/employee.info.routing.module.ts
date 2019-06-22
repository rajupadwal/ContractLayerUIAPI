import { NgModule } from '@angular/core';

import {
  Routes,
  RouterModule
} from '@angular/router';

import { EmployeeInfoComponent } from './employee-info.component';


const routes: Routes = [
  {
    path: '',
    component: EmployeeInfoComponent,
    data: {
      title: 'Employee Info'
    }
  },
//   {
//     path: 'adddailyprogressreport',
//     component: AddDailyProgressReportComponent,
//     data: {
//       title: 'add Progress report'
//     }
//   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeInfoRoutingModule { }

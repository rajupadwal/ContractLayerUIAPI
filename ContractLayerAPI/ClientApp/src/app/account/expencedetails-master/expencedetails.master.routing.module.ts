import { NgModule } from '@angular/core';

import {
  Routes,
  RouterModule
} from '@angular/router';

import { ExpencedetailsMasterComponent } from './expencedetails-master.component';


const routes: Routes = [
  {
    path: '',
    component: ExpencedetailsMasterComponent,
    data: {
      title: 'expence details master'
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
export class ExpencedetailsMasterRoutingModule { }

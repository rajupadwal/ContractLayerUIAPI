import { NgModule } from '@angular/core';

import {
  Routes,
  RouterModule
} from '@angular/router';

import { SupplierMasterComponent } from './supplier-master.component';


const routes: Routes = [
  {
    path: '',
    component: SupplierMasterComponent,
    data: {
      title: 'supplier master'
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
export class SupplierMasterRoutingModule { }

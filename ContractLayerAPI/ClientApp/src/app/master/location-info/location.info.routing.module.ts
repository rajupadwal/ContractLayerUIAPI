import { NgModule } from '@angular/core';

import {
  Routes,
  RouterModule
} from '@angular/router';

import { LocationInfoComponent } from './location-info.component';


const routes: Routes = [
  {
    path: '',
    component: LocationInfoComponent,
    data: {
      title: 'location Info'
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
export class locationInfoRoutingModule { }

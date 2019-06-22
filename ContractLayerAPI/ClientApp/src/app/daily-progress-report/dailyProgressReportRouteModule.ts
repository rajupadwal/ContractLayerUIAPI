import { NgModule } from '@angular/core';

import {
  Routes,
  RouterModule
} from '@angular/router';

import { DailyProgressReportComponent } from './daily-progress-report.component';
import { AddDailyProgressReportComponent} from './add-daily-progress-report/add-daily-progress-report.component';

const routes: Routes = [
  {
    path: '',
    component: DailyProgressReportComponent,
    data: {
      title: 'DailyProgressReport'
    }
  },
  {
    path: 'adddailyprogressreport',
    component: AddDailyProgressReportComponent,
    data: {
      title: 'add Progress report'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DailyProgressReportRouteModule { }

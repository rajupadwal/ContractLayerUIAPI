import { NgModule } from '@angular/core';

import {
  Routes,
  RouterModule
} from '@angular/router';

import { DatewiseexpencesViewComponent } from './datewiseexpences-view.component';


const routes: Routes = [
  {
    path: '',
    component: DatewiseexpencesViewComponent,
    data: {
      title: 'Datewise Expences Report'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatewiseexpencesviewRoutingModule { }

import { NgModule } from '@angular/core';

import {
  Routes,
  RouterModule
} from '@angular/router';

import { DatewiseoutwardViewComponent } from './datewiseoutward-view.component';


const routes: Routes = [
  {
    path: '',
    component: DatewiseoutwardViewComponent,
    data: {
      title: 'Datewise Outward Report'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatewiseoutwardviewRoutingModule { }

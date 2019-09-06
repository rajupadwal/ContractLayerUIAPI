import { NgModule } from '@angular/core';

import {
  Routes,
  RouterModule
} from '@angular/router';

import { DatewiseinwardViewComponent } from './datewiseinward-view.component';


const routes: Routes = [
  {
    path: '',
    component: DatewiseinwardViewComponent,
    data: {
      title: 'Datewise Inward Report'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatewiseinwardviewRoutingModule { }

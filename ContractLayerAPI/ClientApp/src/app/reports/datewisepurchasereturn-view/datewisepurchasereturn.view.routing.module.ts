import { NgModule } from '@angular/core';

import {
  Routes,
  RouterModule
} from '@angular/router';

import { DatewisepurchasereturnViewComponent } from './datewisepurchasereturn-view.component';


const routes: Routes = [
  {
    path: '',
    component: DatewisepurchasereturnViewComponent,
    data: {
      title: 'Datewise Purchase Return Report'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatewisepurchasereturnviewRoutingModule { }

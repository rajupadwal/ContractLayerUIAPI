import { NgModule } from '@angular/core';

import {
  Routes,
  RouterModule
} from '@angular/router';

import { CustomerbookingoutstandingViewComponent } from './customerbookingoutstanding-view.component';


const routes: Routes = [
  {
    path: '',
    component: CustomerbookingoutstandingViewComponent,
    data: {
      title: 'Customer Booking Outstanding'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerbookingoutstandingviewRoutingModule { }

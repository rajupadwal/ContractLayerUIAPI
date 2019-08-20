import { NgModule } from '@angular/core';

import {
  Routes,
  RouterModule
} from '@angular/router';

import { CustomerbilloutstandingViewComponent } from './customerbilloutstanding-view.component';


const routes: Routes = [
  {
    path: '',
    component: CustomerbilloutstandingViewComponent,
    data: {
      title: 'Customer bill Outstanding'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerbilloutstandingviewRoutingModule { }

import { NgModule } from '@angular/core';

import {
  Routes,
  RouterModule
} from '@angular/router';

import { SupplierbilloutstandingViewComponent } from './supplierbilloutstanding-view.component';


const routes: Routes = [
  {
    path: '',
    component: SupplierbilloutstandingViewComponent,
    data: {
      title: 'Supplier bill Outstanding'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierbilloutstandingviewRoutingModule { }

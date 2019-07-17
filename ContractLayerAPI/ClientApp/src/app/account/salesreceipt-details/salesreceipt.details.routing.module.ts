import { NgModule } from '@angular/core';

import {
  Routes,
  RouterModule
} from '@angular/router';

import { SalesReceiptDetailsComponent } from './salesreceipt-details.component';

const routes: Routes = [
  {
    path: '',
    component: SalesReceiptDetailsComponent,
    data: {
      title: 'Sales Details'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaleReceiptDetailsRoutingModule { }

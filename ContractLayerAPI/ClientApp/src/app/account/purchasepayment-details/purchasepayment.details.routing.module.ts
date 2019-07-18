import { NgModule } from '@angular/core';

import {
  Routes,
  RouterModule
} from '@angular/router';

import { PurchasepaymentDetailsComponent } from './purchasepayment-details.component';

const routes: Routes = [
  {
    path: '',
    component: PurchasepaymentDetailsComponent,
    data: {
      title: 'Purchase Details'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchasePaymentDetailsRoutingModule { }

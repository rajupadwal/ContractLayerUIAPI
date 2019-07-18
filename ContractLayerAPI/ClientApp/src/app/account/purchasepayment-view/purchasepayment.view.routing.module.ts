import { NgModule } from '@angular/core';

import {
  Routes,
  RouterModule
} from '@angular/router';



import { PurchasepaymentViewComponent } from './purchasepayment-view.component';
import { PurchasepaymentDetailsComponent } from '../purchasepayment-details/purchasepayment-details.component';


const routes: Routes = [
  {
    path: '',
    component: PurchasepaymentViewComponent,
    data: {
      title: 'Purchase View'
    }
  },
  {
    path: 'purchasepayemnt',
    component: PurchasepaymentDetailsComponent,
    data: {
      title: 'purchasepayemnt'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchasePaymentViewRoutingModule { }

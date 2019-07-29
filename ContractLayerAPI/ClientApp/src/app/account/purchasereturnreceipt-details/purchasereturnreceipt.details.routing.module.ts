import { NgModule } from '@angular/core';

import {
  Routes,
  RouterModule
} from '@angular/router';

import { PurchasereturnreceiptDetailsComponent } from './purchasereturnreceipt-details.component';

const routes: Routes = [
  {
    path: '',
    component: PurchasereturnreceiptDetailsComponent,
    data: {
      title: 'Purchase Return Receipt Details'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchasereturnReceiptDetailsRoutingModule { }

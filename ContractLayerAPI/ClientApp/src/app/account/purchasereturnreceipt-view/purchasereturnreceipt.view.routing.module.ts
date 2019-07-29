import { NgModule } from '@angular/core';

import {
  Routes,
  RouterModule
} from '@angular/router';


import { PurchasereturnreceiptDetailsComponent } from '../purchasereturnreceipt-details/purchasereturnreceipt-details.component';
import { PurchasereturnReceiptViewComponent } from './purchasereturnreceipt-view.component';


const routes: Routes = [
  {
    path: '',
    component: PurchasereturnReceiptViewComponent,
    data: {
      title: 'Purchase Return Receipt View'
    }
  },
  {
    path: 'purchasereturnreceipt',
    component: PurchasereturnreceiptDetailsComponent,
    data: {
      title: 'Purchase Return Receipt '
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchasereturnReceiptViewRoutingModule { }

import { NgModule } from '@angular/core';

import {
  Routes,
  RouterModule
} from '@angular/router';


import { SalesreceiptViewComponent } from './salesreceipt-view.component';
import { SalesReceiptDetailsComponent } from '../salesreceipt-details/salesreceipt-details.component';


const routes: Routes = [
  {
    path: '',
    component: SalesreceiptViewComponent,
    data: {
      title: 'Sales View'
    }
  },
  {
    path: 'salereceipt',
    component: SalesReceiptDetailsComponent,
    data: {
      title: 'salereceipt'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesReceiptViewRoutingModule { }

import { NgModule } from '@angular/core';

import {
  Routes,
  RouterModule
} from '@angular/router';

import { PurchaseBillComponent } from '../purchase-bill/purchase-bill.component';
import { PurchasebillViewComponent } from './purchasebill-view.component';


const routes: Routes = [
  {
    path: '',
    component: PurchasebillViewComponent,
    data: {
      title: 'Purchase Bill view'
    }
  },

   {
    path: 'purchasebill',
     component: PurchaseBillComponent,
     data: {
       title: 'Purchase Bill'
     }
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchasebillviewRoutingModule { }

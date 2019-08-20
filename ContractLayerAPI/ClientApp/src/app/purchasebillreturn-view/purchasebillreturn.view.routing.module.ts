import { NgModule } from '@angular/core';

import {
  Routes,
  RouterModule
} from '@angular/router';

import { PurchaseBillReturnComponent } from '../purchase-billreturn/purchase-billreturn.component';
import { PurchasebillreturnViewComponent } from './purchasebillreturn-view.component';


const routes: Routes = [
  {
    path: '',
    component: PurchasebillreturnViewComponent,
    data: {
      title: 'Purchase Bill Return view'
    }
  },

   {
    path: 'purchasebillreturn',
     component: PurchaseBillReturnComponent,
     data: {
       title: 'Purchase Bill Return'
     }
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchasebillreturnviewRoutingModule { }

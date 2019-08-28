import { NgModule } from '@angular/core';

import {
  Routes,
  RouterModule
} from '@angular/router';

import { PurchaseBillReturnComponent } from './purchase-billreturn.component';

const routes: Routes = [
  {
    path: '',
    component: PurchaseBillReturnComponent,
    data: {
      title: 'Purchase Bill Return view'
    }
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseBillReturnRoutingModule { }

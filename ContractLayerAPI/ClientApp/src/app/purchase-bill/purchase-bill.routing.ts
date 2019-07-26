import { NgModule } from '@angular/core';

import {
  Routes,
  RouterModule
} from '@angular/router';

import { PurchaseBillComponent } from './purchase-bill.component';

const routes: Routes = [
  {
    path: '',
    component: PurchaseBillComponent,
    data: {
      title: 'Purchase Bill view'
    }
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseBillRoutingModule { }

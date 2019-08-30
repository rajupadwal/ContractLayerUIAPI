import { NgModule } from '@angular/core';

import {
  Routes,
  RouterModule
} from '@angular/router';

import { CustomerledgerViewComponent } from './customerledger-view.component';


const routes: Routes = [
  {
    path: '',
    component: CustomerledgerViewComponent,
    data: {
      title: 'Customer Ledger'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerledgerviewRoutingModule { }

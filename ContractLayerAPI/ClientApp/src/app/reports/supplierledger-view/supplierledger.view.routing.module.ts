import { NgModule } from '@angular/core';

import {
  Routes,
  RouterModule
} from '@angular/router';

import { SupplierledgerViewComponent } from './supplierledger-view.component';


const routes: Routes = [
  {
    path: '',
    component: SupplierledgerViewComponent,
    data: {
      title: 'Supplier Ledger'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierledgerviewRoutingModule { }

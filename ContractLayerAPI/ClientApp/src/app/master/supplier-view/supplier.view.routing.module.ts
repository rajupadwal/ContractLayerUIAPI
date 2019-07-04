import { NgModule } from '@angular/core';

import {
  Routes,
  RouterModule
} from '@angular/router';

import {SupplierViewComponent  } from './supplier-view.component';
import { SupplierMasterComponent } from '../supplier-master/supplier-master.component';


const routes: Routes = [
  //{
  //  path: '',
  //  component: SupplierViewComponent,
  //  data: {
  //    title: 'supplier view'
  //  }
  //},

  // {
  //  path: 'supplierView',
  //   component: SupplierMasterComponent,
  //   data: {
  //     title: 'supplierView'
  //   }
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierviewRoutingModule { }

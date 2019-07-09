import { NgModule } from '@angular/core';

import {
  Routes,
  RouterModule
} from '@angular/router';

import { ProductdescMasterComponent } from '../productdesc-master/productdesc-master.component';
import { ProductdescViewComponent } from './productdesc-view.component';


const routes: Routes = [
  {
    path: '',
    component: ProductdescViewComponent,
    data: {
      title: 'Product Desc View'
    }
  },

   {
     path: 'productdescmaster',
     component: ProductdescMasterComponent,
     data: {
       title: 'Product Desc Master'
     }
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductdescViewRoutingModule { }

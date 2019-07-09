import { NgModule } from '@angular/core';

import {
  Routes,
  RouterModule
} from '@angular/router';

import { ProductMasterComponent } from '../product-master/product-master.component';
import { ProductViewComponent } from './product-view.component';


const routes: Routes = [
  {
    path: '',
    component: ProductViewComponent,
    data: {
      title: 'Product view'
    }
  },

   {
    path: 'productmaster',
     component: ProductMasterComponent,
     data: {
       title: 'Product Master'
     }
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductViewRoutingModule { }

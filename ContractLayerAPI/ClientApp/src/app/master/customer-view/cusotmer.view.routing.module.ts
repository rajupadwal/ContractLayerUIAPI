import { NgModule } from '@angular/core';

import {
  Routes,
  RouterModule
} from '@angular/router';

import {CustomerViewComponent  } from './customer-view.component';
import { CustomerInfoComponent } from '../customer-info/customer-info.component';


const routes: Routes = [
  {
    path: '',
    component: CustomerViewComponent,
    data: {
      title: 'Customer view'
    }
  },

   {
    path: 'customerinfo',
     component: CustomerInfoComponent,
     data: {
       title: 'customerinfo'
     }
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CusotomerviewRoutingModule { }

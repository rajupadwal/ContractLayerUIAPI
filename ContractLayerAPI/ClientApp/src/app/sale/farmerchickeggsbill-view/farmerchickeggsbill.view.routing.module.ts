import { NgModule } from '@angular/core';

import {
  Routes,
  RouterModule
} from '@angular/router';

import { FarmerchickeggsbillViewComponent } from './farmerchickeggsbill-view.component';
import { FarmerchickeggsbillDetailComponent } from '../farmerchickeggsbill-detail/farmerchickeggsbill-detail.component';


const routes: Routes = [
  {
    path: '',
    component: FarmerchickeggsbillViewComponent,
    data: {
      title: 'Farmer Chik Eggs Bill view'
    }
  },

   {
     path: 'farmerinward',
     component: FarmerchickeggsbillDetailComponent,
     data: {
       title: 'Farmer Chik Eggs Bill Detail'
     }
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmerChikEggviewRoutingModule { }

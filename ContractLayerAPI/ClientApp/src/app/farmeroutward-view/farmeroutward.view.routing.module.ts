import { NgModule } from '@angular/core';

import {
  Routes,
  RouterModule
} from '@angular/router';

import { FarmerOutwardComponent } from '../farmer-outward/farmer-outward.component';
import { FarmeroutwardViewComponent } from './farmeroutward-view.component';


const routes: Routes = [
  {
    path: '',
    component: FarmeroutwardViewComponent,
    data: {
      title: 'Farmer Outward view'
    }
  },

   {
    path: 'farmeroutward',
     component: FarmerOutwardComponent,
     data: {
       title: 'Farmer Outward Master'
     }
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmeroutwardviewRoutingModule { }

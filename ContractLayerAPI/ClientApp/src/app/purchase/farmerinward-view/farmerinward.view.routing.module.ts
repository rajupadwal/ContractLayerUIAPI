import { NgModule } from '@angular/core';

import {
  Routes,
  RouterModule
} from '@angular/router';

import { FarmerinwardViewComponent } from './farmerinward-view.component';
import { FarmerInwardComponent } from '../farmer-inward/farmer-inward.component';


const routes: Routes = [
  {
    path: '',
    component: FarmerinwardViewComponent,
    data: {
      title: 'Farmer Inward view'
    }
  },

   {
    path: 'farmerinward',
     component: FarmerInwardComponent,
     data: {
       title: 'Farmer Inward Master'
     }
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmerinwardviewRoutingModule { }

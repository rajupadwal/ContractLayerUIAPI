import { NgModule } from '@angular/core';

import {
  Routes,
  RouterModule
} from '@angular/router';

import { FarmerchickeggsbillDetailComponent } from './farmerchickeggsbill-detail.component';

const routes: Routes = [
  {
    path: '',
    component: FarmerchickeggsbillDetailComponent,
    data: {
      title: 'Farmer Chick Eggs Detail'
    }
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmerChikEggsDetailRoutingModule { }

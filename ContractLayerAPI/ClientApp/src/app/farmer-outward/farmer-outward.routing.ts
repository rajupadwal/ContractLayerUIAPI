import { NgModule } from '@angular/core';

import {
  Routes,
  RouterModule
} from '@angular/router';

import { FarmerOutwardComponent } from './farmer-outward.component';

const routes: Routes = [
  {
    path: '',
    component: FarmerOutwardComponent,
    data: {
      title: 'Farmer Outward view'
    }
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmerOutwardRoutingModule { }

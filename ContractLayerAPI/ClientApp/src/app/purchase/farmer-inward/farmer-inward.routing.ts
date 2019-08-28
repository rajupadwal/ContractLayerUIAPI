import { NgModule } from '@angular/core';

import {
  Routes,
  RouterModule
} from '@angular/router';

import { FarmerInwardComponent  } from './farmer-inward.component';

const routes: Routes = [
  {
    path: '',
    component: FarmerInwardComponent,
    data: {
      title: 'Farmer inward view'
    }
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmerInwardRoutingModule { }

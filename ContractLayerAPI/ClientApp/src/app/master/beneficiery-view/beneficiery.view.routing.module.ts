import { NgModule } from '@angular/core';

import {
  Routes,
  RouterModule
} from '@angular/router';


import { BeneficieryViewComponent } from './beneficiery-view.component';
import { BeneficieryDetailsComponent } from '../beneficiery-details/beneficiery-details.component';

const routes: Routes = [
  {
    path: '',
    component: BeneficieryViewComponent,
    data: {
      title: 'Beneficiery Details View'
    }
  },

   {
     path: 'beneficierydetails',
     component: BeneficieryDetailsComponent,
     data: {
       title: 'Beneficiery Details'
     }
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeneficieryViewRoutingModule { }

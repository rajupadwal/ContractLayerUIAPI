import { NgModule } from '@angular/core';

import {
  Routes,
  RouterModule
} from '@angular/router';
import { SchemepaymentViewComponent } from './schemepayment-view.component';
import { SchemepaymentDetailsComponent } from '../schemepayment-details/schemepayment-details.component';


const routes: Routes = [
  {
    path: '',
    component: SchemepaymentViewComponent,
    data: {
      title: 'Scheme Payment View'
    }
  },

   {
    path: 'schemepayment',
     component: SchemepaymentDetailsComponent,
     data: {
       title: 'Scheme Payment'
     }
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchemePaymentViewRoutingModule { }

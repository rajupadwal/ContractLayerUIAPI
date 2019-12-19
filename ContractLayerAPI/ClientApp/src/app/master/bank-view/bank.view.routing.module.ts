import { NgModule } from '@angular/core';

import {
  Routes,
  RouterModule
} from '@angular/router';


import { BankViewComponent } from './bank-view.component';
import { BankMasterComponent } from '../bank-master/bank-master.component';


const routes: Routes = [
  {
    path: '',
    component: BankViewComponent,
    data: {
      title: 'Bank Master View'
    }
  },

   {
    path: 'bankmaster',
     component: BankMasterComponent,
     data: {
       title: 'Bank Master'
     }
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BankViewRoutingModule { }

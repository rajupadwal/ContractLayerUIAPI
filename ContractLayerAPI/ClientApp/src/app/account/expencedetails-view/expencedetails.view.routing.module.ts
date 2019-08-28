import { NgModule } from '@angular/core';

import {
  Routes,
  RouterModule
} from '@angular/router';

import { ExpencedetailsViewComponent } from './expencedetails-view.component';
import { ExpencedetailsMasterComponent } from '../expencedetails-master/expencedetails-master.component';


const routes: Routes = [
  {
    path: '',
    component: ExpencedetailsViewComponent,
    data: {
      title: 'expence deatils view'
    }
  },

   {
    path: 'expencedeatils',
     component: ExpencedetailsMasterComponent,
     data: {
       title: 'expence details master'
     }
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpencedetailsviewRoutingModule { }

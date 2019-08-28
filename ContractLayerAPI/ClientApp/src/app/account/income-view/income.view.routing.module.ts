import { NgModule } from '@angular/core';

import {
  Routes,
  RouterModule
} from '@angular/router';

import { IncomeDetailsComponent } from '../income-details/income-details.component';
import { IncomeViewComponent } from './income-view.component';

const routes: Routes = [
  {
    path: '',
    component: IncomeViewComponent,
    data: {
      title: 'Income Details view'
    }
  },
   {
     path: 'incomedetails',
     component: IncomeDetailsComponent,
     data: {
       title: 'Income Details'
     }
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncomeviewRoutingModule { }

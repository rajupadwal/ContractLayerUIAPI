import { NgModule } from '@angular/core';

import {
  Routes,
  RouterModule
} from '@angular/router';

import { IncomeDetailsComponent } from './income-details.component';

const routes: Routes = [
  {
    path: '',
    component: IncomeDetailsComponent,
    data: {
      title: 'Income Details'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncomeDetailsRoutingModule { }

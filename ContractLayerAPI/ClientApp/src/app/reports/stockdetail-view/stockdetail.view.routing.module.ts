import { NgModule } from '@angular/core';

import {
  Routes,
  RouterModule
} from '@angular/router';

import { StockdetailViewComponent } from './stockdetail-view.component';


const routes: Routes = [
  {
    path: '',
    component: StockdetailViewComponent,
    data: {
      title: 'Stock Detail'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockdetailviewRoutingModule { }

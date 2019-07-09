import { NgModule } from '@angular/core';

import {
  Routes,
  RouterModule
} from '@angular/router';

import { PlanViewComponent } from './plan-view.component';
import { PlanMasterComponent } from '../plan-master/plan-master.component';


const routes: Routes = [
  {
    path: '',
    component: PlanViewComponent,
    data: {
      title: 'Plan View'
    }
  },

   {
    path: 'planmaster',
     component: PlanMasterComponent,
     data: {
       title: 'planmaster'
     }
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanViewRoutingModule { }

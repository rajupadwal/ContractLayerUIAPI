import { NgModule } from '@angular/core';

import {
  Routes,
  RouterModule
} from '@angular/router';
import { StateViewComponent } from './state-view.component';
import { StateMasterComponent } from '../state-master/state-master.component';




const routes: Routes = [
  {
    path: '',
    component: StateViewComponent,
    data: {
      title: 'State Master View'
    }
  },

   {
    path: 'statemaster',
     component: StateMasterComponent,
     data: {
       title: 'State Master'
     }
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StateViewRoutingModule { }

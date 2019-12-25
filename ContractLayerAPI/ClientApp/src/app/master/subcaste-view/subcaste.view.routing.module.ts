import { NgModule } from '@angular/core';

import {
  Routes,
  RouterModule
} from '@angular/router';

import { SubcasteMasterComponent } from '../subcaste-master/subcaste-master.component';
import { SubcasteViewComponent } from './subcaste-view.component';


const routes: Routes = [
  {
    path: '',
    component: SubcasteViewComponent,
    data: {
      title: 'Subcaste Master View'
    }
  },

   {
    path: 'subcastemaster',
     component: SubcasteMasterComponent,
     data: {
       title: 'Sub Caste Master'
     }
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubcasteViewRoutingModule { }

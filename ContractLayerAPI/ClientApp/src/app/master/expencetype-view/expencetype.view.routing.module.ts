import { NgModule } from '@angular/core';

import {
  Routes,
  RouterModule
} from '@angular/router';


import { ExpencetypeMasterComponent } from '../expencetype-master/expencetype-master.component';
import { ExpencetypeViewComponent } from './expencetype-view.component';


const routes: Routes = [
  {
    path: '',
    component: ExpencetypeViewComponent,
    data: {
      title: 'Expencetye View'
    }
  },

   {
    path: 'expencetypemaster',
     component: ExpencetypeMasterComponent,
     data: {
       title: 'Expence Type'
     }
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpencetypeViewRoutingModule { }

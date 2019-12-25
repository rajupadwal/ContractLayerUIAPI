import { NgModule } from '@angular/core';

import {
  Routes,
  RouterModule
} from '@angular/router';


import { SubtypeMasterComponent } from '../subtype-master/subtype-master.component';
import { SubtypeViewComponent } from './subtype-view.component';


const routes: Routes = [
  {
    path: '',
    component: SubtypeViewComponent,
    data: {
      title: 'SubType View'
    }
  },

   {
     path: 'subtypemaster',
     component: SubtypeMasterComponent,
     data: {
       title: 'SubType Master'
     }
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubTypeViewRoutingModule { }

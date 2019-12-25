import { NgModule } from '@angular/core';

import {
  Routes,
  RouterModule
} from '@angular/router';
import { TypeViewComponent } from './type-view.component';
import { TypeMasterComponent } from '../type-master/type-master.component';




const routes: Routes = [
  {
    path: '',
    component: TypeViewComponent,
    data: {
      title: 'Type Master View'
    }
  },

   {
    path: 'typemaster',
     component: TypeMasterComponent,
     data: {
       title: 'Type Master'
     }
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeViewRoutingModule { }

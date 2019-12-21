import { NgModule } from '@angular/core';

import {
  Routes,
  RouterModule
} from '@angular/router';

import { TalukaMasterComponent } from '../taluka-master/taluka-master.component';
import { TalukaViewComponent } from './taluka-view.component';


const routes: Routes = [
  {
    path: '',
    component: TalukaViewComponent,
    data: {
      title: 'Taluka Master View'
    }
  },

   {
     path: 'talukamaster',
     component: TalukaMasterComponent,
     data: {
       title: 'Taluka Master'
     }
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TalukaViewRoutingModule { }

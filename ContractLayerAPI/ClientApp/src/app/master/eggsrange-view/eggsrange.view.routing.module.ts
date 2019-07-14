import { NgModule } from '@angular/core';

import {
  Routes,
  RouterModule
} from '@angular/router';

import { EggsrangeMasterComponent } from '../eggsrange-master/eggsrange-master.component';
import { EggsrangeViewComponent } from './eggsrange-view.component';


const routes: Routes = [
  {
    path: '',
    component: EggsrangeViewComponent,
    data: {
      title: 'Eggs Range View'
    }
  },

   {
     path: 'eggsrangemaster',
     component: EggsrangeMasterComponent,
     data: {
       title: 'Eggs Range Master'
     }
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EggsrangeViewRoutingModule { }

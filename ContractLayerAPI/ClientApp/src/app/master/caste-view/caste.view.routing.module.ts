import { NgModule } from '@angular/core';

import {
  Routes,
  RouterModule
} from '@angular/router';
import { CasteViewComponent } from './caste-view.component';
import { CasteMasterComponent } from '../caste-master/caste-master.component';


const routes: Routes = [
  {
    path: '',
    component: CasteViewComponent,
    data: {
      title: 'Caste Master View'
    }
  },

   {
     path: 'castemaster',
     component: CasteMasterComponent,
     data: {
       title: 'Caste Master'
     }
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CasteViewRoutingModule { }

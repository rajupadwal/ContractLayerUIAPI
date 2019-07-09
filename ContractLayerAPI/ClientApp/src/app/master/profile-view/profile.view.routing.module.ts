import { NgModule } from '@angular/core';

import {
  Routes,
  RouterModule
} from '@angular/router';

import { ProfileMasterComponent } from '../profile-master/profile-master.component';
import { ProfileViewComponent } from './profile-view.component';


const routes: Routes = [
  {
    path: '',
    component: ProfileViewComponent,
    data: {
      title: 'Profile View'
    }
  },

   {
    path: 'profilemaster',
     component: ProfileMasterComponent,
     data: {
       title: 'profilenmaster'
     }
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileViewRoutingModule { }

import { NgModule } from '@angular/core';

import {
  Routes,
  RouterModule
} from '@angular/router';

import { BranchMasterComponent } from '../branch-master/branch-master.component';
import { BranchViewComponent } from './branch-view.component';


const routes: Routes = [
  {
    path: '',
    component: BranchViewComponent,
    data: {
      title: 'Branch view'
    }
  },

   {
     path: 'branchmaster',
     component: BranchMasterComponent,
     data: {
       title: 'Branch Master'
     }
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BranchViewRoutingModule { }

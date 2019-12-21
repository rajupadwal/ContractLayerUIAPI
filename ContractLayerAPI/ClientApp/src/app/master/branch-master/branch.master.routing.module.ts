import { NgModule } from '@angular/core';

import {
  Routes,
  RouterModule
} from '@angular/router';

import { BranchMasterComponent } from './branch-master.component';


const routes: Routes = [
  {
    path: '',
    component: BranchMasterComponent,
    data: {
      title: 'Product Master'
    }
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BranchMasterRoutingModule { }

import { NgModule } from '@angular/core';

import {
  Routes,
  RouterModule
} from '@angular/router';

import { DistrictViewComponent } from './district-view.component';
import { DistrictMasterComponent } from '../district-master/district-master.component';


const routes: Routes = [
  {
    path: '',
    component: DistrictViewComponent,
    data: {
      title: 'District Master View'
    }
  },

   {
    path: 'districtmaster',
     component: DistrictMasterComponent,
     data: {
       title: 'District Master'
     }
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DistrictViewRoutingModule { }

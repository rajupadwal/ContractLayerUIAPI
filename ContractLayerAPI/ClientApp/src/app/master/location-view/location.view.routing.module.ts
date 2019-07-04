import { NgModule } from '@angular/core';

import {
  Routes,
  RouterModule
} from '@angular/router';

import {LocationViewComponent  } from './location-view.component';
import { LocationInfoComponent } from '../location-info/location-info.component';


const routes: Routes = [
  {
    path: '',
    component: LocationViewComponent,
    data: {
      title: 'Location view'
    }
  },

   {
    path: 'locationinfo',
     component: LocationInfoComponent,
     data: {
       title: 'locationinfo'
     }
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationviewRoutingModule { }

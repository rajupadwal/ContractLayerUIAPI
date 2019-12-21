import { NgModule } from '@angular/core';

import {
  Routes,
  RouterModule
} from '@angular/router';

import { SchemeInfoComponent } from '../scheme-info/scheme-info.component';
import { SchemeViewComponent } from './scheme-view.component';


const routes: Routes = [
  {
    path: '',
    component: SchemeViewComponent,
    data: {
      title: 'Scheme view'
    }
  },

   {
     path: 'Schemeinfo',
     component: SchemeInfoComponent,
     data: {
       title: 'Schemeinfo'
     }
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchemeviewRoutingModule { }

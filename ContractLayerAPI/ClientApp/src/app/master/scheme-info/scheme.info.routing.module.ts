import { NgModule } from '@angular/core';

import {
  Routes,
  RouterModule
} from '@angular/router';

import { SchemeInfoComponent } from './scheme-info.component';


const routes: Routes = [
  {
    path: '',
    component: SchemeInfoComponent,
    data: {
      title: 'Scheme Info'
    }
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchemeInfoRoutingModule { }

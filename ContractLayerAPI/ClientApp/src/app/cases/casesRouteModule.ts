import { NgModule } from '@angular/core';

import {
  Routes,
  RouterModule
} from '@angular/router';

import { CasesComponent } from './cases.component';
import { AddcaseComponent} from './addcase/addcase.component';

const routes: Routes = [
  {
    path: '',
    component: CasesComponent,
    data: {
      title: 'cases'
    }
  },
  {
    path: 'addcase',
    component: AddcaseComponent,
    data: {
      title: 'add cases'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CasesRouteModule { }

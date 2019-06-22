import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';

import { CasediaryComponent } from './casediary.component';

const routes: Routes = [
  {
    path: '',
    component: CasediaryComponent,
    data: {
      title: 'Case diary'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CaseDiaryRouteModule { }

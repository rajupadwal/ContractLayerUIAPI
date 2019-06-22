import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';

import { CauselistComponent } from './causelist.component';

const routes: Routes = [
  {
    path: '',
    component: CauselistComponent,
    data: {
      title: 'causelist'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CauselistsRouteModule { }

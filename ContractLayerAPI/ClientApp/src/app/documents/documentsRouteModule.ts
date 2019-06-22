import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';

import { DocumentsComponent } from './documents.component';

const routes: Routes = [
  {
    path: '',
    component: DocumentsComponent,
    data: {
      title: 'Documents'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentsRouteModule { }

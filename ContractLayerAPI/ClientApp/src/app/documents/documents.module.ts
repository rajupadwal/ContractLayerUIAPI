import { NgModule } from '@angular/core';


import { DocumentsComponent } from './documents.component';
import { DocumentsRouteModule } from './documentsRouteModule';

@NgModule({
  imports: [
    DocumentsRouteModule,
  ],
  declarations: [DocumentsComponent]
})
export class DocumentsModule { }

import { NgModule } from '@angular/core';


import { CauselistComponent } from './causelist.component';
import { CauselistsRouteModule } from './causelistsRouteModule';

@NgModule({
  imports: [
    CauselistsRouteModule,
  ],
  declarations: [CauselistComponent]
})
export class CauselistModule { }

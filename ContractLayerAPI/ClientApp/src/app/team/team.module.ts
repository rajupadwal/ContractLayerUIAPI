import { NgModule } from '@angular/core';


import { TeamComponent } from './team.component';
import { TeamRouteModule } from './teamsRouteModule';

@NgModule({
  imports: [
    TeamRouteModule,
  ],
  declarations: [TeamComponent]
})
export class TeamModule { }

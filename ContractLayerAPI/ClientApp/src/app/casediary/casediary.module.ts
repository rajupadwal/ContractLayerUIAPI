import { NgModule } from '@angular/core';

import { CasediaryComponent } from './casediary.component';
import { CaseDiaryRouteModule } from './casediaryRouteModule';

@NgModule({
  imports: [
    CaseDiaryRouteModule,
  ],
  declarations: [CasediaryComponent]
})
export class CaseDiaryModule { }

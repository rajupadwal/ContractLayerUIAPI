import { NgModule } from '@angular/core';


import { CalendarComponent } from './calendar.component';
import { CalendarsRouteModule } from './calendarsRouteModule';

@NgModule({
  imports: [
    CalendarsRouteModule,
  ],
  declarations: [CalendarComponent]
})
export class CalendarModule { }

import { NgModule } from '@angular/core';

import {
  Routes,
  RouterModule
} from '@angular/router';

import { BookingcancelDetailsComponent } from './bookingcancel-details.component';

const routes: Routes = [
  {
    path: '',
    component: BookingcancelDetailsComponent,
    data: {
      title: 'Booking Cancel'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingcancelDetailsRoutingModule { }

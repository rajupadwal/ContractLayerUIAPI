import { NgModule } from '@angular/core';

import {
  Routes,
  RouterModule
} from '@angular/router';

import { BookingViewComponent } from './booking-view.component';
import { BookingDetailsComponent } from '../booking-details/booking-details.component';


const routes: Routes = [
  {
    path: '',
    component: BookingViewComponent,
    data: {
      title: 'Booking View'
    }
  },
  {
    path: 'bookingdetails',
    component: BookingDetailsComponent,
    data: {
      title: 'bookingdetails'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingViewRoutingModule { }

import { NgModule } from '@angular/core';

import {
  Routes,
  RouterModule
} from '@angular/router';

import { BookingcancelDetailsComponent } from '../bookingcancel-details/bookingcancel-details.component';
import { BookingcancelViewComponent } from './bookingcancel-view.component';


const routes: Routes = [
  {
    path: '',
    component: BookingcancelViewComponent,
    data: {
      title: 'Booking Cancel view'
    }
  },
   {
    path: 'bookingcanceldetails',
     component: BookingcancelDetailsComponent,
     data: {
       title: 'Booking Cancel Details'
     }
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingcancelviewRoutingModule { }

import { NgModule, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AgGridModule } from 'ag-grid-angular';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { ValidationBorderModule } from '../../validation-border/validation-border.module';
import { BookingViewRoutingModule } from './booking.view.routing.module';
import { BookingViewComponent } from './booking-view.component';
import { DialogModule } from '../../dialog/dialog.module';
import { BookingDetailsComponent } from '../booking-details/booking-details.component';
import { BookingService } from './booking.service';
import { HttpClientModule } from '@angular/common/http';
//import { AutoCompleteModule } from 'primeng';

@NgModule({
  imports: [
    HttpClientModule,
    FormsModule,
    DialogModule,
    BsDropdownModule.forRoot(),
    AgGridModule.withComponents([]),
    BookingViewRoutingModule,
    CalendarModule,
    AutoCompleteModule,
    ReactiveFormsModule,
    ValidationBorderModule,
    CommonModule
  ],
  declarations: [BookingViewComponent,BookingDetailsComponent],
  providers: [BookingService]
})
export class BookingViewModule {
 }

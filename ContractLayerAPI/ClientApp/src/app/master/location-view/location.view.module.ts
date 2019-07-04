import { NgModule, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AgGridModule } from 'ag-grid-angular';

import { LocationViewComponent } from './location-view.component'

import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';

import { LocationviewRoutingModule  } from './location.view.routing.module'

//import { DPRService } from './dpr.service';
import { ValidationBorderModule } from '../../validation-border/validation-border.module';
import { LocationInfoComponent } from '../location-info/location-info.component';
import { LocationService } from './location.service';
//import { AutoCompleteModule } from 'primeng';

@NgModule({
  imports: [
    FormsModule,
    BsDropdownModule.forRoot(),
    AgGridModule.withComponents([]),
    LocationviewRoutingModule,
    CalendarModule,
    AutoCompleteModule,
    ReactiveFormsModule,
    ValidationBorderModule,
    CommonModule

  ],
  declarations: [LocationViewComponent, LocationInfoComponent],
  providers:[LocationService]

})
export class LocationViewModule {

}
//providers: [DPRService]

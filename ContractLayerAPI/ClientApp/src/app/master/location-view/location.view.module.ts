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
import { LocationService } from './location.service';
import { DialogConfig } from '../../dialog/dialog-config';
import { DialogService } from '../../dialog/dialog.service';
import { DialogRef } from '../../dialog/dialog-ref';
import { DialogModule } from '../../dialog/dialog.module';
import { LocationInfoModule } from '../location-info/location.info.module';
//import { AutoCompleteModule } from 'primeng';

@NgModule({
  imports: [
    FormsModule,
    DialogModule,
    BsDropdownModule.forRoot(),
    AgGridModule.withComponents([]),
    LocationviewRoutingModule,
    CalendarModule,
    AutoCompleteModule,
    ReactiveFormsModule,
    ValidationBorderModule,
    CommonModule,
    LocationInfoModule

  ],
  declarations: [LocationViewComponent],
  providers: [LocationService, DialogConfig,DialogService,DialogRef]

})
export class LocationViewModule {

}
//providers: [DPRService]

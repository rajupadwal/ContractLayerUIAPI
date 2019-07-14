import { NgModule, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AgGridModule } from 'ag-grid-angular';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { ValidationBorderModule } from '../../validation-border/validation-border.module';
import { DialogModule } from '../../dialog/dialog.module';
import { DialogConfig } from '../../dialog/dialog-config';
import { DialogRef } from '../../dialog/dialog-ref';
import { ExpencedetailsViewComponent } from './expencedetails-view.component';
import { ExpencedetailsMasterComponent } from '../expencedetails-master/expencedetails-master.component';
import { ExpencedetailsviewRoutingModule } from './expencedetails.view.routing.module';
import { ExpencedetailsService } from './expencedetails.service';
//import { AutoCompleteModule } from 'primeng';

@NgModule({
  imports: [
    FormsModule,
    DialogModule,
    BsDropdownModule.forRoot(),
    AgGridModule.withComponents([]),
    ExpencedetailsviewRoutingModule,
    CalendarModule,
    AutoCompleteModule,
    ReactiveFormsModule,
    ValidationBorderModule,
    CommonModule

  ],
  declarations: [ExpencedetailsViewComponent, ExpencedetailsMasterComponent],
  providers: [ExpencedetailsService, DialogConfig, DialogRef]

})
export class ExpencedetailsViewModule {

}
//providers: [DPRService]

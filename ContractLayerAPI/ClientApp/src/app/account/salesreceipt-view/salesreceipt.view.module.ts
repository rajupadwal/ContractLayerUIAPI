import { NgModule, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AgGridModule } from 'ag-grid-angular';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { ValidationBorderModule } from '../../validation-border/validation-border.module';
import { DialogModule } from '../../dialog/dialog.module';

import { SalesReceiptService } from './salesreceipt.service';
import { SalesReceiptViewRoutingModule } from './salesreceipt.view.routing.module';
import { SalesreceiptViewComponent } from './salesreceipt-view.component';
//import { AutoCompleteModule } from 'primeng';

@NgModule({
  imports: [
    FormsModule,
    DialogModule,
    BsDropdownModule.forRoot(),
    AgGridModule.withComponents([]),
    SalesReceiptViewRoutingModule,
    CalendarModule,
    AutoCompleteModule,
    ReactiveFormsModule,
    ValidationBorderModule,
    CommonModule
  ],
  declarations: [SalesreceiptViewComponent],
  providers: [SalesReceiptService]
})
export class SalesReceiptViewModule {
 }

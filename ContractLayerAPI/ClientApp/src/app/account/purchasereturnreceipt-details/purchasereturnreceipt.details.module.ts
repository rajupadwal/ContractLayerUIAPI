import { NgModule, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AgGridModule } from 'ag-grid-angular';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { ValidationBorderModule } from '../../validation-border/validation-border.module';
import { DialogModule } from '../../dialog/dialog.module';
import { PurchasereturnreceiptDetailsComponent } from './purchasereturnreceipt-details.component';
import { PurchasereturnReceiptDetailsRoutingModule } from './purchasereturnreceipt.details.routing.module';
//import { AutoCompleteModule } from 'primeng';

@NgModule({
  imports: [
    FormsModule,
    DialogModule,
    BsDropdownModule.forRoot(),
    AgGridModule.withComponents([]),
    PurchasereturnReceiptDetailsRoutingModule,
      CalendarModule,
    AutoCompleteModule,
    ReactiveFormsModule,
    ValidationBorderModule,
    AutoCompleteModule,
    CommonModule
  ],
  declarations: [PurchasereturnreceiptDetailsComponent]
})
export class PurchasereturnReceiptDetailsModule {
 
 }

import { NgModule, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AgGridModule } from 'ag-grid-angular';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { ValidationBorderModule } from '../../validation-border/validation-border.module';
import { DialogModule } from '../../dialog/dialog.module';
import { PurchasereturnReceiptService } from './purchasereturnreceipt.service';
import { PurchasereturnReceiptViewComponent } from './purchasereturnreceipt-view.component';
import { PurchasereturnReceiptViewRoutingModule } from './purchasereturnreceipt.view.routing.module';
import { PurchasereturnReceiptDetailsModule } from '../purchasereturnreceipt-details/purchasereturnreceipt.details.module';
//import { AutoCompleteModule } from 'primeng';

@NgModule({
  imports: [
    FormsModule,
    DialogModule,
    BsDropdownModule.forRoot(),
    AgGridModule.withComponents([]),
    PurchasereturnReceiptViewRoutingModule,
    CalendarModule,
    AutoCompleteModule,
    ReactiveFormsModule,
    ValidationBorderModule,
    CommonModule,
    PurchasereturnReceiptDetailsModule
  ],
  declarations: [PurchasereturnReceiptViewComponent],
  providers: [PurchasereturnReceiptService]
})
export class PurchasereturnReceiptViewModule {
 }

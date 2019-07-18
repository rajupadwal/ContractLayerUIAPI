import { NgModule, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AgGridModule } from 'ag-grid-angular';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { ValidationBorderModule } from '../../validation-border/validation-border.module';
import { DialogModule } from '../../dialog/dialog.module';
import { PurchasepaymentDetailsComponent } from '../purchasepayment-details/purchasepayment-details.component';
import { PurchasepaymentViewComponent } from './purchasepayment-view.component';
import { PurchasePaymentViewRoutingModule } from './purchasepayment.view.routing.module';
import { PurchasePayemntService } from './purchasepayment.service';
//import { AutoCompleteModule } from 'primeng';

@NgModule({
  imports: [
    FormsModule,
    DialogModule,
    BsDropdownModule.forRoot(),
    AgGridModule.withComponents([]),
    PurchasePaymentViewRoutingModule,
    CalendarModule,
    AutoCompleteModule,
    ReactiveFormsModule,
    ValidationBorderModule,
    CommonModule
  ],
  declarations: [PurchasepaymentViewComponent, PurchasepaymentDetailsComponent],
  providers: [PurchasePayemntService]
})
export class PurchasePaymentViewModule {
 }

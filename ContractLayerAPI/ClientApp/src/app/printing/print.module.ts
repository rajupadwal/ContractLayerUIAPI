import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrintLayoutComponent } from './print-layout/print-layout.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { PrintService } from './print.service';
import { AppMainComponent } from "src/app/app.main.component";

import { PurchaseBillPrintComponent } from './purchaseBillPrint/purchase-bill.print.component'
import { CreateSalePrintComponent } from './createSalePrint/create-sale.print.component';
import { CustomerReceiptPrintComponent } from './customerReceiptPrint/customer-receipt.print.component';
import { SupplierReceiptPrintComponent } from './supplierReceiptPrint/supplier-receipt.print.component';
import { FarmerInwardPrintComponent } from './farmerInwardPrint/farmer-inward.print.component';
import { FarmerOutwardPrintComponent } from './farmerOutwardPrint/farmer-outward.print.component';
import { SupplierLedgerPrintComponent } from './supplierLedgerPrint/supplier-ledger.print.component';
import { CustomerLedgerPrintComponent } from './customerLedgerPrint/customer-ledger.print.component';
import { DatewiseFarmerInwardPrintComponent } from './datewiseFarmerInwardPrint/datewise-farmerinward.print.component';
import { DatewiseFarmerOutwardPrintComponent } from './datewiseFarmerOutwardPrint/datewise-farmeroutward.print.component';
import { DatewiseExpencesPrintComponent } from './datewiseExpencesPrint/datewise-expences.print.component';
import { PurchaseBillReturnPrintComponent } from './purchaseBillReturnPrint/purchase-billreturn.print.component';
import { DatewisePurchaseReturnPrintComponent } from './datewisePurchaseReturnPrint/datewise-purchasereturn.print.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [
    PrintLayoutComponent,
    InvoiceComponent,
    AppMainComponent,
    PurchaseBillPrintComponent,
    CreateSalePrintComponent,
    CustomerReceiptPrintComponent,
    SupplierReceiptPrintComponent,
    FarmerInwardPrintComponent,
    FarmerOutwardPrintComponent,
    SupplierLedgerPrintComponent,
    CustomerLedgerPrintComponent,
    DatewiseFarmerInwardPrintComponent,
    DatewiseFarmerOutwardPrintComponent,
    DatewiseExpencesPrintComponent,
    PurchaseBillReturnPrintComponent,
    DatewisePurchaseReturnPrintComponent
  ],
  providers: [
    PrintService
  ],
})
export class printingModule { }

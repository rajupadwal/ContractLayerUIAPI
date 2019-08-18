import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrintLayoutComponent } from './print-layout/print-layout.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { PrintService } from './print.service';
import { AppMainComponent } from "src/app/app.main.component";

import { PurchaseBillPrintComponent } from './purchaseBillPrint/purchase-bill.print.component'
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
  ],
  providers: [
    PrintService
  ],
})
export class printingModule { }

import { NgModule, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AgGridModule } from 'ag-grid-angular';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { ValidationBorderModule } from '../validation-border/validation-border.module';
import { DialogModule } from '../dialog/dialog.module';
import { PurchaseBillReturnComponent } from './purchase-billreturn.component';
import { PurchaseBillReturnRoutingModule } from './purchase-billreturn.routing';

@NgModule({
  imports: [
    FormsModule,
    DialogModule,
    BsDropdownModule.forRoot(),
    AgGridModule.withComponents([]),
    
    CalendarModule,
    AutoCompleteModule,
    ReactiveFormsModule,
    ValidationBorderModule,
    CommonModule,
    PurchaseBillReturnRoutingModule
  ],
  declarations: [PurchaseBillReturnComponent]
  
})
export class PurchaseBillReturnModule {
 
 }

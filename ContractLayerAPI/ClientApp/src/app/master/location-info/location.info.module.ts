import { NgModule, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AgGridModule } from 'ag-grid-angular';

import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';


//import { DPRService } from './dpr.service';
import { ValidationBorderModule } from '../../validation-border/validation-border.module';
import { SupplierMasterRoutingModule } from '../supplier-master/supplier.master.routing.module';
import { SupplierMasterComponent } from '../supplier-master/supplier-master.component';
//import { AutoCompleteModule } from 'primeng';

@NgModule({
  imports: [
    FormsModule,
    BsDropdownModule.forRoot(),
    AgGridModule.withComponents([]),
    SupplierMasterRoutingModule,
    CalendarModule,
    AutoCompleteModule,
    ReactiveFormsModule,
    ValidationBorderModule,
    CommonModule

  ],
  declarations: [SupplierMasterComponent],
  
})
export class SupplierMasterModule {
 
 }
//providers: [DPRService]

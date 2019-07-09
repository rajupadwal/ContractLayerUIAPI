import { NgModule, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AgGridModule } from 'ag-grid-angular';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { ValidationBorderModule } from '../../validation-border/validation-border.module';
import { SupplierviewRoutingModule } from './supplier.view.routing.module';
import { SupplierViewComponent } from './supplier-view.component';
import { SupplierMasterComponent } from '../supplier-master/supplier-master.component';
import { SupplierService } from './supplier.service';
import { DialogModule } from '../../dialog/dialog.module';
import { DialogConfig } from '../../dialog/dialog-config';
import { DialogRef } from '../../dialog/dialog-ref';
//import { AutoCompleteModule } from 'primeng';

@NgModule({
  imports: [
    FormsModule,
    DialogModule,
    BsDropdownModule.forRoot(),
    AgGridModule.withComponents([]),
    SupplierviewRoutingModule,
    CalendarModule,
    AutoCompleteModule,
    ReactiveFormsModule,
    ValidationBorderModule,
    CommonModule

  ],
  declarations: [SupplierViewComponent, SupplierMasterComponent],
  providers: [SupplierService, DialogConfig, DialogRef]

})
export class SupplierViewModule {

}
//providers: [DPRService]

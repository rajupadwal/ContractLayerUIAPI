import { NgModule, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AgGridModule } from 'ag-grid-angular';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { ValidationBorderModule } from '../../validation-border/validation-border.module';
import { DialogModule } from '../../dialog/dialog.module';
import { EmployeeadvanceDetailsComponent } from './employeeadvance-details.component';
import { EmployeeadvanceDetailsRoutingModule } from './employeeadvance-details.routing.module';
//import { AutoCompleteModule } from 'primeng';

@NgModule({
  imports: [
    FormsModule,
    DialogModule,
    BsDropdownModule.forRoot(),
    AgGridModule.withComponents([]),
    EmployeeadvanceDetailsRoutingModule,
    CalendarModule,
    AutoCompleteModule,
    ReactiveFormsModule,
    ValidationBorderModule,
    CommonModule
  ],
  declarations: [EmployeeadvanceDetailsComponent],
  
})
export class EmployeeadvanceDetailsModule {
 
 }

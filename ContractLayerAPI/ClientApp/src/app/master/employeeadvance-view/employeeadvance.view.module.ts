import { NgModule, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AgGridModule } from 'ag-grid-angular';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { ValidationBorderModule } from '../../validation-border/validation-border.module';
//import { AutoCompleteModule } from 'primeng';
import { DialogModule } from '../../dialog/dialog.module';
import { EmployeeadvanceService } from './employeeadvance.service';
import { EmployeeadvanceViewComponent } from './employeeadvance-view.component';
import { EmployeeadvanceDetailsComponent } from '../employeeadvance-details/employeeadvance-details.component';
import { EmployeeadvanceViewRoutingModule } from './employeeadvance.view.routing.module';

@NgModule({
  imports: [
    FormsModule,
    DialogModule,
    BsDropdownModule.forRoot(),
    AgGridModule.withComponents([]),
    EmployeeadvanceViewRoutingModule,
    CalendarModule,
    AutoCompleteModule,
    ReactiveFormsModule,
    ValidationBorderModule,
    CommonModule
  ],
  declarations: [EmployeeadvanceViewComponent, EmployeeadvanceDetailsComponent],
  providers:[EmployeeadvanceService]

})
export class EmployeeadvanceViewModule {

}

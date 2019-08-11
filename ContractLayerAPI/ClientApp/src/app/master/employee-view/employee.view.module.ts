import { NgModule, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AgGridModule } from 'ag-grid-angular';
import { EmployeeViewComponent } from './employee-view.component'
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { EmployeeviewRoutingModule } from './employee.view.routing.module'
import { ValidationBorderModule } from '../../validation-border/validation-border.module';
import { EmployeeService} from './employee.service'
//import { AutoCompleteModule } from 'primeng';
import { DialogModule } from '../../dialog/dialog.module';

@NgModule({
  imports: [
    FormsModule,
    DialogModule,
    BsDropdownModule.forRoot(),
    AgGridModule.withComponents([]),
    EmployeeviewRoutingModule,
    CalendarModule,
    AutoCompleteModule,
    ReactiveFormsModule,
    ValidationBorderModule,
    CommonModule
  ],
  declarations: [EmployeeViewComponent],
  providers:[EmployeeService]
})
export class EmployeeViewModule {
}

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
import { SchemePaymentService } from './schemepayment.service';
import { SchemepaymentViewComponent } from './schemepayment-view.component';
import { SchemePaymentModule } from '../schemepayment-details/schemepayment.details.module';
import { SchemePaymentViewRoutingModule } from './schemepayment.view.routing.module';

@NgModule({
  imports: [
    FormsModule,
    DialogModule,
    BsDropdownModule.forRoot(),
    AgGridModule.withComponents([]),
    SchemePaymentViewRoutingModule,
    CalendarModule,
    AutoCompleteModule,
    ReactiveFormsModule,
    ValidationBorderModule,
    CommonModule,
    SchemePaymentModule
   
  ],
  declarations: [SchemepaymentViewComponent],
  providers: [SchemePaymentService]

})
export class SchemePaymentViewModule {

}

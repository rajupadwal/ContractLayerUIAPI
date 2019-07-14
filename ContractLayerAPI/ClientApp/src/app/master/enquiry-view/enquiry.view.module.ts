import { NgModule, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AgGridModule } from 'ag-grid-angular';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { ValidationBorderModule } from '../../validation-border/validation-border.module';
import { DialogModule } from '../../dialog/dialog.module';
import { EnquiryviewRoutingModule } from './enquiry.view.routing.module';
import { EnquiryViewComponent } from './enquiry-view.component';
import { EnquiryMasterComponent } from '../enquiry-master/enquiry-master.component';
import { EnquiryService } from './enquiry.service';
//import { AutoCompleteModule } from 'primeng';

@NgModule({
  imports: [
    FormsModule,
    DialogModule,
    BsDropdownModule.forRoot(),
    AgGridModule.withComponents([]),
    EnquiryviewRoutingModule,
    CalendarModule,
    AutoCompleteModule,
    ReactiveFormsModule,
    ValidationBorderModule,
    CommonModule

  ],
  declarations: [EnquiryViewComponent, EnquiryMasterComponent],
  providers: [EnquiryService]

})
export class EnquiryViewModule {

}

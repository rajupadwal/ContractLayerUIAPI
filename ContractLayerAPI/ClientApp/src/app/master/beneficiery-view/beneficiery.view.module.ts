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
import { BeneficieryViewRoutingModule } from './beneficiery.view.routing.module';
import { BeneficieryViewComponent } from './beneficiery-view.component';
import { BeneficieryDetailsModule } from '../beneficiery-details/beneficiery.details.module';
import { BeneficieryService } from './beneficiery.service';

@NgModule({
  imports: [
    FormsModule,
    DialogModule,
    BsDropdownModule.forRoot(),
    AgGridModule.withComponents([]),
    BeneficieryViewRoutingModule,
    CalendarModule,
    AutoCompleteModule,
    ReactiveFormsModule,
    ValidationBorderModule,
    CommonModule,
    BeneficieryDetailsModule
  ],
  declarations: [BeneficieryViewComponent],
  providers: [BeneficieryService]

})
export class BeneficieryViewModule {

}

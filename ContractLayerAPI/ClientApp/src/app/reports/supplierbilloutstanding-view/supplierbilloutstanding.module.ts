import { NgModule, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AgGridModule } from 'ag-grid-angular';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
//import { AutoCompleteModule } from 'primeng';
import { DialogModule } from '../../dialog/dialog.module';
import { ValidationBorderModule } from '../../validation-border';
import { SupplierbilloutstandingViewComponent } from './supplierbilloutstanding-view.component';
import { SupplierbilloutstandingService } from './supplierbilloutstanding.service';
import { SupplierbilloutstandingviewRoutingModule } from './supplierbilloutstanding.view.routing.module';

@NgModule({
  imports: [
    FormsModule,
    DialogModule,
    BsDropdownModule.forRoot(),
    AgGridModule.withComponents([]),
    SupplierbilloutstandingviewRoutingModule,
    CalendarModule,
    AutoCompleteModule,
    ReactiveFormsModule,
    ValidationBorderModule,
    CommonModule
  ],
  declarations: [SupplierbilloutstandingViewComponent],
  providers:[SupplierbilloutstandingService]

})
export class SupplierbilloutstandingModule {

}

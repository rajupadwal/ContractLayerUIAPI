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
import { DatewiseinwardService } from './datewiseinward.service';
import { DatewiseinwardViewComponent } from './datewiseinward-view.component';
import { DatewiseinwardviewRoutingModule } from './datewiseinward.view.routing.module';

@NgModule({
  imports: [
    FormsModule,
    DialogModule,
    BsDropdownModule.forRoot(),
    AgGridModule.withComponents([]),
    DatewiseinwardviewRoutingModule,
    CalendarModule,
    AutoCompleteModule,
    ReactiveFormsModule,
    ValidationBorderModule,
    CommonModule
  ],
  declarations: [DatewiseinwardViewComponent],
  providers: [DatewiseinwardService]

})
export class DatewiseinwardModule {

}

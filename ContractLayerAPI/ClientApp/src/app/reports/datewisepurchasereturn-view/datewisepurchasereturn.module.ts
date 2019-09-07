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
import { DatewisepurchasereturnService } from './datewisepurchasereturn.service';
import { DatewisepurchasereturnViewComponent } from './datewisepurchasereturn-view.component';
import { DatewisepurchasereturnviewRoutingModule } from './datewisepurchasereturn.view.routing.module';

@NgModule({
  imports: [
    FormsModule,
    DialogModule,
    BsDropdownModule.forRoot(),
    AgGridModule.withComponents([]),
    DatewisepurchasereturnviewRoutingModule,
    CalendarModule,
    AutoCompleteModule,
    ReactiveFormsModule,
    ValidationBorderModule,
    CommonModule
  ],
  declarations: [DatewisepurchasereturnViewComponent],
  providers: [DatewisepurchasereturnService]

})
export class DatewisepurchasereturnModule {

}

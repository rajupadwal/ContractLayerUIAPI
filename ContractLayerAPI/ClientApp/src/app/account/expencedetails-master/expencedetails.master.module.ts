import { NgModule, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AgGridModule } from 'ag-grid-angular';



import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';


//import { DPRService } from './dpr.service';
import { ValidationBorderModule } from '../../validation-border/validation-border.module';
import { ExpencedetailsMasterComponent } from './expencedetails-master.component';
import { ExpencedetailsMasterRoutingModule } from './expencedetails.master.routing.module';
//import { AutoCompleteModule } from 'primeng';

@NgModule({
  imports: [
    FormsModule,
    BsDropdownModule.forRoot(),
    AgGridModule.withComponents([]),
    CalendarModule,
    AutoCompleteModule,
    ReactiveFormsModule,
    ValidationBorderModule,
    CommonModule,
    ExpencedetailsMasterRoutingModule

  ],
  declarations: [ExpencedetailsMasterComponent],

})
export class ExpencedetailsMasterModule {

}
//providers: [DPRService]

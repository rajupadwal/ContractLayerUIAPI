import { NgModule, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AgGridModule } from 'ag-grid-angular';
import { FarmerInwardComponent } from './farmer-inward.component';
import {FarmerInwardRoutingModule} from './farmer-inward.routing';


import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { ValidationBorderModule } from '../../validation-border/validation-border.module';
import { DialogModule } from '../../dialog/dialog.module';
//import { AutoCompleteModule } from 'primeng';

@NgModule({
  imports: [
    FormsModule,
    DialogModule,
    BsDropdownModule.forRoot(),
    AgGridModule.withComponents([]),
    
    CalendarModule,
    AutoCompleteModule,
    ReactiveFormsModule,
    ValidationBorderModule,
    CommonModule,
    FarmerInwardRoutingModule
  ],
  declarations: [FarmerInwardComponent]
  
})
export class FarmerInwardModule {
 
 }

import { NgModule, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AgGridModule } from 'ag-grid-angular';

import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';


import { ValidationBorderModule } from '../../validation-border/validation-border.module';
import { ProductdescService } from './productdesc.service';
import { ProductdescViewComponent } from './productdesc-view.component';
import { ProductdescViewRoutingModule } from './productdesc.view.routing.module';
//import { AutoCompleteModule } from 'primeng';
import { DialogModule } from '../../dialog/dialog.module';

@NgModule({
  imports: [
    FormsModule,
    DialogModule,
    BsDropdownModule.forRoot(),
    AgGridModule.withComponents([]),
    ProductdescViewRoutingModule,
    CalendarModule,
    AutoCompleteModule,
    ReactiveFormsModule,
    ValidationBorderModule,
    CommonModule

  ],
  declarations: [ProductdescViewComponent],
  providers:[ProductdescService]

})
export class ProductdescViewModule {

}

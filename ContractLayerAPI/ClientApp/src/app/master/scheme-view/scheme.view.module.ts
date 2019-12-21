import { NgModule, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AgGridModule } from 'ag-grid-angular';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { ValidationBorderModule } from '../../validation-border/validation-border.module';
import { DialogConfig } from '../../dialog/dialog-config';
import { DialogService } from '../../dialog/dialog.service';
import { DialogRef } from '../../dialog/dialog-ref';
import { DialogModule } from '../../dialog/dialog.module';
import { SchemeViewComponent } from './scheme-view.component';
import { SchemeviewRoutingModule } from './scheme.view.routing.module';
import { SchemeService } from './scheme.service';
import { SchemeInfoModule } from '../scheme-info/scheme.info.module';
//import { AutoCompleteModule } from 'primeng';

@NgModule({
  imports: [
    FormsModule,
    DialogModule,
    BsDropdownModule.forRoot(),
    AgGridModule.withComponents([]),
    SchemeviewRoutingModule,
    CalendarModule,
    AutoCompleteModule,
    ReactiveFormsModule,
    ValidationBorderModule,
    CommonModule,
    SchemeInfoModule

  ],
  declarations: [SchemeViewComponent],
  providers: [SchemeService, DialogConfig,DialogService,DialogRef]

})
export class SchemeViewModule {

}

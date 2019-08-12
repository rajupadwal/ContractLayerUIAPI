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
import { ExpencetypeViewComponent } from './expencetype-view.component';
import { ExpencetypeViewRoutingModule } from './expencetype.view.routing.module';
import { ExpencetypeService } from './expencetype.service';
import { ExpencetypeMasterModule } from '../expencetype-master/expencetype.master.module';

@NgModule({
  imports: [
    FormsModule,
    DialogModule,
    BsDropdownModule.forRoot(),
    AgGridModule.withComponents([]),
    ExpencetypeViewRoutingModule,
    CalendarModule,
    AutoCompleteModule,
    ReactiveFormsModule,
    ValidationBorderModule,
    CommonModule,
    ExpencetypeMasterModule

  ],
  declarations: [ExpencetypeViewComponent],
  providers:[ExpencetypeService]

})
export class ExpencetypeViewModule {

}

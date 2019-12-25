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
import { SubTypeMasterModule } from '../subtype-master/subtype.master.module';
import { SubTypeViewRoutingModule } from './subtype.view.routing.module';
import { SubtypeViewComponent } from './subtype-view.component';
import { SubTypeService } from './subtype.service';

@NgModule({
  imports: [
    FormsModule,
    DialogModule,
    BsDropdownModule.forRoot(),
    AgGridModule.withComponents([]),
    SubTypeViewRoutingModule,
    CalendarModule,
    AutoCompleteModule,
    ReactiveFormsModule,
    ValidationBorderModule,
    CommonModule,
    SubTypeMasterModule
  ],
  declarations: [SubtypeViewComponent],
  providers: [SubTypeService]

})
export class SubtypeViewModule {

}

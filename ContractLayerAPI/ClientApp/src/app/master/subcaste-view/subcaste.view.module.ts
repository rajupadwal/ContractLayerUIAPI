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
import { SubcasteService } from './subcaste.service';
import { SubcasteViewComponent } from './subcaste-view.component';
import { SubcasteMasterModule } from '../subcaste-master/subcaste.master.module';
import { SubcasteViewRoutingModule } from './subcaste.view.routing.module';

@NgModule({
  imports: [
    FormsModule,
    DialogModule,
    BsDropdownModule.forRoot(),
    AgGridModule.withComponents([]),
    SubcasteViewRoutingModule,
    CalendarModule,
    AutoCompleteModule,
    ReactiveFormsModule,
    ValidationBorderModule,
    CommonModule,
   SubcasteMasterModule
  ],
  declarations: [SubcasteViewComponent],
  providers: [SubcasteService]

})
export class SubcasteViewModule {

}

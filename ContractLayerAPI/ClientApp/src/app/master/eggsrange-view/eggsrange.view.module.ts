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
import { EggsrangeViewComponent } from './eggsrange-view.component';
import { EggsrangeService } from './eggsrange.service';
import { EggsrangeViewRoutingModule } from './eggsrange.view.routing.module';
import { EggsrangeMasterModule } from '../eggsrange-master/eggsrange.master.module';

@NgModule({
  imports: [
    FormsModule,
    DialogModule,
    BsDropdownModule.forRoot(),
    AgGridModule.withComponents([]),
    EggsrangeViewRoutingModule,
    CalendarModule,
    AutoCompleteModule,
    ReactiveFormsModule,
    ValidationBorderModule,
    CommonModule,
    EggsrangeMasterModule
  ],
  declarations: [EggsrangeViewComponent],
  providers:[EggsrangeService]

})
export class EggsrangeViewModule {

}

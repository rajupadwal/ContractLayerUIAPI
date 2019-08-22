import { NgModule, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AgGridModule } from 'ag-grid-angular';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';


//import { DPRService } from './dpr.service';
//import { AutoCompleteModule } from 'primeng';
import { FarmerinwardViewComponent } from './farmerinward-view.component';
import { FarmerinwardviewRoutingModule } from './farmerinward.view.routing.module';
import { FarmerinwardService } from './farmerinward.service';
import { DialogModule } from '../../dialog/dialog.module';
import { ValidationBorderModule } from '../../validation-border';
import { FarmerInwardModule } from '../farmer-inward/farmer-inward.module';

@NgModule({
  imports: [
    FormsModule,
    DialogModule,
    BsDropdownModule.forRoot(),
    AgGridModule.withComponents([]),
    FarmerinwardviewRoutingModule,
    CalendarModule,
    AutoCompleteModule,
    ReactiveFormsModule,
    ValidationBorderModule,
    CommonModule,
    FarmerInwardModule

  ],
  declarations: [FarmerinwardViewComponent],
  providers:[FarmerinwardService]

})
export class FarmerinwardModule {

}

import { NgModule, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AgGridModule } from 'ag-grid-angular';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';


//import { DPRService } from './dpr.service';
//import { AutoCompleteModule } from 'primeng';

import { FarmerchickeggsbillViewComponent } from './farmerchickeggsbill-view.component';
import { FarmerChikEggviewRoutingModule } from './farmerchickeggsbill.view.routing.module';
import { DialogModule } from '../../dialog/dialog.module';
import { ValidationBorderModule } from '../../validation-border';
import { FarmerchikeggbillService } from './farmerchickeggsbill.service';
import { FarmerChickEggsDetailModule } from '../farmerchickeggsbill-detail/farmerchickeggsbill.detail.module';

@NgModule({
  imports: [
    FormsModule,
    DialogModule,
    BsDropdownModule.forRoot(),
    AgGridModule.withComponents([]),
    FarmerChikEggviewRoutingModule,
    CalendarModule,
    AutoCompleteModule,
    ReactiveFormsModule,
    ValidationBorderModule,
    CommonModule,
    FarmerChickEggsDetailModule

  ],
  declarations: [FarmerchickeggsbillViewComponent],
  providers: [FarmerchikeggbillService]

})
export class FarmerchickeggbillModule {

}

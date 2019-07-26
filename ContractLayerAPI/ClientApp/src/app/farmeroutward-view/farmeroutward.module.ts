import { NgModule, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AgGridModule } from 'ag-grid-angular';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';


//import { DPRService } from './dpr.service';
//import { AutoCompleteModule } from 'primeng';
import { DialogModule } from '../dialog/dialog.module';
import { ValidationBorderModule } from '../validation-border';
import { FarmeroutwardService } from './farmeroutward.service';
import { FarmerOutwardComponent } from '../farmer-outward/farmer-outward.component';
import { FarmeroutwardViewComponent } from './farmeroutward-view.component';
import { FarmeroutwardviewRoutingModule } from './farmeroutward.view.routing.module';

@NgModule({
  imports: [
    FormsModule,
    DialogModule,
    BsDropdownModule.forRoot(),
    AgGridModule.withComponents([]),
    FarmeroutwardviewRoutingModule,
    CalendarModule,
    AutoCompleteModule,
    ReactiveFormsModule,
    ValidationBorderModule,
    CommonModule

  ],
  declarations: [FarmeroutwardViewComponent, FarmerOutwardComponent],
  providers:[FarmeroutwardService]

})
export class FarmeroutwardModule {

}

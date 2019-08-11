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
import { PurchasebillService } from './purchasebill.service';
import { PurchasebillViewComponent } from './purchasebill-view.component';
import { PurchasebillviewRoutingModule } from './purchasebill.view.routing.module';

@NgModule({
  imports: [
    FormsModule,
    DialogModule,
    BsDropdownModule.forRoot(),
    AgGridModule.withComponents([]),
    PurchasebillviewRoutingModule,
    CalendarModule,
    AutoCompleteModule,
    ReactiveFormsModule,
    ValidationBorderModule,
    CommonModule
  ],
  declarations: [PurchasebillViewComponent],
  providers:[PurchasebillService]

})
export class PurchasebillModule {

}

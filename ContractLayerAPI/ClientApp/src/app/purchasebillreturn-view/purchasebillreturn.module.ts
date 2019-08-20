import { NgModule, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AgGridModule } from 'ag-grid-angular';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';

import { DialogModule } from '../dialog/dialog.module';
import { ValidationBorderModule } from '../validation-border';
import { PurchasebillreturnViewComponent } from './purchasebillreturn-view.component';
import { PurchasebillreturnService } from './purchasebillreturn.service';
import { PurchasebillreturnviewRoutingModule } from './purchasebillreturn.view.routing.module';
import { PurchaseBillReturnModule } from '../purchase-billreturn/purchase-billreturn.module';

@NgModule({
  imports: [
    FormsModule,
    DialogModule,
    BsDropdownModule.forRoot(),
    AgGridModule.withComponents([]),
    PurchasebillreturnviewRoutingModule,
    CalendarModule,
    AutoCompleteModule,
    ReactiveFormsModule,
    ValidationBorderModule,
    CommonModule,
    PurchaseBillReturnModule
  ],
  declarations: [PurchasebillreturnViewComponent],
  providers:[PurchasebillreturnService]

})
export class PurchasebillreturnModule {

}

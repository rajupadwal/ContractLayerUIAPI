import { NgModule, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AgGridModule } from 'ag-grid-angular';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { ValidationBorderModule } from '../../validation-border/validation-border.module';
import { DialogModule } from '../../dialog/dialog.module';
import { BranchViewComponent } from './branch-view.component';
import { BranchMasterModule } from '../branch-master/branch.master.module';
import { BranchViewRoutingModule } from './branch.view.routing.module';
import { BranchService } from './branch.service';


@NgModule({
  imports: [
    FormsModule,
    DialogModule,
    BsDropdownModule.forRoot(),
    AgGridModule.withComponents([]),
    BranchViewRoutingModule,
    CalendarModule,
    AutoCompleteModule,
    ReactiveFormsModule,
    ValidationBorderModule,
    CommonModule,
    BranchMasterModule

  ],
  declarations: [BranchViewComponent],
  providers: [BranchService]
})
export class BranchViewModule {

}

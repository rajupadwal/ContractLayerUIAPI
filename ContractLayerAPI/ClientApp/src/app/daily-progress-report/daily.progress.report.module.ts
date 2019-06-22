import { NgModule, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AgGridModule } from 'ag-grid-angular';

import { DailyProgressReportComponent } from './daily-progress-report.component';
import { DailyProgressReportRouteModule } from './dailyProgressReportRouteModule';
import { AddDailyProgressReportComponent } from './add-daily-progress-report/add-daily-progress-report.component';

import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';

import { DPRService } from './dpr.service';
import { ValidationBorderModule } from '../validation-border/validation-border.module';
//import { AutoCompleteModule } from 'primeng';

@NgModule({
  imports: [
    FormsModule,
    BsDropdownModule.forRoot(),
    AgGridModule.withComponents([]),
    DailyProgressReportRouteModule,
    CalendarModule,
    AutoCompleteModule,
    ReactiveFormsModule,
    ValidationBorderModule,
    CommonModule

  ],
  declarations: [DailyProgressReportComponent, AddDailyProgressReportComponent],
  providers: [DPRService]
})
export class DailyProgressReportModule { }

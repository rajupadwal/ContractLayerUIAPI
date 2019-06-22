import { NgModule, Input } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AgGridModule } from 'ag-grid-angular';

import { CasesComponent } from './cases.component';
import { CasesRouteModule } from './casesRouteModule';
import { AddcaseComponent } from './addcase/addcase.component';

import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
//import { AutoCompleteModule } from 'primeng';

@NgModule({
  imports: [
    FormsModule,

    BsDropdownModule.forRoot(),
    AgGridModule.withComponents([]),
    CasesRouteModule,
    CalendarModule,
    AutoCompleteModule

  ],
  declarations: [CasesComponent, AddcaseComponent]
})
export class CasesModule { }

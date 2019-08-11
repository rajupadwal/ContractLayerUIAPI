import { NgModule, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AgGridModule } from 'ag-grid-angular';

import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';

import { ValidationBorderModule } from '../../validation-border/validation-border.module';
import { ProfileViewComponent } from './profile-view.component';
import { ProfileViewRoutingModule } from './profile.view.routing.module';
import { ProfileService } from './profile.service';
//import { AutoCompleteModule } from 'primeng';
import { DialogModule } from '../../dialog/dialog.module';
import { ProfileMasterModule } from '../profile-master/profile.master.module';

@NgModule({
  imports: [
    FormsModule,
    DialogModule,
    BsDropdownModule.forRoot(),
    AgGridModule.withComponents([]),
    ProfileViewRoutingModule,
    CalendarModule,
    AutoCompleteModule,
    ReactiveFormsModule,
    ValidationBorderModule,
    CommonModule,
    ProfileMasterModule

  ],
  declarations: [ProfileViewComponent],
  providers:[ProfileService]

})
export class ProfileViewModule {

}

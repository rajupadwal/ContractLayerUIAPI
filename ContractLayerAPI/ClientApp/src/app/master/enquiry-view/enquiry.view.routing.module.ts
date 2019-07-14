import { NgModule } from '@angular/core';

import {
  Routes,
  RouterModule
} from '@angular/router';

import { EnquiryMasterComponent } from '../enquiry-master/enquiry-master.component';
import { EnquiryViewComponent } from './enquiry-view.component';

const routes: Routes = [
  {
    path: '',
    component: EnquiryViewComponent,
    data: {
      title: 'Enquiry view'
    }
  },

   {
     path: 'enquirymaster',
     component: EnquiryMasterComponent,
     data: {
       title: 'Enquiry master'
     }
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnquiryviewRoutingModule { }

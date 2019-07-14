import { NgModule } from '@angular/core';

import {
  Routes,
  RouterModule
} from '@angular/router';

import { EnquiryMasterComponent } from './enquiry-master.component';

const routes: Routes = [
  {
    path: '',
    component: EnquiryMasterComponent,
    data: {
      title: 'Enquiry Master'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnquiryMasterRoutingModule { }

import { NgModule } from '@angular/core';


import { InvoicesComponent } from './invoices.component';
import { InvoicesRouteModule } from './invoicesRouteModule';

@NgModule({
  imports: [
    InvoicesRouteModule,
  ],
  declarations: [InvoicesComponent]
})
export class InvoicesModule { }

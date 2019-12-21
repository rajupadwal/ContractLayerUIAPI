import { NgModule } from '@angular/core';

import {
    Routes,
    RouterModule
} from '@angular/router';

import { SchemepaymentDetailsComponent } from './schemepayment-details.component';


const routes: Routes = [
    {
        path: '',
        component: SchemepaymentDetailsComponent,
        data: {
            title: 'Scheme Payemnt'
        }
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SchemePaymentRoutingModule { }

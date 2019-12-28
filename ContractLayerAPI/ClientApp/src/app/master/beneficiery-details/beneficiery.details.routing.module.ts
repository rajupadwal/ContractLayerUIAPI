import { NgModule } from '@angular/core';

import {
    Routes,
    RouterModule
} from '@angular/router';

import { BeneficieryDetailsComponent } from './beneficiery-details.component';


const routes: Routes = [
    {
        path: '',
        component: BeneficieryDetailsComponent,
        data: {
            title: 'Beneficiery Details'
        }
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BeneficieryDetailsRoutingModule { }

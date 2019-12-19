import { NgModule } from '@angular/core';

import {
    Routes,
    RouterModule
} from '@angular/router';

import { BankMasterComponent } from './bank-master.component';


const routes: Routes = [
    {
        path: '',
        component: BankMasterComponent,
        data: {
            title: 'Bank Master'
        }
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BankMasterRoutingModule { }

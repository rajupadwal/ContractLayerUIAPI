import { NgModule } from '@angular/core';

import {
    Routes,
    RouterModule
} from '@angular/router';

import { ExpencetypeMasterComponent } from './expencetype-master.component';


const routes: Routes = [
    {
        path: '',
        component: ExpencetypeMasterComponent,
        data: {
            title: 'Expencetype master'
        }
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ExpencetypeMasterRoutingModule { }

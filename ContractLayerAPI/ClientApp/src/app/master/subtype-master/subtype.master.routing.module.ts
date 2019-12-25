import { NgModule } from '@angular/core';

import {
    Routes,
    RouterModule
} from '@angular/router';

import { SubtypeMasterComponent } from './subtype-master.component';


const routes: Routes = [
    {
        path: '',
        component: SubtypeMasterComponent,
        data: {
            title: 'SubType Master'
        }
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SubTypeMasterRoutingModule { }

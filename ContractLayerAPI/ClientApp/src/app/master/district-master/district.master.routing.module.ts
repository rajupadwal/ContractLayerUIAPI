import { NgModule } from '@angular/core';

import {
    Routes,
    RouterModule
} from '@angular/router';

import { DistrictMasterComponent } from './district-master.component';


const routes: Routes = [
    {
        path: '',
        component: DistrictMasterComponent,
        data: {
            title: 'District Master'
        }
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DistrictMasterRoutingModule { }

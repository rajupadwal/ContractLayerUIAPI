import { NgModule } from '@angular/core';

import {
    Routes,
    RouterModule
} from '@angular/router';

import { SubcasteMasterComponent } from './subcaste-master.component';


const routes: Routes = [
    {
        path: '',
        component: SubcasteMasterComponent,
        data: {
            title: 'Sub Caste Master'
        }
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SubcasteMasterRoutingModule { }

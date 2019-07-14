import { NgModule } from '@angular/core';

import {
    Routes,
    RouterModule
} from '@angular/router';

import { EggsrangeMasterComponent } from './eggsrange-master.component';


const routes: Routes = [
    {
        path: '',
        component: EggsrangeMasterComponent,
        data: {
            title: 'Eggs Range Master'
        }
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EggsrangeMasterRoutingModule { }

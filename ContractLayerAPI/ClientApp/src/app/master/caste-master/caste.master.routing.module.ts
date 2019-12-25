import { NgModule } from '@angular/core';

import {
    Routes,
    RouterModule
} from '@angular/router';
import { CasteMasterComponent } from './caste-master.component';

const routes: Routes = [
    {
        path: '',
        component: CasteMasterComponent,
        data: {
          title: 'Caste Master'
        }
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CasteMasterRoutingModule { }

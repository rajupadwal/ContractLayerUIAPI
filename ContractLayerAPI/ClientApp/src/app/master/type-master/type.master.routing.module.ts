import { NgModule } from '@angular/core';

import {
    Routes,
    RouterModule
} from '@angular/router';

import { TypeMasterComponent } from './type-master.component';


const routes: Routes = [
    {
        path: '',
        component: TypeMasterComponent,
        data: {
          title: 'Type Master'
        }
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TypeMasterRoutingModule { }

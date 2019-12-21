import { NgModule } from '@angular/core';

import {
    Routes,
    RouterModule
} from '@angular/router';

import { TalukaMasterComponent } from './taluka-master.component';

const routes: Routes = [
    {
        path: '',
    component: TalukaMasterComponent,
        data: {
          title: 'Taluka Master'
        }
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TalukaMasterRoutingModule { }

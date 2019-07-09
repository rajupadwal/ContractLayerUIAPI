import { NgModule } from '@angular/core';

import {
    Routes,
    RouterModule
} from '@angular/router';

import { ProfileMasterComponent } from './profile-master.component';


const routes: Routes = [
    {
        path: '',
        component: ProfileMasterComponent,
        data: {
          title: 'Profile master'
        }
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProfileMasterRoutingModule { }

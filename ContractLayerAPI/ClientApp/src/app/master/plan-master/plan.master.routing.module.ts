import { NgModule } from '@angular/core';

import {
    Routes,
    RouterModule
} from '@angular/router';

import { PlanMasterComponent } from './plan-master.component';


const routes: Routes = [
    {
        path: '',
        component: PlanMasterComponent,
        data: {
            title: 'Plan master'
        }
    },
    //   {
    //     path: 'adddailyprogressreport',
    //     component: AddDailyProgressReportComponent,
    //     data: {
    //       title: 'add Progress report'
    //     }
    //   }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PlanMasterRoutingModule { }

import { NgModule } from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';
import { EmployeeadvanceDetailsComponent } from './employeeadvance-details.component';

const routes: Routes = [
    {
        path: '',
        component: EmployeeadvanceDetailsComponent,
        data: {
            title: 'Employee Advance'
        }
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EmployeeadvanceDetailsRoutingModule { }

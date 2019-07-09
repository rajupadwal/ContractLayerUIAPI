import { NgModule } from '@angular/core';

import {
    Routes,
    RouterModule
} from '@angular/router';

import { ProductdescMasterComponent } from './productdesc-master.component';


const routes: Routes = [
    {
        path: '',
        component: ProductdescMasterComponent,
        data: {
            title: 'Product Description Master'
        }
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductdescMasterRoutingModule { }

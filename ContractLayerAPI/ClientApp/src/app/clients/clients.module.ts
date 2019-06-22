import { NgModule } from '@angular/core';
import { ClientsComponent } from './clients.component';
import { ClientsRouteModule } from './clientsRouteModule';
import { AgGridModule } from 'ag-grid-angular';
@NgModule({
  imports: [
    ClientsRouteModule,
    AgGridModule.withComponents([]),
  ],
  declarations: [ClientsComponent]
})
export class ClientsModule { }

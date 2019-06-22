import { NgModule } from '@angular/core';


import { TodoComponent } from './todo.component';
import { TodoRouteModule } from './todosRouteModule';

@NgModule({
  imports: [
    TodoRouteModule,
  ],
  declarations: [TodoComponent]
})
export class TodoModule { }

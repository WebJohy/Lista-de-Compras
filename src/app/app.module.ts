import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListConteinerComponent } from './list-conteiner/list-conteiner.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { DoneListComponent } from './components/done-list/done-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ListConteinerComponent,
    TodoListComponent,
    DoneListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

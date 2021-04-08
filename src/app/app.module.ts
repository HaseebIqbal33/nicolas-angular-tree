import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersHierarchyComponent } from './users-hierarchy/users-hierarchy.component';
import { UsersInfoComponent } from './users-info/users-info.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersHierarchyComponent,
    UsersInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

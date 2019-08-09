import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, RoutingPages } from './app-routing.module';
import { HeaderMainModule } from './fragments/header-main/header-main.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutingPages
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderMainModule,
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }

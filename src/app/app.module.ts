import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//importing HttpClientModule from @angular/common/http
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    //Add HttpClientModule to the imports to make it available in our application
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppComponent } from './app.component';
import { SecComponent } from './sec/sec.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    SecComponent
  ],
  imports: [
    // modules
    BrowserModule,
    FormsModule
  ],
  providers: [
    // services
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

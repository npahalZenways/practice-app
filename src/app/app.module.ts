import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppComponent } from './app.component';
import { SecComponent } from './sec/sec.component';
import { FormsModule } from "@angular/forms";
import { HomeComponent } from './home/home.component';
import { RouterModule, Route } from "@angular/router";
import { ErrorComponent } from './error/error.component';
import { LoginService } from "./login.service";

const myroutes: Route[] = [{

}]

@NgModule({
  declarations: [
    AppComponent,
    SecComponent,
    HomeComponent,
    ErrorComponent
  ],
  imports: [
    // modules
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([{
      path:'',
      redirectTo: 'sec',
      pathMatch:'full'
    },{
      path:'sec',
      component: SecComponent,
      children:[{
        path:'home',
        component: HomeComponent
      },{
        path:'childmodule',
        loadChildren:'./child/child.module#ChildModule'
      }]
    },{
      path: '**',
      component: ErrorComponent
    }])
  ],
  providers: [
    // services
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

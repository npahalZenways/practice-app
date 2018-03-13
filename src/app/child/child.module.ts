import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

@Component({
  template:'<p>This is component of child module'
})
class MyChildComponent {
  constructor() {
    
  }
}

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path:'comp',
      component:MyChildComponent
    }])
  ],
  declarations: [
    MyChildComponent
  ]
})
export class ChildModule { }

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { LoginService } from "./login.service";

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private r:Router, private ar: ActivatedRoute, private login:LoginService){

  }
  routeToChild(){
    this.r.navigate(['/sec/childmodule/comp'])
  }

  changetext(){
    this.login.mytext = 'text changed from app'
  }
  ngOnInit(){
    setInterval(()=>{
      console.log('from app', this.login.mytext)
    },2000)
  }
}

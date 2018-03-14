import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { LoginService } from "./login.service";
import { Http, Headers } from "@angular/http";

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  header;
  constructor(private r:Router, private ar: ActivatedRoute, private login:LoginService, private http:Http){
    this.header = new Headers();
    localStorage.setItem('name', 'nitin');
    this.header.append('x-access-token',localStorage.name);
  }
  routeToChild(){
    this.r.navigate(['/sec/childmodule/comp'])
  }

  changetext(){
    this.login.mytext = 'text changed from app'
  }
  ngOnInit(){
    // setInterval(()=>{
    //   console.log('from app', this.login.mytext)
    // },2000)
    console.log('Api started');
    this.http.get('https://api.fixer.io/latest?base=INR',{headers: this.header}).subscribe(data => {
      console.log(data.json());
      console.log('Api call completed');
    });
  }
}

import { Component, OnInit } from "@angular/core";
import { LoginService } from "../login.service";

@Component({
    selector: 'sec',
    templateUrl: './sec.component.html',
    styleUrls: ['./sec.component.css']
})
export class SecComponent implements OnInit{
    constructor(private login : LoginService){

    }
    changetext(){
        this.login.mytext = 'text changed from sec';
    }
    ngOnInit(){
        setInterval(() => {
            console.log('from sec', this.login.mytext)
        }, 2000)
    }
}
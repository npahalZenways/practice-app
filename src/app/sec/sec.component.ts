import { Component, OnInit, Input, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'sec',
  templateUrl: './sec.component.html',
  styleUrls: ['./sec.component.css'],
  // inputs: ['abc']
  outputs: ['abcChange']
})
export class SecComponent implements OnInit {

  @Input('abc') input;
  abcChange = new EventEmitter();
  
  @ViewChild('mypara') para;

  api1(){
    let abc = 'hello';
    console.log(abc)
  }

  sendOutput(){
    this.abcChange.emit('new color');
  }

  printThis(p){
    // console.log(p)
    console.log(this.para);
  }

  ngOnInit() {
    this.api1();
  }

}

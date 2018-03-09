import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sec',
  templateUrl: './sec.component.html',
  styleUrls: ['./sec.component.css'],
  // inputs: ['id:nameOfApp']
})
export class SecComponent implements OnInit {
  // property decorator
  @Input() output;
  // id;
  @Output('outputChange') myoutput = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}

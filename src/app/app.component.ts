import { Component } from '@angular/core';

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  color = 'red';
  istrue = true;
  mypromise(title){
    return new Promise(function(resolve, reject){
      if(title == 'app'){
        resolve('resolved');
      } else{
        reject('rejected');
      }
    })
  }
  print(e){
    console.log(e)
    // this.mypromise(this.title).then(res=>console.log(res)).catch(err=>console.log(err));
  }
  output(e){
    console.log(e);
  }
}

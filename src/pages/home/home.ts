import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }

  num : number;

  strArray = []
  
  cal(){
      this.strArray = []
      for ( var j = 1 ; j <= 12 ; j ++) {
        console.log( this.num + ' x ' + j  + ' = ' + this.num * j )
        var str = this.num + ' x ' + j  + ' = ' + this.num * j
        this.strArray.push(str);
      }

  }

  

}

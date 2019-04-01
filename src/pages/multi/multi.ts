import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MultiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-multi',
  templateUrl: 'multi.html',
})
export class MultiPage {
  constructor(public navCtrl: NavController) {
    this.cal()
  }
  num1 : number;
  num2 :number; 
  strArrayBig = []
  
  cal(){
    
    this.strArrayBig = []

    for( var i = this.num1 ; i <= this.num2 ; i ++){
      
      var strArray = []
      for ( var j = 1 ; j <= 12 ; j ++) {
        // console.log(i + ' x ' + j  + ' = ' + i * j)
        var str = i + ' x ' + j  + ' = ' + i * j
         strArray.push(str);
      }
      this.strArrayBig.push(strArray);
      console.log(this.strArrayBig)
      console.log('-----------')
    }

  }

}

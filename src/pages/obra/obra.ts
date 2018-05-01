import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuController } from 'ionic-angular';



/**
 * Generated class for the ObraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-obra',
  templateUrl: 'obra.html',
})
export class ObraPage {
 
  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController
    ) 
    {
       
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ObraPage');
  }

  openMenu() {
    this.menu.open();
  }
 
  closeMenu() {
    this.menu.close();
  }
 
  toggleMenu() {
    this.menu.toggle();
  }
 
  salir(){
    this.navCtrl.popToRoot();
  }
  

}

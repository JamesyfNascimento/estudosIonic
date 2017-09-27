import { NavController, NavParams, MenuController } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
  selector: 'page-menu-settings',
  templateUrl: 'menu-settings.html',
})
export class MenuSettings {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public menuCtrl: MenuController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuSettings');
  }

  ionViewDidEnter() {
    this.menuCtrl.toggle("menu3")
    .then((opened: boolean) => {
      console.log("Abriu? " , opened);
    }).catch(err => console.log("Erro ao abrir menu3! " + err)
    );
  }

}

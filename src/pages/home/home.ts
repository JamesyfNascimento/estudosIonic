import { MenuSettings } from './../menu-settings/menu-settings';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from './../about/aboutPage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  onAbout(): void{
    this.navCtrl.push(AboutPage);
  }

  onPage(): void{
    this.navCtrl.push(MenuSettings);
  }

}

import { AboutPage } from './../pages/about/aboutPage';
import { Component, AfterViewInit } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp implements AfterViewInit{
  

  pages: [{title: string, component: any}]
  rootPage:any = HomePage;

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    public menuCtrl: MenuController,
  ) {
    
    this.pages = [
      {title: 'Home Page', component: HomePage},
      {title: 'AboutPage', component: AboutPage}
    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(page: {title: string, component: any}): void{
    this.rootPage = page.component;
  }

  onOpen(): void {
    console.log("Menu opened!");
  }

  onClose(): void {
    console.log("Menu closed!");
  }

  onDrag(): void {
    console.log("Menu dragged!");
  }

  ngAfterViewInit(): void {
    this.menuCtrl.open('menu1');
  }

}


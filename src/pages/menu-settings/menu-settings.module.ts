import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuSettings } from './menu-settings';

@NgModule({
  declarations: [
    MenuSettings,
  ],
  imports: [
    IonicPageModule.forChild(MenuSettings),
  ],
})
export class MenuSettingsModule {}

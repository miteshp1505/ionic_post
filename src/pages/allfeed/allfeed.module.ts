import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AllfeedPage } from './allfeed';

@NgModule({
  declarations: [
    AllfeedPage,
  ],
  imports: [
    IonicPageModule.forChild(AllfeedPage),
  ],
})
export class AllfeedPageModule {}

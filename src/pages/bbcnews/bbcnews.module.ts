import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BbcnewsPage } from './bbcnews';

@NgModule({
  declarations: [
    BbcnewsPage,
  ],
  imports: [
    IonicPageModule.forChild(BbcnewsPage),
  ],
})
export class BbcnewsPageModule {}

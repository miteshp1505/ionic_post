import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SubcatPage } from './subcat';

@NgModule({
  declarations: [
    SubcatPage,
  ],
  imports: [
    IonicPageModule.forChild(SubcatPage),
  ],
})
export class SubcatPageModule {}

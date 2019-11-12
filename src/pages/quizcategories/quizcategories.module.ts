import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuizcategoriesPage } from './quizcategories';

@NgModule({
  declarations: [
    QuizcategoriesPage,
  ],
  imports: [
    IonicPageModule.forChild(QuizcategoriesPage),
  ],
})
export class QuizcategoriesPageModule {}

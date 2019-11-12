import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AudiofilePage } from './audiofile';

@NgModule({
  declarations: [
    AudiofilePage,
  ],
  imports: [
    IonicPageModule.forChild(AudiofilePage),
  ],
})
export class AudiofilePageModule {}

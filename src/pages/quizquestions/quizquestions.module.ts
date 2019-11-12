import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuizquestionsPage } from './quizquestions';

@NgModule({
  declarations: [
    QuizquestionsPage,
  ],
  imports: [
    IonicPageModule.forChild(QuizquestionsPage),
  ],
})
export class QuizquestionsPageModule {}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from "../../providers/auth-service";
import { QuizcategoriesPage } from '../quizcategories/quizcategories';

/**
 * Generated class for the QuizPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quiz',
  templateUrl: 'quiz.html',
})
export class QuizPage {
	
  public resposeData: any;
  public noRecords: boolean;
  userPostData = {
    user_id: "",
    token: "",
    feed: "",
    feed_id: "",
    lastCreated: ""
  };
  
  public categories = new Array;
  public id : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthService) {
	  
	  this.id = navParams.get("id");
	  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuizPage');
	
	if(this.id == 1){
	this.userPostData.user_id = this.id;
	this.authService.postData(this.userPostData, "getAllQuizCategories").then((result) =>{
    this.resposeData = result;
    console.log(this.resposeData);
	console.log(this.resposeData.categoryData);
	this.categories = this.resposeData.categoryData;
	});
	}
	else{
	this.userPostData.user_id = this.id;	
	this.authService.postData(this.userPostData, "getAllQuizCategories").then((result) =>{
    this.resposeData = result;
    console.log(this.resposeData);
	console.log(this.resposeData.categoryData);
	this.categories = this.resposeData.categoryData;
	});
	}
	
  }
  
  openLink(id){
	  console.log(id);
	  this.navCtrl.push(QuizcategoriesPage,{id:id});
  }

}

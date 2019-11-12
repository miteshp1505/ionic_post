import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from "../../providers/auth-service";
import { QuizquestionsPage } from '../quizquestions/quizquestions';
import { StartquizPage } from '../startquiz/startquiz';



/**
 * Generated class for the QuizcategoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quizcategories',
  templateUrl: 'quizcategories.html',
})
export class QuizcategoriesPage {

  public resposeData: any;
  public noRecords: boolean;
  userPostData = {
    user_id: "",
    category_id: ""
  };
  
  public categories = new Array;
  public categoryid:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthService) {
	  this.categoryid = navParams.get("id");
	  console.log(this.categoryid);
	  
	}

  ionViewDidLoad() {
	  this.userPostData.category_id = this.categoryid;
    console.log('ionViewDidLoad QuizcategoriesPage');
	this.authService.postData(this.userPostData, "getAllQuizSubCategories").then((result) =>{
    this.resposeData = result;
    console.log(this.resposeData);
	console.log(this.resposeData.categoryData);
	this.categories = this.resposeData.categoryData;
	});
  }
  
  openLink(id,name,time,questions){
	  this.navCtrl.push(StartquizPage,{ id:id,name:name,time:time,ques:questions});
  }

}

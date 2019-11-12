import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuizquestionsPage } from '../quizquestions/quizquestions';
import { AdMobFree, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free';

/**
 * Generated class for the StartquizPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-startquiz',
  templateUrl: 'startquiz.html',
})
export class StartquizPage {

	public categoryid:any;
	public categoryname:any;
	public quiztime:any;
	public questions:any;

  constructor(public navCtrl: NavController,private admobFree: AdMobFree, public navParams: NavParams) {
	  this.categoryid = navParams.get("id");
	  this.categoryname = navParams.get("name");
	  this.quiztime = navParams.get("time");
	  this.questions = navParams.get("ques");
	  console.log(this.categoryid);
	  console.log(this.categoryname);
	  console.log(this.quiztime);
	  console.log(this.questions);
	  
	const configVar : AdMobFreeInterstitialConfig = {
		id:'ca-app-pub-4792901677807513/2947230417',
		isTesting:false,
		autoShow:true
	}
	
	this.admobFree.interstitial.config(configVar);
	this.admobFree.interstitial.prepare().then(() => {
		this.admobFree.interstitial.show();
	}).catch(e => console.log(e));  
	  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StartquizPage');
  }
	
	start(){
	  this.navCtrl.push(QuizquestionsPage,{ id:this.categoryid,name:this.categoryname,time:this.quiztime,ques:this.questions});
  }
}

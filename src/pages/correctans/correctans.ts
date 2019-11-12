// import { Component,Injectable, Pipe } from '@angular/core';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from "../../providers/auth-service";

/**
 * Generated class for the CorrectansPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-correctans',
  templateUrl: 'correctans.html',
})
// @Pipe({
  // name: 'hoursMinutesSeconds'
// })
// @Injectable()
export class CorrectansPage {
	
	public resposeData: any;
	public wrong:any;
	public correct:any;
	public anscount=[];
	public totalques:any;
	public skipdata:any;
	public category_id:any;
	// public timercount:any;
	// public counter:any;
	// public timeleft:any;
	userPostData = {
    user_id: "",
    cat_id: ""
  };

  public categories = new Array;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public authService: AuthService) {
	  this.wrong = navParams.get("wrong");
	  this.correct = navParams.get("correct");
	  this.anscount = navParams.get("anscount");
	  this.totalques = navParams.get("totalques");
	  this.category_id = navParams.get("cat_id");
	  console.log('catId' +this.category_id);
	  this.skipdata = this.totalques-(this.wrong + this.correct);
	  
	  //console.log(this.correct);
	  //console.log(this.anscount);
	  //console.log(this.anscount.length);
	  //console.log("skip data");
	  //console.log(this.totalques-this.anscount.length);
	  
	  this.userPostData.cat_id = this.category_id;
	  
	this.authService.postData(this.userPostData, "getAllQuizSubCatQuestions").then((result) =>{
		this.resposeData = result;
		console.log('correct data');
		console.log(this.resposeData);
		console.log(this.resposeData.categoryData);
		this.categories = this.resposeData.categoryData;
		//this.totalcount = this.categories.length;
		
		console.log(this.categories);
		
	});
	  
	  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CorrectansPage');
	// this.counter = 0;
	// this.timeleft = 60;
	// setInterval(() => {
  // this.timeIt();
// }, 1000);
	
  }
  
  // timeIt(){
	  // this.counter++;
	  // console.log(this.timeleft-this.counter);
	  // this.timercount=this.convertseconds(this.timeleft-this.counter);
  // }

  // convertseconds(s){
	  // let min = Math.floor(s/60);
	  // let sec = s%60;
	  // return min+':'+sec;
  // }
}

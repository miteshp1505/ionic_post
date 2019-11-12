import { Component, ViewChild ,Injectable, Pipe } from '@angular/core';
import { Nav, IonicPage, NavController, NavParams, Slides, Navbar } from 'ionic-angular';
import { AuthService } from "../../providers/auth-service";
import { CorrectansPage } from '../correctans/correctans';

/**
 * Generated class for the QuizquestionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quizquestions',
  templateUrl: 'quizquestions.html',
})
@Pipe({
  name: 'hoursMinutesSeconds'
})
@Injectable()
export class QuizquestionsPage {

	@ViewChild('SwipedTabsSlider') SwipedTabsSlider: Slides ;
	@ViewChild(Navbar) navBar: Navbar;
	
	@ViewChild(Nav) nav: Nav;
	
	public resposeData: any;
  public noRecords: boolean;
  userPostData = {
    user_id: "",
    cat_id: ""
  };
	public category_id:any;
	public category_name:any;
	public category_time:any;
	public category_questions:any;
	
	public newdatamodel:any;
	
	public categories = new Array;
	
	public newanswer:any;
	
	public autoManufacturers:any;
	
	public totalcount:any;
	
	public countdata = false;
	
	public quesans=[];
	
	public timercount:any;
	public counter:any;
	public timeleft:any;
	
	public intervaldata:any;
	
	public nextbtn:any;
	
  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthService) {
	this.category_id = navParams.get("id");
	this.category_name = navParams.get("name");
	this.category_time = navParams.get("time");
	this.category_questions = navParams.get("ques");
	console.log(this.category_id);
	console.log(this.category_name);
	console.log(this.category_time);
	console.log(this.category_questions);
	
  }

  ionViewDidLoad() {
	  this.navBar.backButtonClick = (ev:UIEvent) => {
		//alert('this will work in Ionic 3+');
		clearInterval(this.intervaldata);
		this.navCtrl.pop();
		}
	console.log('ionViewDidLoad QuizquestionsPage');
	this.userPostData.cat_id = this.category_id;
	//this.userPostData.cat_name = this.category_name;
	//this.userPostData.cat_time = this.category_time;
	//this.userPostData.cat_no = this.category_questions;
	
	this.authService.postData(this.userPostData, "getAllQuizSubCatQuestions").then((result) =>{
    this.resposeData = result;
	
	this.counter = 0;
	this.timeleft = this.category_time*60;
	this.intervaldata = setInterval(() => {
	this.timeIt();
	}, 1000);
	console.log('correct data');
    console.log(this.resposeData);
	console.log(this.resposeData.categoryData);
	this.categories = this.resposeData.categoryData;
	this.totalcount = this.categories.length;
	});
	
  }
  
  timeIt(){
	  this.counter++;
	  //console.log(this.timeleft-this.counter);
	  this.timercount=this.convertseconds(this.timeleft-this.counter);
	  if(this.timercount == '0:0'){
		  this.timercount = null;
		  clearInterval(this.intervaldata);
		  this.submitans();
	  }
  }

  convertseconds(s){
	  let min = Math.floor(s/60);
	  let sec = s%60;
	  return min+':'+sec;
  }
  
  mcqAnswer(ind,ans,rightans){
	  console.log(ind+" "+ans);
	  //this.newanswer = ans;
	  if(ans==rightans){
		this.quesans[ind]=ans;
	  }else{
		this.quesans[ind]="0";
	  }
	  console.log(this.quesans);
	  console.log(rightans);
  }
  
  updateIndicatorPosition(){
	  console.log(this.SwipedTabsSlider.getActiveIndex());
	  if(this.SwipedTabsSlider.getActiveIndex() == this.totalcount-1){
		  this.countdata = true;
	  }else{
		  this.countdata = false;
	  }
	//  this.newanswer[this.SwipedTabsSlider.getActiveIndex()]=
	 //console.log(this.autoManufacturers);
	 
	/* if(this.SwipedTabsSlider.getActiveIndex() == 0){
		  console.log(this.newanswer);
	  }else if(this.SwipedTabsSlider.getActiveIndex() == 1){
		  console.log(this.newanswer);
		  //let storagedata = {1:1};	
		  //localStorage.setItem('userAnswerData', JSON.stringify(storagedata));
	  }else if(this.SwipedTabsSlider.getActiveIndex() == 2){
		  console.log(this.newanswer);
	  }else if(this.SwipedTabsSlider.getActiveIndex() == 3){
		  console.log(this.newanswer);
	  }*/
  }
  
  prev(){
	  this.SwipedTabsSlider.slidePrev();
  }
  
  next(){
	  this.SwipedTabsSlider.slideNext();
  }
  
  submitans(){
	this.timercount=null;
	clearInterval(this.intervaldata);
	let wrongans = 0;
	let skip = 0;
	let array = this.quesans;
	for(let i = 0; i < array.length; ++i){
		if(array[i] == 0){
        wrongans++;
	}
	}
	
	for(let i = 0; i < array.length; ++i){
		if(array[i] == null){
        skip++;
	}
	}
	
	console.log(' skip questions '+skip);
	console.log(wrongans);
	let rightans = this.quesans.length - (skip+wrongans);
	console.log(rightans);
  
	this.navCtrl.push(CorrectansPage,{ wrong:wrongans, correct:rightans, anscount:this.quesans, totalques:this.totalcount, cat_id:this.category_id});
	}
}

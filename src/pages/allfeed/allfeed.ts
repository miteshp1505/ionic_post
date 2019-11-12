import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, Slides , NavParams, LoadingController } from 'ionic-angular';
import { RssProvider } from "../../providers/rss/rss";
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { AuthService } from "../../providers/auth-service";

/**
 * Generated class for the AllfeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-allfeed',
  templateUrl: 'allfeed.html',
})
export class AllfeedPage {

	 @ViewChild('SwipedTabsSlider') SwipedTabsSlider: Slides ;

  public SwipedTabsIndicator :any= null;
  public tabs:any=[];
  
	public rssDataArray:any = [];
	public rssArray=new Array;
	public rssInternational : any = [];
	public rssNational:any=[];
	public rssSport:any=[];
	public rssEducation:any=[];
	
	public loading : any;
	
	public headerlink:any;
	
	headerData = {
		user_id: "",
		lastCreated: ""
	};
	public resposeData: any;

  constructor(public navCtrl: NavController, 
  public iab: InAppBrowser,
  public authService: AuthService,
  public loadingCtrl: LoadingController, public navParams: NavParams ,public rssProvider: RssProvider) {
	  this.tabs=["International","National","Sports","Education"];
	 // this.selectTab(0);
  }
  
  ionViewDidLoad() {
	
	this.loading = this.loadingCtrl.create({
		  duration: 20000
		});
		this.loading.present();
	
	this.rssProvider.getToiInternational().subscribe(data => {
		 // this.rssInternational = data.items;
		 this.loading.dismiss();
		  let values = data.items;
		  for(let i=0;i<values.length;i++){
			//console.log(i);
			//console.log(values[i].pubDate);
			let current_datetime = new Date(values[i].pubDate);
			let formatted_date = current_datetime.getDate() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getFullYear();
			//console.log(formatted_date);
			values[i]["date_created"] = formatted_date;
			//this.date_created = formatted_date;
			//console.log(values);
			this.rssInternational = values;
		  }
		  console.log(this.rssInternational);
		 // console.log(data);
	  });
	  
	this.rssProvider.getToiNational().subscribe(data => {
		  //this.rssNational = data.items;
		  let values = data.items;
		  for(let i=0;i<values.length;i++){
			let current_datetime = new Date(values[i].pubDate);
			let formatted_date = current_datetime.getDate() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getFullYear();
			values[i]["date_created"] = formatted_date;
			this.rssNational = values;
		  }
		  console.log(data);
	  });
	  
	this.rssProvider.getToiSports().subscribe(data => {
		  //this.rssSport = data.items;
		  let values = data.items;
		  for(let i=0;i<values.length;i++){
			let current_datetime = new Date(values[i].pubDate);
			let formatted_date = current_datetime.getDate() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getFullYear();
			values[i]["date_created"] = formatted_date;
			this.rssSport = values;
		  }
		  console.log(data);
	  });
	
	this.rssProvider.getToiEducation().subscribe(data => {
		  //this.rssEducation = data.items;
		  let values = data.items;
		  for(let i=0;i<values.length;i++){
			let current_datetime = new Date(values[i].pubDate);
			let formatted_date = current_datetime.getDate() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getFullYear();
			values[i]["date_created"] = formatted_date;
			this.rssEducation = values;
		  }
		  console.log(data);
	  });	
	
    console.log('ionViewDidLoad AllfeedPage');
	this.SwipedTabsIndicator = document.getElementById("indicator");
  }
  
  selectTab(index) {
	console.log(index);
	this.SwipedTabsIndicator.style.webkitTransform = 'translate3d('+(100*index)+'%,0,0)';
    this.SwipedTabsSlider.slideTo(index, 500);
	if(index == 0){
		
		this.loading = this.loadingCtrl.create({
		  duration: 20000
		});
		this.loading.present();
		
		this.rssProvider.getToiInternational().subscribe(data => {
		  //this.rssDataArray = data;
		  //this.rssInternational = data.items;
		  this.loading.dismiss();
		  let values = data.items;
		  for(let i=0;i<values.length;i++){
			let current_datetime = new Date(values[i].pubDate);
			let formatted_date = current_datetime.getDate() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getFullYear();
			values[i]["date_created"] = formatted_date;
			this.rssInternational = values;
		  }
		  console.log(data);
	  });
	}else if(index == 1){
		
		this.loading = this.loadingCtrl.create({
		  duration: 20000
		});
		this.loading.present();
		
		this.rssProvider.getToiNational().subscribe(data => {
		  //this.rssNational = data.items;
		  
		  this.loading.dismiss();
		  let values = data.items;
		  for(let i=0;i<values.length;i++){
			let current_datetime = new Date(values[i].pubDate);
			let formatted_date = current_datetime.getDate() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getFullYear();
			values[i]["date_created"] = formatted_date;
			this.rssNational = values;
		  }
		  console.log(data);
	  });
	}else if(index == 2){
		
		this.loading = this.loadingCtrl.create({
		  duration: 20000
		});
		this.loading.present();
		
		this.rssProvider.getToiSports().subscribe(data => {
		  //this.rssSport = data.items;
		  
		  this.loading.dismiss();
		  let values = data.items;
		  for(let i=0;i<values.length;i++){
			let current_datetime = new Date(values[i].pubDate);
			let formatted_date = current_datetime.getDate() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getFullYear();
			values[i]["date_created"] = formatted_date;
			this.rssSport = values;
		  }
		  console.log(data);
	  });
	}else{
		
		this.loading = this.loadingCtrl.create({
		  duration: 20000
		});
		this.loading.present();
		
		this.rssProvider.getToiEducation().subscribe(data => {
		  //this.rssEducation = data.items;
		  
		  this.loading.dismiss();
		  let values = data.items;
		  for(let i=0;i<values.length;i++){
			let current_datetime = new Date(values[i].pubDate);
			let formatted_date = current_datetime.getDate() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getFullYear();
			values[i]["date_created"] = formatted_date;
			this.rssEducation = values;
		  }
		  console.log(data);
	  });
	}
  }

  updateIndicatorPosition() {
      // this condition is to avoid passing to incorrect index
  	if( this.SwipedTabsSlider.length()> this.SwipedTabsSlider.getActiveIndex())
  	{
  		this.SwipedTabsIndicator.style.webkitTransform = 'translate3d('+(this.SwipedTabsSlider.getActiveIndex() * 100)+'%,0,0)';
  	}
    
    }

  animateIndicator($event) {
  	if(this.SwipedTabsIndicator)
   	    this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (($event.progress* (this.SwipedTabsSlider.length()-1))*100) + '%,0,0)';
  }

openLink(link){
	this.loading = this.loadingCtrl.create({
      duration: 2000
    });
    this.loading.present(); 
	let sitename = link;
	//console.log(sitename);   
	this.iab.create(sitename,"blank"); 
  }	
  
  labelClick(){
	this.authService.postData(this.headerData, "getHeaderLink").then((result) =>{
    this.resposeData = result;
    console.log(this.resposeData);
	console.log(this.resposeData.categoryData[0].link);
	this.headerlink = this.resposeData.categoryData[0].link;
	this.iab.create(this.headerlink,"_system");
	});
  }
  
}

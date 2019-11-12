import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AuthService } from "../../providers/auth-service";
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';


/**
 * Generated class for the PostsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-posts',
  templateUrl: 'posts.html',
})
export class PostsPage {

	public resposeData: any;
	public category : any;
	public language : any;
	public category_name : any;
	public language_name : any;
	public date_format = new Array;
	public posts = new Array;
	public loadingServerData = true;
	loading : any;
	catPostData = { 
	cat_id : "",
	lang : ""
	};
	allPost = {
	post_id :"",
	cat_id : ""
	};

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthService, 
			public iab: InAppBrowser,
			public loadingCtrl: LoadingController) {
	  this.category = navParams.get("id");
	  this.language = navParams.get("lang");
	  this.category_name = navParams.get('name');
	   
	  this.language_name = navParams.get('lang_name');
	  
	}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostsPage');
	console.log(this.category);
	  if(this.language != 0){
	  this.catPostData.cat_id = this.category;
	  this.catPostData.lang = this.language;
		this.loading = this.loadingCtrl.create({
		  duration: 20000
		});
		this.loading.present();
		this.loadingServerData = false;
	  this.authService.postData(this.catPostData, "getAllPostsById").then((result) =>{
		
     		try {
			  this.loading.dismiss();
			} catch (error) { }
		  
		this.resposeData = result;
		console.log(this.resposeData);
		console.log(this.resposeData.postData[0].date_created);
		console.log(this.resposeData.postData.length);
		this.posts = this.resposeData.postData;
		//for(let values of data){
		//	this.posts.push(values);
		//}	//console.log('new data' +values);
				// for(let i=0;i<data.length;i++){
					// let current_datetime = new Date(data[i].date_created);
					// let formatted_date = current_datetime.getDate() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getFullYear();
					// console.log(formatted_date);
					// this.date_created = formatted_date;
				// }
		//}
		
		// for(let i=0;i<data.length;i++){
			// this.posts.push(data[i]);
			// let current_datetime = new Date(data[i].date_created);
			// let formatted_date = current_datetime.getDate() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getFullYear();
			// console.log(formatted_date);
			// this.posts.push(formatted_date);
		// }
		
		//if(this.resposeData.userData){
		// localStorage.setItem('userData', JSON.stringify(this.resposeData) )
		//this.navCtrl.push(TabsPage);
	  this.loadingServerData = true;
	});
	}else{
		this.loading = this.loadingCtrl.create({
		  duration: 20000
		});
		this.loading.present();
		this.loadingServerData = false;
		this.allPost.cat_id = this.category;
		this.authService.postData(this.allPost, "getAllPosts").then((result) =>{
			
			try {
			  this.loading.dismiss();
			} catch (error) { }
			
		this.resposeData = result;
		console.log(JSON.stringify(this.resposeData));
		console.log(this.resposeData.postData);
		console.log(this.resposeData.postData.length);
		this.posts = this.resposeData.postData;
		//for(let values of data){
		// this.posts.push(values);
		//}
		this.loadingServerData = true;
		//for(let i=0;i<data.length;i++){
			//this.posts.push(data[i]);
			//console.log(this.posts);
			//let current_datetime = new Date(data[i].date_created);
			//let formatted_date = current_datetime.getDate() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getFullYear();
			//console.log(formatted_date);
			//this.posts[i].push(formatted_date);
		//}
	});
	  
  }
  }
  
   doRefresh(refresher) {
    console.log('Begin async operation', refresher);
	this.ionViewDidLoad();
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
  
  openLink(link,pdf){
	console.log(pdf);
	this.loading = this.loadingCtrl.create({
      duration: 2000
    });
    this.loading.present(); 
	let sitename = "https://"+link;
	if(pdf == 1){
		this.iab.create(sitename,"_system");	
	}else{
		this.iab.create(sitename,"blank"); 
	}
  }

}

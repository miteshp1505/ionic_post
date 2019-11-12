import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from "../../providers/auth-service";
import { QuizcategoriesPage } from '../quizcategories/quizcategories';
import { PostsPage } from "../posts/posts";
import { AdMobFree, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free';

/**
 * Generated class for the AllcategoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-allcategories',
  templateUrl: 'allcategories.html',
})
export class AllcategoriesPage {

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
  public language :any;
  public language_name :any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private admobFree: AdMobFree, public authService: AuthService) {
		this.language = navParams.get("lang");
		this.language_name = navParams.get("lang_name");
	
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
    console.log('ionViewDidLoad AllcategoriesPage');
	this.authService.postData(this.userPostData, "getAllCategories").then((result) =>{
    this.resposeData = result;
    console.log(this.resposeData);
	console.log(this.resposeData.categoryData);
	this.categories = this.resposeData.categoryData;
	});
	}
  
  getPosts(id,name){
	 this.navCtrl.push(PostsPage, { id: id , lang:this.language , name:name , lang_name:this.language_name});
	}

}

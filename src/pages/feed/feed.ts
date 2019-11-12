import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { RssProvider } from "../../providers/rss/rss";
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

	rssDataArray:any = [];
	rssArray:any = [];
	loading : any;
	
  constructor(public navCtrl: NavController, 
  public iab: InAppBrowser,
  public loadingCtrl: LoadingController, public navParams: NavParams ,public rssProvider: RssProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
	this.get_rss_data();
  }
  
  get_rss_data(){
	  this.rssProvider.getToiEducation().subscribe(data => {
		  this.rssDataArray = data;
		  this.rssArray = data.items;
		  console.log(data);
	  });
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

}



















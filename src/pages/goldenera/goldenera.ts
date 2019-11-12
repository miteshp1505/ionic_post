import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, Slides , NavParams, LoadingController } from 'ionic-angular';
import { RssProvider } from "../../providers/rss/rss";
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

/**
 * Generated class for the GoldeneraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-goldenera',
  templateUrl: 'goldenera.html',
})
export class GoldeneraPage {
	public loading : any;
	public loadingServerData = true;
	public rssOther = new Array;
	
  constructor(public navCtrl: NavController, 
  public iab: InAppBrowser,
  public loadingCtrl: LoadingController, public navParams: NavParams ,public rssProvider: RssProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GoldeneraPage');
	this.loading = this.loadingCtrl.create({
		  duration: 2000
		});
		this.loading.present();
		this.loadingServerData = false;
	this.rssProvider.getOtherNews().subscribe(data => {
		  //this.rssNational = data.items;
		  let values = data.items;
		  for(let i=0;i<values.length;i++){
			let current_datetime = new Date(values[i].pubDate);
			let formatted_date = current_datetime.getDate() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getFullYear();
			values[i]["date_created"] = formatted_date;
			this.rssOther = values;
		  }
		  console.log(data);
		  this.loadingServerData = true;
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

import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, Slides , NavParams, LoadingController } from 'ionic-angular';
import { RssProvider } from "../../providers/rss/rss";
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

/**
 * Generated class for the JobsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jobs',
  templateUrl: 'jobs.html',
})
export class JobsPage {

  	public rssdata:any=[];
		public loading : any;

  constructor(public navCtrl: NavController, 
  public iab: InAppBrowser,
  public loadingCtrl: LoadingController, public navParams: NavParams ,public rssProvider: RssProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JobsPage');
	this.loading = this.loadingCtrl.create({
		  duration: 20000
		});
		this.loading.present();
		
		this.rssProvider.getjobsdata().subscribe(data => {
		  //this.rssDataArray = data;
		  //this.rssInternational = data.items;
		  this.loading.dismiss();
		  let values = data.items;
		  for(let i=0;i<values.length;i++){
			let current_datetime = new Date(values[i].pubDate);
			let formatted_date = current_datetime.getDate() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getFullYear();
			values[i]["date_created"] = formatted_date;
			this.rssdata = values;
		  }
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

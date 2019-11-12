import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, Slides, NavParams, LoadingController } from 'ionic-angular';
import { RssProvider } from "../../providers/rss/rss";
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { StreamingMedia, StreamingVideoOptions, StreamingAudioOptions } from '@ionic-native/streaming-media';

/**
 * Generated class for the AudiofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-audiofile',
  templateUrl: 'audiofile.html',
})
export class AudiofilePage {
	
  @ViewChild('SwipedTabsSlider') SwipedTabsSlider: Slides;

  public SwipedTabsIndicator :any= null;
  public tabs:any=[];
	
	rssAudioArray:any = [];
	rssArray:any = [];
	
	public category:any;
	public language:any;
	public category_name:any;
	public language_name:any;
	public loading:any;
	
	public authordata = new Array;

  constructor(public navCtrl: NavController, 
  public iab: InAppBrowser,
  public loadingCtrl: LoadingController, public navParams: NavParams ,public rssProvider: RssProvider ,public streamingMedia: StreamingMedia) {
	this.tabs=["English","Hindi"];
	//this.category = navParams.get("id");
	  //this.language = navParams.get("lang");
	  //this.category_name = navParams.get('name');
	   
	  //this.language_name = navParams.get('lang_name');
	  
	  //console.log(this.language_name);
  }

  ionViewDidLoad(){
    console.log('ionViewDidLoad AudiofilePage');
	//this.get_rss_audio();
	this.loading = this.loadingCtrl.create({
		  duration: 20000
		});
		this.loading.present();
	  this.rssProvider.getAllAudio().subscribe(data => {
		  this.loading.dismiss();
		  this.rssAudioArray = data.items;
		   let values = data.items;
		  
		  this.rssArray = data.items;
		  console.log(this.rssArray);
	  });
	this.SwipedTabsIndicator = document.getElementById("indicator");
  }
  
  get_rss_audio(){
	  this.loading = this.loadingCtrl.create({
		  duration: 20000
		});
		this.loading.present();
	  this.rssProvider.getAllAudio().subscribe(data => {
		  this.loading.dismiss();
		  this.rssAudioArray = data.items;
		   let values = data.items;
		   for(let i=0;i<values.length;i++){
		     console.log(values[i].author);
			 this.authordata.push(values[i].author);
			 //console.log(this.authordata);
		   }
		   console.log(this.authordata);
			// if(this.language_name=='All'){
				// this.rssArray = values;
			// }else if(this.language_name=='HINDI'){
				// if(values[i].author == 'Hindi'){
					
				// }
			// }
		  // }
		  this.rssArray = data.items;
		  console.log(this.rssArray);
	  });
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
	  this.rssProvider.getAllAudio().subscribe(data => {
		  this.loading.dismiss();
		  this.rssAudioArray = data.items;
		   let values = data.items;
		//   for(let i=0;i<values.length;i++){
		//     console.log(values[i].author);
		//	 this.authordata.push(values[i].author);
			 //console.log(this.authordata);
		//   }
		//   console.log(this.authordata);
			// if(this.language_name=='All'){
				// this.rssArray = values;
			// }else if(this.language_name=='HINDI'){
				// if(values[i].author == 'Hindi'){
					
				// }
			// }
		  // }
		  this.rssArray = data.items;
		  console.log(this.rssArray);
	  });
	}else if(index == 1){
		
		this.loading = this.loadingCtrl.create({
		  duration: 20000
		});
		this.loading.present();
	  this.rssProvider.getAllAudio().subscribe(data => {
		  this.loading.dismiss();
		  this.rssAudioArray = data.items;
		   let values = data.items;
		  
		  this.rssArray = data.items;
		  console.log(this.rssArray);
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
  
  
  startAudio(audiolink){
	  
	  console.log('working');
	  console.log(audiolink);
	  let options: StreamingAudioOptions = {
		  successCallback: () => { console.log(); },
		  errorCallback: () => { console.log(); },
		  initFullscreen: false,
		  //bgImage:'assets/imgs/news.jpg',
		  //bgImageScale: "fit",
	  }
	  
	  this.streamingMedia.playAudio(audiolink,options);
  }
  
  stopAudio(){
	  this.streamingMedia.stopAudio();
  }
  
  // openLink(link){
	// this.loading = this.loadingCtrl.create({
      // duration: 2000
    // });
    // this.loading.present(); 
	// let sitename = link;
	//console.log(sitename);   
	// this.iab.create(sitename,"blank"); 
  // }

}

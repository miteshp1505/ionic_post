import { Component, ViewChild } from "@angular/core";
import { NavController, App, AlertController, NavParams, Platform } from "ionic-angular";
import { AuthService } from "../../providers/auth-service";
import { PostsPage } from "../posts/posts";
import { FeedPage } from "../feed/feed";
import { AllfeedPage } from "../allfeed/allfeed";
import { HindunewsPage } from "../hindunews/hindunews";
import { JagrannewsPage } from "../jagrannews/jagrannews";
import { BbcnewsPage } from "../bbcnews/bbcnews";
import { IndianexpressnewsPage } from "../indianexpressnews/indianexpressnews";
import { DainiknewsPage } from "../dainiknews/dainiknews";
import { AudiofilePage } from "../audiofile/audiofile";
import { QuizPage } from '../quiz/quiz';
import { FeaturedquizPage } from '../featuredquiz/featuredquiz';
import { JobsPage } from '../jobs/jobs';
import { AdmitsPage } from '../admits/admits';
import { ResultsPage } from '../results/results';
import { SubcatPage } from '../subcat/subcat';
import { Common } from "../../providers/common";
import { QuizcategoriesPage } from '../quizcategories/quizcategories';
import { AllcategoriesPage } from '../allcategories/allcategories';
import { GoldeneraPage } from '../goldenera/goldenera';
import { SocialSharing } from '@ionic-native/social-sharing';
import { AppRate } from '@ionic-native/app-rate';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';
import { AppVersion } from '@ionic-native/app-version';

@Component({ selector: "page-home", templateUrl: "home.html" })
export class HomePage {
  @ViewChild("updatebox") updatebox;
  public userDetails: any;
  public resposeData: any;
  public language:any;
  public language_name:any;
  public dataSet: any;
  public noRecords: boolean;
  userPostData = {
    user_id: "",
    token: "",
    feed: "",
    feed_id: "",
    lastCreated: ""
  };
  
  userData = {
    user_id: "",
    lastCreated: ""
  };
  
  subjectData = {
    sub_id: "",
    lastCreated: ""
  };
  
  public categories = new Array;
  
  public quizcategories = new Array;
  
  public quizexamcategories = new Array;
  
  public quizsubjectcategories = new Array;

  public appnumber:any;
  public apiappversion:any;
  
  constructor(
    public common: Common,
    private alertCtrl: AlertController,
    public navCtrl: NavController,
    public app: App,
	private appRate: AppRate,
	public navParams: NavParams,
    public authService: AuthService,
	public plt: Platform,
	private admobFree: AdMobFree,
	private socialSharing: SocialSharing,
	private appVersion: AppVersion
  ) {
	const data = JSON.parse(localStorage.getItem("userData"));
	  
	this.language = navParams.get("lang");
	this.language_name = navParams.get('lang_name');
	
	this.appVersion.getVersionNumber().then(value => {
     this.appnumber = value;
	 console.log(value);
    }).catch(err => {
      //alert(err);
    });
	
	this.authService.postData(this.userPostData, "getAppVersion").then((result) =>{
    this.resposeData = result;
    console.log(this.resposeData.appdatavalue);
	this.apiappversion = this.resposeData.appdatavalue;
	});
	
	let appdata = setInterval( () => {

        this.appversionfunction();
		clearInterval(appdata);
        }, 5000);
	
	this.adShow();
    // const data = JSON.parse(localStorage.getItem("userData"));
    // this.userDetails = data.userData;
    // this.userPostData.user_id = this.userDetails.user_id;
    // this.userPostData.token = this.userDetails.token;
    // this.userPostData.lastCreated = "";
    // this.noRecords = false
    // this.getFeed();
	
  }
  
  bannerConfig: AdMobFreeBannerConfig = {
    // add your config here
    // for the sake of this example we will just use the test config
    id: 'ca-app-pub-4792901677807513/2663108662',
    isTesting: false,
    autoShow: true
  };
  
  // getPosts(id,name){
	  
  // let alert = this.alertCtrl.create({
    // title: 'Select Language',
    // inputs: [
      // {
		// type : 'radio',
		// name : 'hindi',
        // label: 'Hindi',
        // value: '1'
      // },
      // {
		// type : 'radio',  
		// name : 'eng',
		// label: 'English',
        // value: '2'
      // }
    // ],
    // buttons: [
      // {
        // text: 'Cancel',
        // role: 'cancel',
        // handler: data => {
          // console.log('Cancel clicked');
        // }
      // },
      // {
        // text: "Ok",
        // handler: data => {
			// if(data==1){
				// console.log(data);
			    // this.navCtrl.push(PostsPage, { id: id , lang:1 , name:name , lang_name:'HINDI'});	
			// }else{
			    // console.log(data);
			    // this.navCtrl.push(PostsPage, { id: id , lang:2 , name:name , lang_name:'ENGLISH'});
			// }
        // }
      // }
    // ]
  // });
  // alert.present();

// }

ionViewDidLoad(){
	console.log("new data");
	//console.log(data);
	//this.authService.postData(this.userPostData, "getAllCategories").then((result) =>{
    //this.resposeData = result;
    //console.log(this.resposeData);
	//console.log(this.resposeData.categoryData);
	//this.categories = this.resposeData.categoryData;
	//});
	
	this.authService.postData(this.userPostData, "getCategories").then((result) =>{
    this.resposeData = result;
    console.log(this.resposeData);
	console.log(this.resposeData.categoryData);
	this.categories = this.resposeData.categoryData;
	// for(let values of data){
	// this.categories.push(values);
    // }
	//if(this.resposeData.userData){
    // localStorage.setItem('userData', JSON.stringify(this.resposeData) )
    //this.navCtrl.push(TabsPage);
  
	});
	
	
	/*this.authService.postData(this.userData, "getHomeQuizCategories").then((result) =>{
    this.resposeData = result;
    console.log(this.resposeData);
	console.log(this.resposeData.categoryData);
	this.quizexamcategories = this.resposeData.categoryData;
	});*/
	
	this.userData.user_id = "1";
	this.authService.postData(this.userData, "getHomeQuizCategories").then((result) =>{
    this.resposeData = result;
    console.log(this.resposeData);
	console.log(this.resposeData.categoryData);
	this.quizexamcategories = this.resposeData.categoryData;
	});
	
	this.subjectData.sub_id = "2";
	this.authService.postData(this.subjectData, "getHomeSubjectQuizCategories").then((result) =>{
    this.resposeData = result;
    console.log(this.resposeData);
	console.log(this.resposeData.categoryData);
	this.quizsubjectcategories = this.resposeData.categoryData;
	});
	
}

appversionfunction(){
	if(this.appnumber != this.apiappversion){
			let alert = this.alertCtrl.create({
			//header:'Update Available',
			//title: 'New Version is Available.Please Update',
			title: 'Update Available',
			subTitle: 'A new version of Aik-Exam Trooper is available. Please update to latest version '+this.apiappversion+' now',
			buttons: [
			  // {
				// text: 'Cancel',
				// role: 'cancel',
				// handler: data => {
				  // console.log('Cancel clicked');
				// }
			  // },
			  {
				text: "Update",
				handler: data => {
					window.open('market://details?id=com.ionicframework.aik', '_system');
					// if(data==1){
						// console.log(data);
						// this.navCtrl.push(PostsPage, { id: id , lang:1 , name:name , lang_name:'HINDI'});	
					// }else{
						// console.log(data);
						// this.navCtrl.push(PostsPage, { id: id , lang:2 , name:name , lang_name:'ENGLISH'});
					// }
				}
			  }
			]
		  });
		  alert.present();
	}else{
		
	}
}

adShow(){
	
	this.admobFree.banner.config(this.bannerConfig);

    this.admobFree.banner.prepare()
      .then(() => {
        // banner Ad is ready
        // if we set autoShow to false, then we will need to call the show method here
      })
      .catch(e => console.log(e));
  }



/*getnewposts(){
	this.navCtrl.push(AllcategoriesPage , {lang:this.language , lang_name:this.language_name});
}*/

getnewposts(){
	this.navCtrl.push(AllcategoriesPage , {lang:this.language , lang_name:this.language_name});
}

getfeed(){
	//this.navCtrl.push(FeedPage);
	this.navCtrl.push(AllfeedPage);
}

getBBC(){
	this.navCtrl.push(BbcnewsPage);
}

getJagran(){
	this.navCtrl.push(JagrannewsPage);
}

getHindu(){
	this.navCtrl.push(HindunewsPage);
}

getIndianExpress(){
	this.navCtrl.push(IndianexpressnewsPage);
}

getDainikbhaskar(){
	this.navCtrl.push(DainiknewsPage);
}

/*getAudio(){
	this.navCtrl.push(AudiofilePage,{ lang:this.language, lang_name:this.language_name});
}*/

getAudio(){
	this.navCtrl.push(AudiofilePage);
}

getquiz(id){
	this.navCtrl.push(QuizPage , { id:id });
}

getjobs(){
	this.navCtrl.push(JobsPage);
}

getadmit(){
	this.navCtrl.push(AdmitsPage);
}

getresult(){
	this.navCtrl.push(ResultsPage);
}

getother(){
	this.navCtrl.push(GoldeneraPage);
}

getPosts(id,name){
	// if(this.language==0){
	// this.navCtrl.push(PostsPage, { id: id , name:name , lang:this.language, lang_name:this.language_name});
	// }else{
	 this.navCtrl.push(PostsPage, { id: id , lang:this.language , name:name , lang_name:this.language_name});
	
}

openQuizCat(id){
	  console.log(id);
	  console.log(id);
	  this.navCtrl.push(QuizcategoriesPage,{id:id});
  }
  
share(){
	this.socialSharing.share(
		'https://play.google.com/store/apps/details?id=com.ionicframework.aik',null,null,null
      ).then(() => {
        // Success!
      }).catch(() => {
        // Error!
      });
}  
  
  rating(){
	  
	/*this.appRate.preferences = {
		 simpleMode: true,
		// openStoreInApp:false,
		 displayAppName: 'App Rate Demo',
		 usesUntilPrompt: 4,
		 promptAgainForEachNewVersion: true,
		 storeAppURL:{
		    ios: '', 
		    android: 'market://details?id=com.ionicframework.aik'
		 },
		 customLocale: {
		 title: 'Do you enjoy %@?',
		 message: 'If you enjoy %@. would you mind talking to rate it?',
		 cancelButtonLabel: 'No, Thanks',
		 laterButtonLabel: 'Remind Me Later',
		 rateButtonLabel: 'Rate It Now'
		 },
		 callbacks:{
		 onRateDialogShow: function(callback) {
		 console.log('User Prompt for Rating');
		 },
		 onButtonClicked: function(buttonIndex){
		 console.log('Selected Button Index',buttonIndex);
		 }
		 }
	} */ 
	  
	this.appRate.preferences = {
		simpleMode:true,
		displayAppName: 'Aik - Exam trooper',
		usesUntilPrompt: 4,
		promptAgainForEachNewVersion: true,
		storeAppURL:{
			ios:'',
			android:'market://details?id=com.ionicframework.aik'
		},
		customLocale:{
			title: 'Do you enjoy %@?',
			message: 'If you enjoy %@. would you mind taking a moment to rate it?',
			cancelButtonLabel: 'No, Thanks',
			laterButtonLabel: 'Remind Me Later',
			rateButtonLabel: 'Rate It Now'
		},
	}
	
	this.appRate.promptForRating(true);
  }

doRefresh(refresher) {
    console.log('Begin async operation', refresher);
	this.ionViewDidLoad();
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
  

  getFeed() {
    this.common.presentLoading();
    this.authService.postData(this.userPostData, "feed").then(
      result => {
        this.resposeData = result;
        if (this.resposeData.feedData) {
          this.common.closeLoading();
          this.dataSet = this.resposeData.feedData;
          console.log(this.dataSet);

          const dataLength = this.resposeData.feedData.length;

          this.userPostData.lastCreated = this.resposeData.feedData[
            dataLength - 1
          ].created;
        } else {
          console.log("No access");
        }
      },
      err => {
        //Connection failed message
      }
    );
  }

  feedUpdate() {
    if (this.userPostData.feed) {
      this.common.presentLoading();
      this.authService.postData(this.userPostData, "feedUpdate").then(
        result => {
          this.resposeData = result;
          if (this.resposeData.feedData) {
            this.common.closeLoading();
            this.dataSet.unshift(this.resposeData.feedData);
            this.userPostData.feed = "";

            //this.updatebox.setFocus();
            setTimeout(() => {
              //  this.updatebox.focus();
            }, 150);
          } else {
            console.log("No access");
          }
        },
        err => {
          //Connection failed message
        }
      );
    }
  }

  feedDelete(feed_id, msgIndex) {
    if (feed_id > 0) {
      let alert = this.alertCtrl.create({
        title: "Delete Feed",
        message: "Do you want to buy this feed?",
        buttons: [
          {
            text: "Cancel",
            role: "cancel",
            handler: () => {
              console.log("Cancel clicked");
            }
          },
          {
            text: "Delete",
            handler: () => {
              this.userPostData.feed_id = feed_id;
              this.authService.postData(this.userPostData, "feedDelete").then(
                result => {
                  this.resposeData = result;
                  if (this.resposeData.success) {
                    this.dataSet.splice(msgIndex, 1);
                  } else {
                    console.log("No access");
                  }
                },
                err => {
                  //Connection failed message
                }
              );
            }
          }
        ]
      });
      alert.present();
    }
  }



  doInfinite(e): Promise<any> {
    console.log("Begin async operation");
    return new Promise(resolve => {
      setTimeout(() => {
        this.authService.postData(this.userPostData, "feed").then(
          result => {
            this.resposeData = result;
            if (this.resposeData.feedData.length) {
              const newData = this.resposeData.feedData;
              this.userPostData.lastCreated = this.resposeData.feedData[
                newData.length - 1
              ].created;

              for (let i = 0; i < newData.length; i++) {
                this.dataSet.push(newData[i]);
              }
            } else {
              this.noRecords = true;
              console.log("No user updates");
            }
          },
          err => {
            //Connection failed message
          }
        );
        resolve();
      }, 500);
    });
  }

  converTime(time) {
    let a = new Date(time * 1000);
    return a;
  }

  backToWelcome() {
    const root = this.app.getRootNav();
    root.popToRoot();
  }

  logout() {
    //Api Token Logout

    localStorage.clear();
    setTimeout(() => this.backToWelcome(), 1000);
  }
  
  openExamFeaturedQuiz(){
	this.navCtrl.push(FeaturedquizPage , { id:1 });  
  }
  
  openSubjectFeaturedQuiz(){
	this.navCtrl.push(FeaturedquizPage , { id:2 });    
  }
  
  
  
}

import { Component , ViewChild } from '@angular/core';
import { Platform, App, MenuController,AlertController,NavController, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SplitPane } from '../providers/split-pane';
//import { Welcome } from '../pages/welcome/welcome';
import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { QuizPage } from '../pages/quiz/quiz';
import { AuthService } from "../providers/auth-service";
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
import { Network } from '@ionic-native/network';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
public device_id : any;
  
 @ViewChild('content') nav: NavController;
  
  rootPage:any;
  userPostData = {
    user_id: "",
	device_id:""
  };
 //   rootPage:any;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, 
  public app: App, 
  public splitPane: SplitPane, 
  public menu: MenuController,
  private alertCtrl: AlertController,
  private uniqueDeviceID: UniqueDeviceID,
  public authService: AuthService,
  public network: Network,
  public toastCtrl: ToastController
  ) {
    platform.ready().then(() => {
		
		this.network.onConnect().subscribe(()=>{
			this.toastCtrl.create({
				message:'Network connected',
				duration:3000
			}).present();
		});
		this.network.onDisconnect().subscribe(()=>{
			this.toastCtrl.create({
				message:'Network disconnected',
				duration:3000
			}).present();
		});
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
	  
	  // this.uniqueDeviceID.get().then((uuid: any) => {
	  // console.log(uuid);
	  // this.userPostData.device_id = uuid;
		// }).catch((uuid: any) => { 
		// console.log(uuid);
		// this.userPostData.device_id = 'error';
		// });
	  
	  // this.authService.postData(this.userPostData, "insertDeviceData").then((result) =>{
    
	
	//});
	  
	if(localStorage.getItem("userData")){
		let data = JSON.parse(localStorage.getItem("userData"));
		if(data.lang==0){
			this.nav.setRoot(HomePage, { lang:0 , lang_name:'All'});
		}
		/*else if(data.lang==1){
			this.nav.setRoot(HomePage, { lang:1 , lang_name:'HINDI'});
		}else{
			this.nav.setRoot(HomePage, { lang:2 , lang_name:'ENGLISH'});
		}*/
	}else{	
		let storagedata = {lang:0};
		this.nav.setRoot(HomePage, { lang:0 , lang_name:'All'});
		localStorage.setItem('userData', JSON.stringify(storagedata));
		}
	});
	}	
	
	/*  let alert = this.alertCtrl.create({
    title: 'Select Language',
    inputs: [
      {
		type : 'radio',  
		name : 'all',
		label: 'All',
        value: '0'
      },
	  {
		type : 'radio',
		name : 'hindi',
        label: 'Hindi',
        value: '1'
      },
      {
		type : 'radio',  
		name : 'eng',
		label: 'English',
        value: '2'
      }
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: "Ok",
        handler: data => {
			if(data==1){
				console.log(data);
			    //this.app.getRootNav().setRoot( HomePage );
				this.nav.setRoot(HomePage, { lang:1 , lang_name:'HINDI'});
				let storagedata = {lang:1};	
				localStorage.setItem('userData', JSON.stringify(storagedata));
			}else if(data==2){
			    console.log(data);
				let storagedata = {lang:2};
				//this.app.getRootNav().setRoot( HomePage );
			    this.nav.setRoot(HomePage, { lang:2 , lang_name:'ENGLISH'});
				localStorage.setItem('userData', JSON.stringify(storagedata));
			}else{
				let storagedata = {lang:0};
				this.nav.setRoot(HomePage, { lang:0 , lang_name:'All'});
				localStorage.setItem('userData', JSON.stringify(storagedata));
			}
        }
      }
    ]
  });
  alert.present();
	}  */
    

   backToWelcome(){
   const root = this.app.getRootNav();
    root.popToRoot();
  }

  logout(){
    //Api Token Logout 
    
    localStorage.clear();
	
	if(localStorage.getItem("userData")){
		let data = JSON.parse(localStorage.getItem("userData"));
		if(data.lang==0){
			this.nav.setRoot(HomePage, { lang:0 , lang_name:'All'});
		}
		/*else if(data.lang==1){
			this.nav.setRoot(HomePage, { lang:1 , lang_name:'HINDI'});
		}else{
			this.nav.setRoot(HomePage, { lang:2 , lang_name:'ENGLISH'});
		}*/
	}else{	
		
		let storagedata = {lang:0};
		this.nav.setRoot(HomePage, { lang:0 , lang_name:'All'});
		localStorage.setItem('userData', JSON.stringify(storagedata));
	
	  /*let alert = this.alertCtrl.create({
    title: 'Select Language',
    inputs: [
      {
		type : 'radio',  
		name : 'all',
		label: 'All',
        value: '0'
      },
	  {
		type : 'radio',
		name : 'hindi',
        label: 'Hindi',
        value: '1'
      },
      {
		type : 'radio',  
		name : 'eng',
		label: 'English',
        value: '2'
      }
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: "Ok",
        handler: data => {
			if(data==1){
				console.log(data);
			    //this.app.getRootNav().setRoot( HomePage );
				this.nav.setRoot(HomePage, { lang:1 , lang_name:'HINDI'});
				let storagedata = {lang:1};	
				localStorage.setItem('userData', JSON.stringify(storagedata));
			}else if(data==2){
			    console.log(data);
				let storagedata = {lang:2};
				//this.app.getRootNav().setRoot( HomePage );
			    this.nav.setRoot(HomePage, { lang:2 , lang_name:'ENGLISH'});
				localStorage.setItem('userData', JSON.stringify(storagedata));
			}else{
				let storagedata = {lang:0};
				this.nav.setRoot(HomePage, { lang:0 , lang_name:'All'});
				localStorage.setItem('userData', JSON.stringify(storagedata));
			}
        }
      }
    ]
  });
  alert.present();
	}*/
	//this.menu.enable(false);
    
	// setTimeout(()=> this.backToWelcome(), 1000);
    
  }
}
  quizpage(){
	  this.nav.setRoot(QuizPage);
  }
  
  homepage(){
	  this.nav.setRoot(HomePage);
  }
  
}

import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AuthService } from '../providers/auth-service';
import { SplitPane } from '../providers/split-pane';
import { Common } from '../providers/common';
import { HttpModule } from "@angular/http";
import { Welcome } from '../pages/welcome/welcome';
import { Login } from '../pages/login/login';
import { Signup } from '../pages/signup/signup';
import { AboutPage } from '../pages/about/about';
import { AudiofilePage } from '../pages/audiofile/audiofile';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { PostsPage } from '../pages/posts/posts';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
import { Network } from '@ionic-native/network';
import { FeedPage } from '../pages/feed/feed';
import { AllfeedPage } from '../pages/allfeed/allfeed';
import { QuizPage } from '../pages/quiz/quiz';
import { HindunewsPage } from '../pages/hindunews/hindunews';
import { JagrannewsPage } from '../pages/jagrannews/jagrannews';
import { BbcnewsPage } from '../pages/bbcnews/bbcnews';
import { IndianexpressnewsPage } from '../pages/indianexpressnews/indianexpressnews';
import { QuizcategoriesPage } from '../pages/quizcategories/quizcategories';
import { QuizquestionsPage } from '../pages/quizquestions/quizquestions';
import { CorrectansPage } from '../pages/correctans/correctans';
import { JobsPage } from '../pages/jobs/jobs';
import { AdmitsPage } from '../pages/admits/admits';
import { ResultsPage } from '../pages/results/results';
import { SubcatPage } from '../pages/subcat/subcat';
import { GoldeneraPage } from '../pages/goldenera/goldenera';
import { AllcategoriesPage } from '../pages/allcategories/allcategories';
import { DainiknewsPage } from '../pages/dainiknews/dainiknews';
import { StartquizPage } from '../pages/startquiz/startquiz';
import { FeaturedquizPage } from '../pages/featuredquiz/featuredquiz';
import { AdMobFree } from '@ionic-native/admob-free';
 
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SocialSharing } from '@ionic-native/social-sharing';
import { AppRate } from '@ionic-native/app-rate';

import { MomentModule } from 'angular2-moment';
import { LinkyModule } from 'angular-linky';
import { RssProvider } from '../providers/rss/rss';
import { StreamingMedia } from '@ionic-native/streaming-media';
import { AppVersion } from '@ionic-native/app-version';

@NgModule({
  declarations: [
    MyApp,
    Welcome,
    Login,
    Signup,
    AboutPage,
    ContactPage,
    HomePage,
	PostsPage,
    TabsPage,
	FeedPage,
	AllfeedPage,
	HindunewsPage,
	JagrannewsPage,
	BbcnewsPage,
	IndianexpressnewsPage,
	AudiofilePage,
	QuizPage,
	QuizcategoriesPage,
	QuizquestionsPage,
	CorrectansPage,
	JobsPage,
	AdmitsPage,
	ResultsPage,
	SubcatPage,
	GoldeneraPage,
	AllcategoriesPage,
	DainiknewsPage,
	StartquizPage,
	FeaturedquizPage
  ],
  imports: [
    BrowserModule,HttpModule,MomentModule,LinkyModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Welcome,
    Login,
    Signup,
    AboutPage,
    ContactPage,
    HomePage,
	PostsPage,
	FeedPage,
    TabsPage,
	AllfeedPage,
	HindunewsPage,
	JagrannewsPage,
	BbcnewsPage,
	IndianexpressnewsPage,
	AudiofilePage,
	QuizPage,
	QuizcategoriesPage,
	QuizquestionsPage,
	CorrectansPage,
	CorrectansPage,
	JobsPage,
	AdmitsPage,
	ResultsPage,
	SubcatPage,
	GoldeneraPage,
	AllcategoriesPage,
	DainiknewsPage,
	StartquizPage,
	FeaturedquizPage
  ],
  providers: [
    StatusBar,
	AdMobFree,
	InAppBrowser,
	UniqueDeviceID,
	Network,
	SocialSharing,
	AppRate,
	SplashScreen,AuthService,SplitPane,Common,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RssProvider,
	StreamingMedia,
	AppVersion
  ]
})
export class AppModule {}

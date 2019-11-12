import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from "../../providers/auth-service";
import { QuizcategoriesPage } from '../quizcategories/quizcategories';

/**
 * Generated class for the SubcatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-subcat',
  templateUrl: 'subcat.html',
})
export class SubcatPage {
	
	public resposeData: any;
  public noRecords: boolean;
  userPostData = {
    user_id: "",
    category_id: ""
  };
  
  public categories = new Array;
  public categoryid:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthService) {
	  this.categoryid = navParams.get("id");
	  console.log(this.categoryid);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubcatPage');
	 this.userPostData.category_id = this.categoryid;
    console.log('ionViewDidLoad QuizcategoriesPage');
	this.authService.postData(this.userPostData, "getAllQuizSubExamCategories").then((result) =>{
    this.resposeData = result;
    console.log(this.resposeData);
	console.log(this.resposeData.categoryData);
	this.categories = this.resposeData.categoryData;
	});
  }
  
  openLink(id){
	  console.log(id);
	  this.navCtrl.push(QuizcategoriesPage,{id:id});
  }

}

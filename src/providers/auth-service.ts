import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


//let apiUrl = "https://216.10.243.237/PHP-Slim-Restful-master/api/";

//let apiUrl = "https://myaik.online/PHP-Slim-Restful-master/api/";
let apiUrl = "https://myaik.website/PHP-Slim-Restful-master/api/";
//let apiUrl = "http://tiwariandbrother.com/PHP-Slim-Restful-master/api/";
//let apiUrl = 'https://api.thewallscript.com/restful/';
/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AuthService {

  constructor(public http: Http) {
    console.log('Hello AuthService Provider');
  }

  postData(credentials, type){
	console.log('working');
    return new Promise((resolve, reject) =>{
      let headers = new Headers();
      this.http.post(apiUrl+type, JSON.stringify(credentials), {headers: headers}).
      subscribe(res =>{
        resolve(res.json());
      }, (err) =>{
        reject(err);
      });

    });

  }

}

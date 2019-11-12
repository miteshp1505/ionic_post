import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


/*
  Generated class for the RssProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RssProvider {

  constructor(public http: Http) {
    console.log('Hello RssProvider Provider');
  }
	
	getRss(){
		//let headers = new Headers({ 'Content-Type': 'application/json'});
		//let options = new RequestOptions({ headers: headers });
		
		const RSS_URL : any = 'https%3A%2F%2Findianexpress.com%2Ffeed%2F';
		const API : any = 'lniam90itfdjqffmtdbnxvjmsjjrzqzyylww0guh';
		const count : any = 20;
		const API_URL : any = 'https://api.rss2json.com/v1/api.json';
		
		 let headers = new Headers();
			headers.append("Accept", 'application/json');
			headers.append('Content-Type', 'application/json' );
			const requestOptions = new RequestOptions({ headers: headers });

			let postData = {};
		
		let body={'count' : count};
		
		//const response = this.http.post("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Findianexpress.com%2Ffeed%2F&api_key=lniam90itfdjqffmtdbnxvjmsjjrzqzyylww0guh&count=20").map(res => res.json());
		const response = this.http.post("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Findianexpress.com%2Ffeed%2F&api_key=lniam90itfdjqffmtdbnxvjmsjjrzqzyylww0guh&count=20", postData , requestOptions ).map(res => res.json());
		return response;
	}
	
	// Start Jagran News
	
	getjagranInternationalFeed(){
		const RSS_URL : any = 'https%3A%2F%2Findianexpress.com%2Ffeed%2F';
		const API : any = 'lniam90itfdjqffmtdbnxvjmsjjrzqzyylww0guh';
		const count : any = 20;
		const API_URL : any = 'https://api.rss2json.com/v1/api.json';
		
		 let headers = new Headers();
			headers.append("Accept", 'application/json');
			headers.append('Content-Type', 'application/json' );
			const requestOptions = new RequestOptions({ headers: headers });

			let postData = {};
		
		let body={'count' : count};
		
		//const response = this.http.post("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Findianexpress.com%2Ffeed%2F&api_key=lniam90itfdjqffmtdbnxvjmsjjrzqzyylww0guh&count=20").map(res => res.json());
		const response = this.http.post("https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fpib.gov.in%2Fnewsite%2Frssenglish.aspx&api_key=lniam90itfdjqffmtdbnxvjmsjjrzqzyylww0guh&count=20", postData , requestOptions ).map(res => res.json());
		return response;
	}
	
	getjagranNationalFeed(){
		const RSS_URL : any = 'https%3A%2F%2Findianexpress.com%2Ffeed%2F';
		const API : any = 'lniam90itfdjqffmtdbnxvjmsjjrzqzyylww0guh';
		const count : any = 20;
		const API_URL : any = 'https://api.rss2json.com/v1/api.json';
		
		 let headers = new Headers();
			headers.append("Accept", 'application/json');
			headers.append('Content-Type', 'application/json' );
			const requestOptions = new RequestOptions({ headers: headers });

			let postData = {};
		
		let body={'count' : count};
		
		//const response = this.http.post("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Findianexpress.com%2Ffeed%2F&api_key=lniam90itfdjqffmtdbnxvjmsjjrzqzyylww0guh&count=20").map(res => res.json());
		const response = this.http.post("https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fpib.gov.in%2Fnewsite%2Frsshindi.aspx&api_key=lniam90itfdjqffmtdbnxvjmsjjrzqzyylww0guh&count=20", postData , requestOptions ).map(res => res.json());
		return response;
	}
	
	getjagranSportsFeed(){
		const RSS_URL : any = 'https%3A%2F%2Findianexpress.com%2Ffeed%2F';
		const API : any = 'lniam90itfdjqffmtdbnxvjmsjjrzqzyylww0guh';
		const count : any = 20;
		const API_URL : any = 'https://api.rss2json.com/v1/api.json';
		
		 let headers = new Headers();
			headers.append("Accept", 'application/json');
			headers.append('Content-Type', 'application/json' );
			const requestOptions = new RequestOptions({ headers: headers });

			let postData = {};
		
		let body={'count' : count};
		
		//const response = this.http.post("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Findianexpress.com%2Ffeed%2F&api_key=lniam90itfdjqffmtdbnxvjmsjjrzqzyylww0guh&count=20").map(res => res.json());
		const response = this.http.post("https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fpib.gov.in%2Fnewsite%2Frssenglish_fea.aspx&api_key=lniam90itfdjqffmtdbnxvjmsjjrzqzyylww0guh&count=20", postData , requestOptions ).map(res => res.json());
		return response;
	}
	
	/*getjagranEducationFeed(){
		const RSS_URL : any = 'https%3A%2F%2Findianexpress.com%2Ffeed%2F';
		const API : any = 'lniam90itfdjqffmtdbnxvjmsjjrzqzyylww0guh';
		const count : any = 20;
		const API_URL : any = 'https://api.rss2json.com/v1/api.json';
		
		 let headers = new Headers();
			headers.append("Accept", 'application/json');
			headers.append('Content-Type', 'application/json' );
			const requestOptions = new RequestOptions({ headers: headers });

			let postData = {};
		
		let body={'count' : count};
		
		//const response = this.http.post("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Findianexpress.com%2Ffeed%2F&api_key=lniam90itfdjqffmtdbnxvjmsjjrzqzyylww0guh&count=20").map(res => res.json());
		const response = this.http.post("https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Frss.jagran.com%2Frss%2Fjosh%2Fshiksha.xml&api_key=lniam90itfdjqffmtdbnxvjmsjjrzqzyylww0guh&count=20", postData , requestOptions ).map(res => res.json());
		return response;
	}*/
	
	// End Jagran News

	// Start Times of india

	getToiInternational(){
		const RSS_URL : any = 'https%3A%2F%2Findianexpress.com%2Ffeed%2F';
		const API : any = 'lniam90itfdjqffmtdbnxvjmsjjrzqzyylww0guh';
		const count : any = 20;
		const API_URL : any = 'https://api.rss2json.com/v1/api.json';
		
		 let headers = new Headers();
			headers.append("Accept", 'application/json');
			headers.append('Content-Type', 'application/json' );
			const requestOptions = new RequestOptions({ headers: headers });

			let postData = {};
		
		let body={'count' : count};
		
		//const response = this.http.post("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Findianexpress.com%2Ffeed%2F&api_key=lniam90itfdjqffmtdbnxvjmsjjrzqzyylww0guh&count=20").map(res => res.json());
		const response = this.http.post("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ftimesofindia.indiatimes.com%2Frssfeeds%2F296589292.cms&api_key=lniam90itfdjqffmtdbnxvjmsjjrzqzyylww0guh&count=20", postData , requestOptions ).map(res => res.json());
		return response;
	}
	
	getToiNational(){
		const RSS_URL : any = 'https%3A%2F%2Findianexpress.com%2Ffeed%2F';
		const API : any = 'lniam90itfdjqffmtdbnxvjmsjjrzqzyylww0guh';
		const count : any = 20;
		const API_URL : any = 'https://api.rss2json.com/v1/api.json';
		
		 let headers = new Headers();
			headers.append("Accept", 'application/json');
			headers.append('Content-Type', 'application/json' );
			const requestOptions = new RequestOptions({ headers: headers });

			let postData = {};
		
		let body={'count' : count};
		
		//const response = this.http.post("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Findianexpress.com%2Ffeed%2F&api_key=lniam90itfdjqffmtdbnxvjmsjjrzqzyylww0guh&count=20").map(res => res.json());
		const response = this.http.post("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ftimesofindia.indiatimes.com%2Frssfeeds%2F-2128936835.cms&api_key=lniam90itfdjqffmtdbnxvjmsjjrzqzyylww0guh&count=20", postData , requestOptions ).map(res => res.json());
		return response;
	}
	
	getToiSports(){
		const RSS_URL : any = 'https%3A%2F%2Findianexpress.com%2Ffeed%2F';
		const API : any = 'lniam90itfdjqffmtdbnxvjmsjjrzqzyylww0guh';
		const count : any = 20;
		const API_URL : any = 'https://api.rss2json.com/v1/api.json';
		
		 let headers = new Headers();
			headers.append("Accept", 'application/json');
			headers.append('Content-Type', 'application/json' );
			const requestOptions = new RequestOptions({ headers: headers });

			let postData = {};
		
		let body={'count' : count};
		
		//const response = this.http.post("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Findianexpress.com%2Ffeed%2F&api_key=lniam90itfdjqffmtdbnxvjmsjjrzqzyylww0guh&count=20").map(res => res.json());
		const response = this.http.post("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ftimesofindia.indiatimes.com%2Frssfeeds%2F4719148.cms&api_key=lniam90itfdjqffmtdbnxvjmsjjrzqzyylww0guh&count=20", postData , requestOptions ).map(res => res.json());
		return response;
	}
	
	getToiEducation(){
		const RSS_URL : any = 'https%3A%2F%2Findianexpress.com%2Ffeed%2F';
		const API : any = 'lniam90itfdjqffmtdbnxvjmsjjrzqzyylww0guh';
		const count : any = 20;
		const API_URL : any = 'https://api.rss2json.com/v1/api.json';
		
		 let headers = new Headers();
			headers.append("Accept", 'application/json');
			headers.append('Content-Type', 'application/json' );
			const requestOptions = new RequestOptions({ headers: headers });

			let postData = {};
		
		let body={'count' : count};
		
		//const response = this.http.post("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Findianexpress.com%2Ffeed%2F&api_key=lniam90itfdjqffmtdbnxvjmsjjrzqzyylww0guh&count=20").map(res => res.json());
		const response = this.http.post("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ftimesofindia.indiatimes.com%2Frssfeeds%2F913168846.cms&api_key=lniam90itfdjqffmtdbnxvjmsjjrzqzyylww0guh&count=20", postData , requestOptions ).map(res => res.json());
		return response;
	}
	
	getHindustanInternational(){
		const RSS_URL : any = 'https%3A%2F%2Findianexpress.com%2Ffeed%2F';
		const API : any = 'lniam90itfdjqffmtdbnxvjmsjjrzqzyylww0guh';
		const count : any = 20;
		const API_URL : any = 'https://api.rss2json.com/v1/api.json';
		
		 let headers = new Headers();
			headers.append("Accept", 'application/json');
			headers.append('Content-Type', 'application/json' );
			const requestOptions = new RequestOptions({ headers: headers });

			let postData = {};
		
		let body={'count' : count};
		
		//const response = this.http.post("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Findianexpress.com%2Ffeed%2F&api_key=lniam90itfdjqffmtdbnxvjmsjjrzqzyylww0guh&count=20").map(res => res.json());
		const response = this.http.post("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.hindustantimes.com%2Frss%2Fworld%2Frssfeed.xml&api_key=lniam90itfdjqffmtdbnxvjmsjjrzqzyylww0guh&count=20", postData , requestOptions ).map(res => res.json());
		return response;
	}
	
	getHindustanNational(){
		let headers = new Headers();
			headers.append("Accept", 'application/json');
			headers.append('Content-Type', 'application/json' );
			const requestOptions = new RequestOptions({ headers: headers });
		let postData = {};
		const response = this.http.post("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.hindustantimes.com%2Frss%2Findia%2Frssfeed.xml&api_key=lniam90itfdjqffmtdbnxvjmsjjrzqzyylww0guh&count=20", postData , requestOptions ).map(res => res.json());
		return response;
	}
	
	getHindustanSports(){
		let headers = new Headers();
			headers.append("Accept", 'application/json');
			headers.append('Content-Type', 'application/json' );
			const requestOptions = new RequestOptions({ headers: headers });
		let postData = {};
		const response = this.http.post("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.hindustantimes.com%2Frss%2Fsports%2Frssfeed.xml&api_key=lniam90itfdjqffmtdbnxvjmsjjrzqzyylww0guh&count=20", postData , requestOptions ).map(res => res.json());
		return response;
	}
	
	getHindustanEducation(){
		const RSS_URL : any = 'https%3A%2F%2Findianexpress.com%2Ffeed%2F';
		const API : any = 'lniam90itfdjqffmtdbnxvjmsjjrzqzyylww0guh';
		const count : any = 20;
		const API_URL : any = 'https://api.rss2json.com/v1/api.json';
		
		 let headers = new Headers();
			headers.append("Accept", 'application/json');
			headers.append('Content-Type', 'application/json' );
			const requestOptions = new RequestOptions({ headers: headers });

			let postData = {};
		
		let body={'count' : count};
		
		//const response = this.http.post("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Findianexpress.com%2Ffeed%2F&api_key=lniam90itfdjqffmtdbnxvjmsjjrzqzyylww0guh&count=20").map(res => res.json());
		const response = this.http.post("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.hindustantimes.com%2Frss%2Feducation%2Frssfeed.xml&api_key=lniam90itfdjqffmtdbnxvjmsjjrzqzyylww0guh&count=20", postData , requestOptions ).map(res => res.json());
		return response;
	}
	
	/*getBBCInternational(){
		const RSS_URL : any = 'https%3A%2F%2Findianexpress.com%2Ffeed%2F';
		const API : any = 'lniam90itfdjqffmtdbnxvjmsjjrzqzyylww0guh';
		const count : any = 20;
		const API_URL : any = 'https://api.rss2json.com/v1/api.json';
		
		 let headers = new Headers();
			headers.append("Accept", 'application/json');
			headers.append('Content-Type', 'application/json' );
			const requestOptions = new RequestOptions({ headers: headers });

			let postData = {};
		
		let body={'count' : count};
		
		//const response = this.http.post("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Findianexpress.com%2Ffeed%2F&api_key=lniam90itfdjqffmtdbnxvjmsjjrzqzyylww0guh&count=20").map(res => res.json());
		const response = this.http.post("https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Ffeeds.bbci.co.uk%2Fnews%2Fworld%2Frss.xml&api_key=lniam90itfdjqffmtdbnxvjmsjjrzqzyylww0guh&count=20", postData , requestOptions ).map(res => res.json());
		return response;
	}
	
	getBBCTechnology(){
		let headers = new Headers();
			headers.append("Accept", 'application/json');
			headers.append('Content-Type', 'application/json' );
			const requestOptions = new RequestOptions({ headers: headers });
		let postData = {};
		const response = this.http.post("https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Ffeeds.bbci.co.uk%2Fnews%2Ftechnology%2Frss.xml&api_key=lniam90itfdjqffmtdbnxvjmsjjrzqzyylww0guh&count=20", postData , requestOptions ).map(res => res.json());
		return response;
	}
	
	getBBCBusiness(){
		let headers = new Headers();
			headers.append("Accept", 'application/json');
			headers.append('Content-Type', 'application/json' );
			const requestOptions = new RequestOptions({ headers: headers });
		let postData = {};
		const response = this.http.post("https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Ffeeds.bbci.co.uk%2Fnews%2Fbusiness%2Frss.xml&api_key=lniam90itfdjqffmtdbnxvjmsjjrzqzyylww0guh&count=20", postData , requestOptions ).map(res => res.json());
		return response;
	}
	
	getBBCEducation(){
		const RSS_URL : any = 'https%3A%2F%2Findianexpress.com%2Ffeed%2F';
		const API : any = 'lniam90itfdjqffmtdbnxvjmsjjrzqzyylww0guh';
		const count : any = 20;
		const API_URL : any = 'https://api.rss2json.com/v1/api.json';
		
		 let headers = new Headers();
			headers.append("Accept", 'application/json');
			headers.append('Content-Type', 'application/json' );
			const requestOptions = new RequestOptions({ headers: headers });

			let postData = {};
		
		let body={'count' : count};
		
		//const response = this.http.post("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Findianexpress.com%2Ffeed%2F&api_key=lniam90itfdjqffmtdbnxvjmsjjrzqzyylww0guh&count=20").map(res => res.json());
		const response = this.http.post("https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Ffeeds.bbci.co.uk%2Fnews%2Feducation%2Frss.xml&api_key=lniam90itfdjqffmtdbnxvjmsjjrzqzyylww0guh&count=20", postData , requestOptions ).map(res => res.json());
		return response;
	}*/
	
	getHinduInternational(){
		const RSS_URL : any = 'https%3A%2F%2Findianexpress.com%2Ffeed%2F';
		const API : any = 'lniam90itfdjqffmtdbnxvjmsjjrzqzyylww0guh';
		const count : any = 20;
		const API_URL : any = 'https://api.rss2json.com/v1/api.json';
		
		 let headers = new Headers();
			headers.append("Accept", 'application/json');
			headers.append('Content-Type', 'application/json' );
			const requestOptions = new RequestOptions({ headers: headers });
		let postData = {};
		const response = this.http.post("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.thehindu.com%2Fnews%2Finternational%2Ffeeder%2Fdefault.rss&api_key=lniam90itfdjqffmtdbnxvjmsjjrzqzyylww0guh&count=20", postData , requestOptions ).map(res => res.json());
		return response;
	}
	
	getHinduNational(){
		const RSS_URL : any = 'https%3A%2F%2Findianexpress.com%2Ffeed%2F';
		const API : any = 'lniam90itfdjqffmtdbnxvjmsjjrzqzyylww0guh';
		const count : any = 20;
		const API_URL : any = 'https://api.rss2json.com/v1/api.json';
		
		 let headers = new Headers();
			headers.append("Accept", 'application/json');
			headers.append('Content-Type', 'application/json' );
			const requestOptions = new RequestOptions({ headers: headers });
		let postData = {};
		const response = this.http.post("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.thehindu.com%2Fnews%2Fnational%2Ffeeder%2Fdefault.rss&api_key=lniam90itfdjqffmtdbnxvjmsjjrzqzyylww0guh&count=20", postData , requestOptions ).map(res => res.json());
		return response;
	}
	
	getHinduSports(){
		const RSS_URL : any = 'https%3A%2F%2Findianexpress.com%2Ffeed%2F';
		const API : any = 'lniam90itfdjqffmtdbnxvjmsjjrzqzyylww0guh';
		const count : any = 20;
		const API_URL : any = 'https://api.rss2json.com/v1/api.json';
		
		 let headers = new Headers();
			headers.append("Accept", 'application/json');
			headers.append('Content-Type', 'application/json' );
			const requestOptions = new RequestOptions({ headers: headers });
		let postData = {};
		const response = this.http.post("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.thehindu.com%2Fsport%2Ffeeder%2Fdefault.rss&api_key=lniam90itfdjqffmtdbnxvjmsjjrzqzyylww0guh&count=20", postData , requestOptions ).map(res => res.json());
		return response;
	}
	
	getHinduBusiness(){
		let headers = new Headers();
			headers.append("Accept", 'application/json');
			headers.append('Content-Type', 'application/json' );
			const requestOptions = new RequestOptions({ headers: headers });
		let postData = {};
		const response = this.http.post("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.thehindu.com%2Fopinion%2Feditorial%2Ffeeder%2Fdefault.rss&api_key=lniam90itfdjqffmtdbnxvjmsjjrzqzyylww0guh&count=20", postData , requestOptions ).map(res => res.json());
		return response;
	} 
	
	getIndianExpressInternational(){
		const RSS_URL : any = 'https%3A%2F%2Findianexpress.com%2Ffeed%2F';
		const API : any = 'lniam90itfdjqffmtdbnxvjmsjjrzqzyylww0guh';
		const count : any = 20;
		const API_URL : any = 'https://api.rss2json.com/v1/api.json';
		
		 let headers = new Headers();
			headers.append("Accept", 'application/json');
			headers.append('Content-Type', 'application/json' );
			const requestOptions = new RequestOptions({ headers: headers });
		let postData = {};
		const response = this.http.post("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ffeed.livehindustan.com%2Frss%2F4913&api_key=lniam90itfdjqffmtdbnxvjmsjjrzqzyylww0guh&count=20", postData , requestOptions ).map(res => res.json());
		return response;
	}
	
	getIndianExpressNational(){
		const RSS_URL : any = 'https%3A%2F%2Findianexpress.com%2Ffeed%2F';
		const API : any = 'lniam90itfdjqffmtdbnxvjmsjjrzqzyylww0guh';
		const count : any = 20;
		const API_URL : any = 'https://api.rss2json.com/v1/api.json';
		
		 let headers = new Headers();
			headers.append("Accept", 'application/json');
			headers.append('Content-Type', 'application/json' );
			const requestOptions = new RequestOptions({ headers: headers });
		let postData = {};
		const response = this.http.post("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ffeed.livehindustan.com%2Frss%2F4911&api_key=lniam90itfdjqffmtdbnxvjmsjjrzqzyylww0guh&count=20", postData , requestOptions ).map(res => res.json());
		return response;
	}
	
	getIndianExpressSports(){
		const RSS_URL : any = 'https%3A%2F%2Findianexpress.com%2Ffeed%2F';
		const API : any = 'lniam90itfdjqffmtdbnxvjmsjjrzqzyylww0guh';
		const count : any = 20;
		const API_URL : any = 'https://api.rss2json.com/v1/api.json';
		
		 let headers = new Headers();
			headers.append("Accept", 'application/json');
			headers.append('Content-Type', 'application/json' );
			const requestOptions = new RequestOptions({ headers: headers });
		let postData = {};
		const response = this.http.post("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ffeed.livehindustan.com%2Frss%2F4931&api_key=lniam90itfdjqffmtdbnxvjmsjjrzqzyylww0guh&count=20", postData , requestOptions ).map(res => res.json());
		return response;
	}
	
	getIndianExpressEducation(){
		const RSS_URL : any = 'https%3A%2F%2Findianexpress.com%2Ffeed%2F';
		const API : any = 'lniam90itfdjqffmtdbnxvjmsjjrzqzyylww0guh';
		const count : any = 20;
		const API_URL : any = 'https://api.rss2json.com/v1/api.json';
		
		 let headers = new Headers();
			headers.append("Accept", 'application/json');
			headers.append('Content-Type', 'application/json' );
			const requestOptions = new RequestOptions({ headers: headers });
		let postData = {};
		const response = this.http.post(" https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ffeed.livehindustan.com%2Frss%2F4979&api_key=lniam90itfdjqffmtdbnxvjmsjjrzqzyylww0guh&count=20", postData , requestOptions ).map(res => res.json());
		return response;
	}
	
	getAllAudio(){
		// const RSS_URL : any = 'https%3A%2F%2Findianexpress.com%2Ffeed%2F';
		// const API : any = 'lniam90itfdjqffmtdbnxvjmsjjrzqzyylww0guh';
		// const count : any = 20;
		// const API_URL : any = 'https://api.rss2json.com/v1/api.json';
		
		 let headers = new Headers();
			headers.append("Accept", 'application/json');
			headers.append('Content-Type', 'application/json' );
			const requestOptions = new RequestOptions({ headers: headers });
		let postData = {};
		const response = this.http.post("https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fnewsonair.nic.in%2FNSD_Audio_rss.aspx&api_key=lniam90itfdjqffmtdbnxvjmsjjrzqzyylww0guh&count=20", postData , requestOptions ).map(res => res.json());
		return response;
	}
	
	getjobsdata(){
		 let headers = new Headers();
			headers.append("Accept", 'application/json');
			headers.append('Content-Type', 'application/json' );
			const requestOptions = new RequestOptions({ headers: headers });
		let postData = {};
		const response = this.http.post("https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fwww.sarkaridisha.com%2Fonline-form%2Ffeed%2F&api_key=lniam90itfdjqffmtdbnxvjmsjjrzqzyylww0guh&count=20", postData , requestOptions ).map(res => res.json());
		return response;
	}
	
	
	getadmitdata(){
		    let headers = new Headers();
			headers.append("Accept", 'application/json');
			headers.append('Content-Type', 'application/json' );
			const requestOptions = new RequestOptions({ headers: headers });
		let postData = {};
		const response = this.http.post("https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fwww.sarkaridisha.com%2Fadmit-card%2Ffeed%2F&api_key=lniam90itfdjqffmtdbnxvjmsjjrzqzyylww0guh&count=20", postData , requestOptions ).map(res => res.json());
		return response;	
	}
	
	getresultdata(){
		let headers = new Headers();
			headers.append("Accept", 'application/json');
			headers.append('Content-Type', 'application/json' );
			const requestOptions = new RequestOptions({ headers: headers });
		let postData = {};
		const response = this.http.post("https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fwww.sarkaridisha.com%2Fresult%2Ffeed%2F&api_key=lniam90itfdjqffmtdbnxvjmsjjrzqzyylww0guh&count=20", postData , requestOptions ).map(res => res.json());
		return response;
	}
	
	getOtherNews(){
		let headers = new Headers();
			headers.append("Accept", 'application/json');
			headers.append('Content-Type', 'application/json' );
			const requestOptions = new RequestOptions({ headers: headers });
		let postData = {};
		const response = this.http.post("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.goldeneraeducation.com%2Ffeed%2F&api_key=lniam90itfdjqffmtdbnxvjmsjjrzqzyylww0guh&count=20", postData , requestOptions ).map(res => res.json());
		return response;
	}

	getDainikInternational(){
		const RSS_URL : any = 'https%3A%2F%2Findianexpress.com%2Ffeed%2F';
		const API : any = 'lniam90itfdjqffmtdbnxvjmsjjrzqzyylww0guh';
		const count : any = 20;
		const API_URL : any = 'https://api.rss2json.com/v1/api.json';
		
		 let headers = new Headers();
			headers.append("Accept", 'application/json');
			headers.append('Content-Type', 'application/json' );
			const requestOptions = new RequestOptions({ headers: headers });
		let postData = {};
		const response = this.http.post("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.bhaskarhindi.com%2Frss%2Finternational&api_key=lniam90itfdjqffmtdbnxvjmsjjrzqzyylww0guh&count=20", postData , requestOptions ).map(res => res.json());
		return response;
	}

	getDainikNational(){
		const RSS_URL : any = 'https%3A%2F%2Findianexpress.com%2Ffeed%2F';
		const API : any = 'lniam90itfdjqffmtdbnxvjmsjjrzqzyylww0guh';
		const count : any = 20;
		const API_URL : any = 'https://api.rss2json.com/v1/api.json';
		
		 let headers = new Headers();
			headers.append("Accept", 'application/json');
			headers.append('Content-Type', 'application/json' );
			const requestOptions = new RequestOptions({ headers: headers });
		let postData = {};
		const response = this.http.post("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.bhaskarhindi.com%2Frss%2Fnational&api_key=lniam90itfdjqffmtdbnxvjmsjjrzqzyylww0guh&count=20", postData , requestOptions ).map(res => res.json());
		return response;
	}
	
	getDainikSports(){
		const RSS_URL : any = 'https%3A%2F%2Findianexpress.com%2Ffeed%2F';
		const API : any = 'lniam90itfdjqffmtdbnxvjmsjjrzqzyylww0guh';
		const count : any = 20;
		const API_URL : any = 'https://api.rss2json.com/v1/api.json';
		
		 let headers = new Headers();
			headers.append("Accept", 'application/json');
			headers.append('Content-Type', 'application/json' );
			const requestOptions = new RequestOptions({ headers: headers });
		let postData = {};
		const response = this.http.post("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.bhaskarhindi.com%2Frss%2Fsports&api_key=lniam90itfdjqffmtdbnxvjmsjjrzqzyylww0guh&count=20", postData , requestOptions ).map(res => res.json());
		return response;
	}
	
	getDainikEducation(){
		const RSS_URL : any = 'https%3A%2F%2Findianexpress.com%2Ffeed%2F';
		const API : any = 'lniam90itfdjqffmtdbnxvjmsjjrzqzyylww0guh';
		const count : any = 20;
		const API_URL : any = 'https://api.rss2json.com/v1/api.json';
		
		 let headers = new Headers();
			headers.append("Accept", 'application/json');
			headers.append('Content-Type', 'application/json' );
			const requestOptions = new RequestOptions({ headers: headers });
		let postData = {};
		const response = this.http.post("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.bhaskarhindi.com%2Frss%2Feducation&api_key=lniam90itfdjqffmtdbnxvjmsjjrzqzyylww0guh&count=20", postData , requestOptions ).map(res => res.json());
		return response;
	}
	
}


















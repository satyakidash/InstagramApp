import { Injectable } from '@angular/core';
import { JsonpModule, Jsonp, Response, } from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()

export class InstagramService{
    jsonp: Jsonp;
    private link = "https://api.instagram.com/v1/tags/";
    
	constructor(jsonp: Jsonp) {
		this.jsonp = jsonp;
	}

	instagramTagSearch(searchTerm: HTMLInputElement) {
    	if (searchTerm.value) {
        
	        var apiLink = this.link + searchTerm.value + '/media/recent?callback=JSONP_CALLBACK&access_token=1462982210.144690a.af067e4cc76d469d8e80f58b47904ea2';

	        // this.jsonp.request(apiLink)
	        //     .subscribe((res: Response) => {
	        //             return res.json().data;
	        //     });

	         return this.jsonp.request(apiLink).map((res:Response) => res.json());

        }
    }
}
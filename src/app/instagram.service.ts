import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Jsonp, Response, } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';




@Injectable()

export class InstagramService{
    jsonp: Jsonp;
    private link = "https://api.instagram.com/v1/tags/";
    
	constructor(jsonp: Jsonp) {
		this.jsonp = jsonp;
	}

	instagramTagSearch(searchTerm) {
    	if (searchTerm) {
        
	        var apiLink = this.link + searchTerm + '/media/recent?callback=JSONP_CALLBACK&access_token=1462982210.144690a.af067e4cc76d469d8e80f58b47904ea2';

	        // return this.jsonp.request(apiLink)
	        //     .subscribe((res: Response) => {
	        //             return res.json().data;
	        //     });

	         return this.jsonp.request(apiLink).map((res:Response) => res.json());

        }
    }
   }
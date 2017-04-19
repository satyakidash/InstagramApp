import { Injectable } from '@angular/core';
@Injectable
export class InstgramService{
    link = 'https://api.instagram.com/v1/tags/';
	instagramTagSearch(searchTerm: HTMLInputElement){
    	if (searchTerm.value) {
        
	        var apiLink = this.link + searchTerm.value + '/media/recent?callback=JSONP_CALLBACK&access_token=1462982210.144690a.af067e4cc76d469d8e80f58b47904ea2';
	        return this.jsonp.get(apiLink).map((res:Response) => res.json());
        }
    }
}
import { Injectable } from '@angular/core';
@Injectable
export class InstgramService{

	instagramTagSearch(searchTerm: HTMLInputElement): void {
    	if (searchTerm.value) {
        
	        var apiLink = this.link + searchTerm.value + '/media/recent?callback=JSONP_CALLBACK&access_token=1462982210.144690a.af067e4cc76d469d8e80f58b47904ea2';

	        this.jsonp.request(apiLink)
	            .subscribe((res: Response) => {
	                    res.json().data;
	            });
        }
    }
}
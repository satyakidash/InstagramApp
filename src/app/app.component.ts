import { Component } from '@angular/core';
import { JsonpModule, Jsonp, Response, } from '@angular/http';


@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})

export class AppComponent {
    title = 'Welcome to InstagramSearch';
    link = 'https://api.instagram.com/v1/tags/';
    jsonp: Jsonp;
    image_objs = [];

    constructor(jsonp: Jsonp) {
        this.jsonp = jsonp;
    }
    instagramTagSearch(searchTerm: HTMLInputElement): void {
    	if (searchTerm.value) {
        
	        var apiLink = this.link + searchTerm.value + '/media/recent?callback=JSONP_CALLBACK&access_token=xxxxxACESS_TOKENxxxxx';

	        this.jsonp.request(apiLink)
	            .subscribe((res: Response) => {
	                  this.image_objs = res.json().data;
	            });
        }
    }
};
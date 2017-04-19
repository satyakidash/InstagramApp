import { Component } from '@angular/core';
import { InstagramService } from './instagram.service';



@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: 'app.component.html',
    providers: [InstagramService],
    styleUrls: ['app.component.css']
})

export class AppComponent {
    title = 'Welcome to InstagramSearch';
    image_objs = [];

    constructor(private _instagramService: InstagramService) {
    }
    getInstagramImages(searchTerm: HTMLInputElement) {
        this._instagramService.instagramTagSearch(searchTerm).subscribe(res => this.image_objs = res.data);
        console.log(this.image_objs);
    }

    
   
};
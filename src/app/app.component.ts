import { Component } from '@angular/core';
import { InstagramService } from './instagram.service';
import { Validators, FormGroup, FormControl, FormBuilder } from '@angular/forms'; 




@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: 'app.component.html',
    providers: [InstagramService],
    styleUrls: ['app.component.css']
})

export class AppComponent {
   searchTerm = new FormControl('')
  
   searchForm: FormGroup = this.builder.group({
    searchTerm: this.searchTerm,
   });

  constructor (private builder: FormBuilder, private _instagramService: InstagramService) { }
    title = 'Welcome to InstagramSearch';
    image_objs = [];
    errorMessage: string;

    // constructor(private _instagramService: InstagramService) {
    // }
    getInstagramImages(value) {
        event.preventDefault();
        if (this._instagramService.instagramTagSearch(value))
         this._instagramService.instagramTagSearch(value).subscribe(res => this.image_objs = res.data);
        console.log(this.image_objs);
        return true
    }

    
   
};
import { Component } from '@angular/core';
import { WikipediaService } from './rxjs.service';
// import 'rxjs/Rx';

@Component({
	selector: 'wikipedia',
	template: `
		<h2>Wikipedia Search</h2>
		<input #input type="text" (keyup)="Search(input.value)" />
		<ul>
			<li *ngFor="let item of items">{{item}}</li>
		</ul>
	`
})export class Wikipedia{
	items;
	constructor(private wikiservice:WikipediaService){}

	Search(str){
		this.wikiservice.search(str)
		.subscribe(res=>{
			this.items = res;
		});

	}
}
import{ Component, Injectable } from '@angular/core';

interface Profile{
	name:string;
	age:number;
	lastnames: Array<string>;
}

@Component({
	selector: 'my-profile',
	template: '<div>Profile</div>'
})export class Interface{

	arr:Array<number> = [2, 4, 5];

	constructor(private injectdata:InjectData){
		injectdata.getProfile();
	}
}

@Injectable()
export class InjectData{

	profileObject:Profile = {
		name:"Mauricio", age: 30, lastnames:["Torrejon", "Medina"]
	}

	getProfile():Profile{
		return this.profileObject;
	}
}
import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'right-component',
  template: `<h3 class="text">{{whichCmp}} Component</h3>`,
  styles:[`
  	h3{ display:inline-block;}
  	.text{ color:blue;background:lightblue; }
  `]

})
export class RightComponent {
	@Input() which;
	@Output() whichCmp = "Default";

	ngOnInit(){
		this.whichCmp = this.which;
	}
}
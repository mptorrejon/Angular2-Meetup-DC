"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.version = 0;
        this.version = 2;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n\t\t<h3>My First Angular <span class=\"version\">{{version}}</span> App</h3>\n\n\t\t<!--UNCOMMENT AS NEEDED-->\t\t\n\t\t\n\t\t<!--<left-component which=\"left\"></left-component> | -->\n\t\t<!-- <right-component which=\"right\"></right-component> -->\n\n\t\t<!-- <button (click)=\"hasChild = !hasChild\">{{hasChild ? 'Destroy' : 'Create'}} MyComponent</button> -->\n\t\n\t\t<!-- <life-cycle *ngIf=\"hasChild\"></life-cycle> -->\n\n\t\t<!-- <wikipedia></wikipedia> -->\n\t",
            styles: ["\n\t\tbutton{display:block; margin: 10px 0px; padding: 10px 5px;}\n\t"]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

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
var AppComponent1 = (function () {
    function AppComponent1() {
        this.version = 0;
        this.version = 3;
        console.log("a");
        // this.a();
    }
    AppComponent1 = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  \t\t\t\t<h3>My First Angular <span class=\"version\">{{version}}</span> App</h3>\n  \t\t\t\t<my-app2>Loading...</my-app2>\n\n  \t\t\t\t<button (click)=\"hasChild = !hasChild\">{{hasChild ? 'Destroy' : 'Create'}} MyComponent</button>\n    \t\t\t\n  \t\t\t\t<life-cycle *ngIf=\"hasChild\"></life-cycle>\n\n  \t\t\t\t<wikipedia></wikipedia>\n\n  \t\t\t\t<router-outlet></router-outlet>\n  \t\t\t",
            styles: ["\n  \t.version{ color:red; }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent1);
    return AppComponent1;
}());
exports.AppComponent1 = AppComponent1;

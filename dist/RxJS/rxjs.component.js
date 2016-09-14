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
var rxjs_service_1 = require('./rxjs.service');
// import 'rxjs/Rx';
var Wikipedia = (function () {
    function Wikipedia(wikiservice) {
        this.wikiservice = wikiservice;
    }
    Wikipedia.prototype.Search = function (str) {
        var _this = this;
        this.wikiservice.search(str)
            .subscribe(function (res) {
            _this.items = res;
        });
    };
    Wikipedia = __decorate([
        core_1.Component({
            selector: 'wikipedia',
            template: "\n\t\t<h2>Wikipedia Search</h2>\n\t\t<input #input type=\"text\" (keyup)=\"Search(input.value)\" />\n\t\t<ul>\n\t\t\t<li *ngFor=\"let item of items\">{{item}}</li>\n\t\t</ul>\n\t"
        }), 
        __metadata('design:paramtypes', [rxjs_service_1.WikipediaService])
    ], Wikipedia);
    return Wikipedia;
}());
exports.Wikipedia = Wikipedia;

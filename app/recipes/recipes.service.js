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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var RecipesService = (function () {
    function RecipesService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:8083/recipes/';
    }
    RecipesService.prototype.getAll = function (page, search) {
        var tempUrl = this.baseUrl + '?_page=' + page;
        if (search.name) {
            tempUrl += '&name_like=' + search.name;
        }
        return this.http.get(tempUrl)
            .map(function (response) { return response.json(); });
    };
    // filter(search : any) {
    //     return this.http.get(this.baseUrl + '?name_like=' + search.name)
    //         .map((response: Response) => response.json());
    // }
    RecipesService.prototype.get = function (id) {
        return this.http.get(this.baseUrl + id + '?_embed=ingredients')
            .map(function (response) { return response.json(); });
    };
    RecipesService.prototype.delete = function (id) {
        return this.http.delete(this.baseUrl + id);
    };
    RecipesService.prototype.save = function (obj) {
        var body = JSON.stringify(obj);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.baseUrl, body, options);
    };
    RecipesService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], RecipesService);
    return RecipesService;
}());
exports.RecipesService = RecipesService;
//# sourceMappingURL=recipes.service.js.map
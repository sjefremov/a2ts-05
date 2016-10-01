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
var recipes_service_1 = require('./recipes.service');
var AddRecipeComponent = (function () {
    function AddRecipeComponent(service) {
        this.service = service;
    }
    AddRecipeComponent.prototype.ngOnInit = function () { };
    AddRecipeComponent.prototype.save = function () {
        this.service.save({ 'name': this.name }).subscribe(function (result) { return console.log(result); }, function (error) { return console.log(error); });
    };
    AddRecipeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'add-recipe',
            templateUrl: 'add-recipe.component.html'
        }), 
        __metadata('design:paramtypes', [recipes_service_1.RecipesService])
    ], AddRecipeComponent);
    return AddRecipeComponent;
}());
exports.AddRecipeComponent = AddRecipeComponent;
//# sourceMappingURL=add-recipe.component.js.map
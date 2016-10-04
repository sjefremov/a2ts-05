import { Component, OnInit } from '@angular/core';
import { IngredientsService } from './ingredients.service';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'add-ingredient',
    templateUrl: 'add-ingredient.component.html'
})
export class AddIngredientComponent implements OnInit {
    
    private name : string;
    private recipeId : number;

    constructor(
        private service : IngredientsService,
        private router : Router
        ) { }

    ngOnInit() { }

    save() {
        this.service.save({'name' : this.name, 'recipeId' : this.recipeId}).subscribe(
            result => this.router.navigate(['ingredients'], { replaceUrl : true })
        );
    }
}
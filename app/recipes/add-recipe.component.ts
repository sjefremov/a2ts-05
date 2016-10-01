import { Component, OnInit } from '@angular/core';
import { RecipesService } from './recipes.service';

@Component({
    moduleId: module.id,
    selector: 'add-recipe',
    templateUrl: 'add-recipe.component.html'
})
export class AddRecipeComponent implements OnInit {

    private name : string;

    constructor(private service : RecipesService) { }

    ngOnInit() { }

    save() {
        this.service.save({'name' : this.name}).subscribe(
            result => console.log(result),
            error => console.log(error)
        );
    }
}
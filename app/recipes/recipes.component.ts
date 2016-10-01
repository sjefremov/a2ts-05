import { Component, OnInit } from '@angular/core';
import { RecipesService } from './recipes.service';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'recipes',
    templateUrl: 'recipes.component.html'
})
export class RecipesComponent implements OnInit {
    
    private recipes: any[];
    private errorMessage:any;

    constructor(private service: RecipesService, private router:Router) { }

    ngOnInit() { this.loadRecipes(); }

    loadRecipes() {
        this.service.getAll().subscribe(
            results => this.recipes = results,
            error => this.errorMessage = error
        );
    }

    view(id:number){
        //console.log(id);
        this.router.navigate(['recipes', id]);
    }
    
}
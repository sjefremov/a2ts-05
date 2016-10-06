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
    private search : any;
    private page : number = 1;

    constructor(private service: RecipesService, private router:Router) {
        this.search = {
            name : ''
        }
    }

    ngOnInit() { this.loadRecipes(); }

    prev() {
        if (this.page > 1) {
            this.page--;
            this.loadRecipes();
        }
        
    }

    next() {
        this.page ++;
        this.loadRecipes();
    }

    loadRecipes() {
        this.service.getAll(this.page, this.search).subscribe(
            results => this.recipes = results,
            error => this.errorMessage = error
        );
    }

    view(id:number){
        //console.log(id);
        this.router.navigate(['recipes', id]);
    }

    // filter() {
    //     this.service.filter(this.search).subscribe(
    //         results => this.recipes = results,
    //         error => this.errorMessage = error
    //     );
    // }
    
}
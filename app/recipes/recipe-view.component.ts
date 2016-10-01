import { Component, OnInit } from '@angular/core';
import { RecipesService } from './recipes.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'recipe-view',
    templateUrl: 'recipe-view.component.html'
})
export class RecipeViewComponent implements OnInit {
    
    private recipe:any;
    private errorMsg:any;

    constructor(
        private service: RecipesService,
        private route: ActivatedRoute,
        private router: Router
        ) { }

    ngOnInit() {
        this.loadRecipe();
     }

     loadRecipe() {
         this.route.params.forEach((params:Params) => {
            console.log(params);
            this.service.get(+params['id']).subscribe(
                results => { this.recipe = results; console.log(results); },
                error => this.errorMsg = error
            );
         });
     }

     delete() {
         this.service.delete(this.recipe.id).subscribe(
             response =>this.router.navigate(['recipes'])
         );
     }
}
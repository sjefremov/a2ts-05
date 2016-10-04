import { Component, OnInit } from '@angular/core';
import { IngredientsService } from './ingredients.service';
import { Router } from '@angular/router';


@Component({
    moduleId: module.id,
    selector: 'ingredients',
    templateUrl: 'ingredients.component.html'
})
export class IngredentsComponent implements OnInit {
    
    private ingredients : any[];
    private errorMsg : any;

    constructor(
        private service : IngredientsService,
        private router : Router
        ) { }

    ngOnInit() { this.loadIngredients(); }

    loadIngredients() {
        this.service.getAll().subscribe(
            results => this.ingredients = results,
            error => this.errorMsg = error
        );
    }

    delete(id :number) {
        this.service.delete(id).subscribe(
            response => this.router.navigate(['ingredients'], { replaceUrl : true })
        );
    }


}
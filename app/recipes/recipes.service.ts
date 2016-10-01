import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class RecipesService {

    private baseUrl:string = 'http://localhost:8083/recipes/';

    constructor(private http: Http) { }

    getAll() {
        return this.http.get(this.baseUrl)
            .map((response: Response) => response.json());
    }

    get(id:number) {
        return this.http.get(this.baseUrl + id + '?_embed=ingredients') 
            .map((response: Response) => response.json());
    }

    delete(id: number) {
        return this.http.delete(this.baseUrl + id);
    }

    save(obj : any) {
        let body = JSON.stringify(obj);
        let headers = new Headers({'Content-Type' : 'application/json'});
        let options = new RequestOptions({headers : headers});

        return this.http.post(this.baseUrl, body, options);
    }
}
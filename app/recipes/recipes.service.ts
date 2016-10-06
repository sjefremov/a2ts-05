import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class RecipesService {

    private baseUrl:string = 'http://localhost:8083/recipes/';

    constructor(private http: Http) { }

    getAll(page : number, search : any) {

        let tempUrl = this.baseUrl + '?_page=' + page;

        if (search.name) {
            tempUrl += '&name_like=' + search.name;
        }

        return this.http.get(tempUrl)
            .map((response: Response) => response.json());
    }

    // filter(search : any) {
    //     return this.http.get(this.baseUrl + '?name_like=' + search.name)
    //         .map((response: Response) => response.json());
    // }

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
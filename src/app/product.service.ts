import { Injectable } from '@angular/core';
import { Product } from './models/product';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    dataSource: string = "assets/products.json";

    catDataSource : string = "https://catfact.ninja/fact";

    title: string = "List of products";

    constructor(private http: HttpClient) { }

    getAllProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.dataSource);
    }

    getRandomCat(): Observable<any>{
        return this.http.get<any>(this.catDataSource);
      }
}
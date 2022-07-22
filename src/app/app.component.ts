import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    title: string = '';
    productList: Product[] = [];
    catData: string = "";
  
    constructor(private myProductService: ProductService) {}
  
    ngOnInit(): void {
      this.title = this.myProductService.title;
      this.myProductService.getAllProducts()
        .subscribe(response => this.productList = response);

        this.myProductService.getRandomCat().subscribe(catResponse => {
          this.catData = catResponse.fact;
          console.log(catResponse.fact);
      });
    }
}
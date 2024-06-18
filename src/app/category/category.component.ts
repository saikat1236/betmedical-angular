import { Component } from '@angular/core';
import { ActivatedRoute, NavigationStart, Route, Router } from '@angular/router';
import { Product } from '../core/models/product.model';
import { Category } from '../core/models/category.model';
import { filter } from 'rxjs';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  host: {ngSkipHydration: 'true'},
})
export class CategoryComponent {

  category: Category;
  products: Array<Product>;

  constructor(private route: ActivatedRoute){
   
    this.route.data.subscribe(({category}) => {
      this.category = category.category
      this.products = category.products;
      
    });

  }
  
  ngOnInit(){
  }
}

import { Component } from '@angular/core';

import { Category, categories } from '../categories';
import {Product, products} from "../products";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {
  categories = categories;
  selectedCategory?: Category;
  products?: Product[];
  rating_list = [1,2,3,4,5];
  rating_score=4.3;
  constructor() {
  }
  changeScore(x: number) : void {
    this.rating_score = (this.rating_score + x)/2;
  }
  onSelect(category: Category): void {
    this.selectedCategory = category;
  }
  onRemove(index: number): void {
    this.categories.forEach( category => {
      if(category == this.selectedCategory) {
        this.products = category.products.filter((product) => product.id !== index);
        category.products = this.products;
      }
    })
  }
}

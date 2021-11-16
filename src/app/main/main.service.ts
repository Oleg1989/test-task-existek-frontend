import { Injectable } from '@angular/core';
import { Guid } from "guid-typescript";

import { Card } from '../interface/cardInterface';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  private products: Card[] = [];
  private sortProducts: Card[] = [];
  private newProducts: Card[] = [];
  private MAX_PRODUCTS: number = 100;
  private MAX_PRICE: number = 100;
  private MIN_PRICE: number = 1;
  private CATEGORIES: string[] = ['Shop by Brand', 'Home', 'Electronics', 'Health', 'Sports & Outdoors'];
  constructor() {
    this.creatCards();
  }

  get getProducts(): Card[] {
    if (this.newProducts.length === 0) {
      return this.products;
    }
    return this.newProducts;
  }
  creatCards() {
    for (let i = 1; i <= this.MAX_PRODUCTS; i++) {
      if (i % 2 === 0) {
        this.products.push({
          id: Guid.create(),
          categories: this.CATEGORIES[Math.floor(Math.random() * (this.CATEGORIES.length - 0)) + 0],
          url: "https://material.angular.io/assets/img/examples/shiba2.jpg",
          title: 'Title',
          price: Math.floor(Math.random() * (this.MAX_PRICE - this.MIN_PRICE + 1)) + this.MIN_PRICE,
        });
      } else if (i % 3 === 0) {
        this.products.push({
          id: Guid.create(),
          categories: this.CATEGORIES[Math.floor(Math.random() * (this.CATEGORIES.length - 0)) + 0],
          url: "https://material.angular.io/assets/img/examples/shiba2.jpg",
          title: 'Title 1',
          price: Math.floor(Math.random() * (this.MAX_PRICE - this.MIN_PRICE + 1)) + this.MIN_PRICE,
        });
      } else {
        this.products.push({
          id: Guid.create(),
          categories: this.CATEGORIES[Math.floor(Math.random() * (this.CATEGORIES.length - 0)) + 0],
          url: "https://material.angular.io/assets/img/examples/shiba2.jpg",
          title: 'Title 2',
          price: Math.floor(Math.random() * (this.MAX_PRICE - this.MIN_PRICE + 1)) + this.MIN_PRICE,
        });
      }
    }
  }
  filterGards(categories: string[]) {
    categories.forEach(category => {
      this.sortProducts = [...this.products.filter(product => product.categories === category)];
    });
    this.newProducts = [...this.newProducts, ...this.sortProducts];
  }
}

import { Injectable } from '@angular/core';
import { Guid } from "guid-typescript";

import { Card } from '../interface/cardInterface';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  private products: Card[] = [];
  private MAX_PRODUCTS: number = 100;
  private MAX_PRICE: number = 100;
  private MIN_PRICE: number = 1;
  private CATEGORIES: string[] = ['Shop by Brand', 'Home', 'Electronics', 'Health', 'Sports & Outdoors'];
  constructor() { }

  get getProducts(): Card[] {
    return this.products;
  }
  creatCards() {
    for (let i = 1; i <= this.MAX_PRODUCTS; i++) {
      if (i % 2 === 0) {
        this.products.push({
          id: Guid.create(),
          categories: this.CATEGORIES[Math.floor(Math.random() * (this.CATEGORIES.length - 0 + 1)) + 0],
          title: 'Title',
          price: Math.floor(Math.random() * (this.MAX_PRICE - this.MIN_PRICE + 1)) + this.MIN_PRICE,
        });
      } else if (i % 3 === 0) {
        this.products.push({
          id: Guid.create(),
          categories: this.CATEGORIES[Math.floor(Math.random() * (this.CATEGORIES.length - 0 + 1)) + 0],
          title: 'Title 1',
          price: Math.floor(Math.random() * (this.MAX_PRICE - this.MIN_PRICE + 1)) + this.MIN_PRICE,
        });
      } else {
        this.products.push({
          id: Guid.create(),
          categories: this.CATEGORIES[Math.floor(Math.random() * (this.CATEGORIES.length - 0 + 1)) + 0],
          title: 'Title 2',
          price: Math.floor(Math.random() * (this.MAX_PRICE - this.MIN_PRICE + 1)) + this.MIN_PRICE,
        });
      }
    }
  }
}

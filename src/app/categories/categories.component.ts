import { Component, Input, OnInit } from '@angular/core';
import { MatListOption } from '@angular/material/list';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  @Input() category: string = "";

  typesOfCategories: string[] = ['Shop by Brand', 'Home', 'Electronics', 'Health', 'Sports & Outdoors'];
  constructor() { }

  ngOnInit(): void {
    console.log(this.category);
  }

}

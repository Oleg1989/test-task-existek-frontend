import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  typesOfShoes: string[] = ['Shop by Brand', 'Home', 'Electronics', 'Health', 'Sports & Outdoors'];
  constructor() { }

  ngOnInit(): void {
  }

}

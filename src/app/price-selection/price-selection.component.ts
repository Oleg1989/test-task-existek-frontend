import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-price-selection',
  templateUrl: './price-selection.component.html',
  styleUrls: ['./price-selection.component.css']
})
export class PriceSelectionComponent implements OnInit {
  priceTo: number | null = null;
  priceGo: number | null = null;
  fromZeroToFive = false;
  fromFiveToTen = false;
  fromTenToTwenty = false;
  fromTwentyToFifty = false;
  fromFiftyToHundred = false;

  constructor() { }

  ngOnInit(): void {
  }

}

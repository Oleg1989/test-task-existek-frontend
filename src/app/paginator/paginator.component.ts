import { Component, OnInit } from '@angular/core';

import { MainService } from '../main/main.service';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {
  length;
  constructor(private mainService: MainService) {
    this.length = this.mainService.getProducts.length;
  }

  ngOnInit(): void {

  }

}

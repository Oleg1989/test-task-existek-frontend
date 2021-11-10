import { Component, OnInit } from '@angular/core';

import { MainService } from '../main/main.service';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {
  length;
  pageSize: number = 10;
  pageIndex: number = 1;
  pageSizeOptions: number[] = [10, 25, 50, 100];
  constructor(private mainService: MainService) {
    this.length = this.mainService.getProducts.length;
    console.log(this.pageSize);
  }

  ngOnInit(): void {

  }

}

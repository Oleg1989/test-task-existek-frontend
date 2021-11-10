import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tol-bar',
  templateUrl: './tol-bar.component.html',
  styleUrls: ['./tol-bar.component.css']
})
export class TolBarComponent implements OnInit {
  logo: string = JSON.parse(localStorage.getItem('login')!);
  constructor() { }

  signOut() {
    localStorage.removeItem('login');
  }
  ngOnInit(): void {
  }

}

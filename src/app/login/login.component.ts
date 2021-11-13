import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

import { User } from '../interface/userInterface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  hide = true;

  constructor() { }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  isLogin() {
    if (this.email.value !== '' && this.password.value !== '') {
      const users: User[] = JSON.parse(localStorage.getItem('signUp')!);
      const userAuth = users.find(user => user.email === this.email.value && user.password === this.password.value);
      if (userAuth) {
        localStorage.setItem('login', JSON.stringify(userAuth?.name));
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Check email and password!!!',
        })
      }
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Check email and password!!!',
      })
    }
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { User } from '../interface/userInterface';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {
  name = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  reTypePassword = new FormControl('', [Validators.required]);
  hidePassword = true;
  hideReTypePassword = true;

  constructor() { }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  isSignUp() {
    const users: User[] = JSON.parse(localStorage.getItem('signUp')!) || [];
    if (this.name.value && this.email.value && this.password.value && this.reTypePassword.value) {
      if (this.password.value === this.reTypePassword.value) {
        const name: string = this.name.value;
        const email: string = this.email.value;
        const password: string = this.password.value;
        const reTypePassword: string = this.reTypePassword.value;
        users.push({
          name: name,
          email: email,
          password: password,
          reTypePassword: reTypePassword,
        });
      }
      localStorage.setItem('signUp', JSON.stringify(users));
    }
  }

  ngOnInit(): void {
  }

}

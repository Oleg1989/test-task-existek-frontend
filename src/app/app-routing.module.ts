import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { MainGuard } from './main.guard';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { SingUpComponent } from './sing-up/sing-up.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'sign-up',
    component: SingUpComponent,
  },
  {
    path: 'main',
    component: MainComponent,
    canActivate: [MainGuard],
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

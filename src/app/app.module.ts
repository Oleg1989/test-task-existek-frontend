import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SingUpComponent } from './sing-up/sing-up.component';
import { MainComponent } from './main/main.component';
import { MaterialModule } from './ngmaterial/ngmaterial.module';
import { TolBarComponent } from './tol-bar/tol-bar.component';
import { CategoriesComponent } from './categories/categories.component';
import { PriceSelectionComponent } from './price-selection/price-selection.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SingUpComponent,
    MainComponent,
    TolBarComponent,
    CategoriesComponent,
    PriceSelectionComponent,
    PaginatorComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule,
    SweetAlert2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {arrRouting} from "./app.routing";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { AddBookComponent } from './add-book/add-book.component';
import { AllBookComponent } from './all-book/all-book.component';
import { LoginComponent } from './login/login.component';
import { RegComponent } from './reg/reg.component';
import { BookComponent } from './book/book.component';
import { HttpClientModule } from '@angular/common/http';

import { ViewCardComponent } from './view-card/view-card.component';
import { ApiComponent } from './api/api.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';

// import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    // AddBookComponent,
    AllBookComponent,
    LoginComponent,
    RegComponent,
    BookComponent,

    ViewCardComponent,
    ApiComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,RouterModule,arrRouting,
    HttpClientModule,ReactiveFormsModule, BrowserAnimationsModule,MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

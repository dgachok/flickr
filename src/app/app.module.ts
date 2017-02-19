import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// routes
import { Routes } from './app.routes';

import { AppComponent } from './app.component';
import { RouterModule} from "@angular/router";
import { GalleryComponent } from './components/gallery/gallery.component';
import { HomeComponent } from './components/home/home.component';
import { StoreComponent } from './components/store/store.component';
import {SearchService} from "./services/search.service";
import { SpinnerComponent } from './components/spinner/spinner.component';
import {AuthService} from "./services/auth.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GalleryComponent,
    StoreComponent,
    SpinnerComponent
  ],
  imports: [
    RouterModule.forRoot(Routes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [SearchService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ShowsComponent } from './shows/shows.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { HttpClientModule } from "@angular/common/http";
import { MatCardModule } from "@angular/material/card";
import { FilterPipeModule } from "./Pipe/searchShow.module";
import { FormsModule } from "@angular/forms";
import { FlickityModule } from "ngx-flickity";
import { FoundShowsComponent } from './found-shows/found-shows.component';
import { MatInputModule } from "@angular/material/input";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ShowsComponent,
    FoundShowsComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatListModule,
        MatCardModule,
        FilterPipeModule,
        FormsModule,
        FlickityModule,
        MatInputModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

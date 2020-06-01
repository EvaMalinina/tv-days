import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ShowsComponent } from './components/shows/shows.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { FlickityModule } from 'ngx-flickity';
import { MatInputModule } from '@angular/material/input';
import { SheduleComponent } from './components/shedule/shedule.component';
import { ShowInfoComponent } from './components/show-info/show-info.component';
import { LoaderComponent } from './components/loader/loader.component';
import { LoaderService } from './Services/loader.service';
import { LoaderInterceptor } from './Interceptors/loader-interceptor.service';
import { ArticlesComponent } from './components/articles/articles.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ShowsComponent,
    SheduleComponent,
    ShowInfoComponent,
    LoaderComponent,
    ArticlesComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatListModule,
        MatCardModule,
        FormsModule,
        FlickityModule,
        MatInputModule
    ],
  providers: [
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

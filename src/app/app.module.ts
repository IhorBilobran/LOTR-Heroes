import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MediaMatcher } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';

import { HeroListService } from './hero-list.service'
import { JsonPipe } from '@angular/common';
import { FeedbackComponent } from './feedback/feedback.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { HeroItemComponent } from './hero-item/hero-item.component';


@NgModule({
  declarations: [
    AppComponent,
    FeedbackComponent,
    HeroDetailComponent,
    HeaderComponent,
    SearchComponent,
    HeroItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HeroListService],
  bootstrap: [AppComponent]
})
export class AppModule { }

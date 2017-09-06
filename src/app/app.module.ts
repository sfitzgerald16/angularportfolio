import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';
import { WorksamplesComponent } from './worksamples/worksamples.component';

import { AngularComponent } from './worksamples/angular/angular.component';
import { JavascriptComponent } from './worksamples/javascript/javascript.component';
import { HtmlComponent } from './worksamples/html/html.component';
import { WordpressComponent } from './worksamples/wordpress/wordpress.component';
import { PythonComponent } from './worksamples/python/python.component';
import { SocialMediaComponent } from './worksamples/social-media/social-media.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactComponent,
    WorksamplesComponent,
    AngularComponent,
    JavascriptComponent,
    HtmlComponent,
    WordpressComponent,
    PythonComponent,
    SocialMediaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { TopbarComponent } from './header/topbar/topbar.component';
import { DefaultComponent } from './layout/default/default.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { HomesliderComponent } from './home/homeslider/homeslider.component';
import { ProductcategorysliderComponent } from './home/productcategoryslider/productcategoryslider.component';
import { ParnersliderComponent } from './home/parnerslider/parnerslider.component';
import { ParnersliderComponent2 } from './home/parnerslider2/parnerslider2.component';
import { provideClientHydration } from '@angular/platform-browser';
import { LightboxModule } from 'ng-gallery/lightbox';
import { GalleryModule } from 'ng-gallery';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import {Content} from './home/content/content.component';
import {Blog} from './home/blog/blog';
import {Expert} from './home/expert/expert';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopbarComponent,
    DefaultComponent,
    FooterComponent,
    HomeComponent,
    HomesliderComponent,
    ProductcategorysliderComponent,
    ParnersliderComponent,
    ParnersliderComponent2,
    Content,
    Blog,
    Expert
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    SharedModule,
    BrowserAnimationsModule,
    LightboxModule,
    GalleryModule,
  ],  
  bootstrap: [AppComponent], 
  providers: [
    //provideClientHydration(),
    { provide: LocationStrategy, useClass: PathLocationStrategy }
  ]
})
export class AppModule { }

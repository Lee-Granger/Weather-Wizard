import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SplashComponent } from './splash/splash.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SplashComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }

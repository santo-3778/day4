import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DistComponent } from './dist/dist.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ContactpageComponent } from './pages/contactpage/contactpage.component';
import { SignuppageComponent } from './pages/signuppage/signuppage.component';
import { DistpageComponent } from './pages/distpage/distpage.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { NavbarComponent } from './units/navbar/navbar.component';
import { FooterComponent } from './units/footer/footer.component';
import { SingleComponent } from './pages/single/single.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DistComponent,
    HomepageComponent,
    ContactpageComponent,
    SignuppageComponent,
    DistpageComponent,
    LoginpageComponent,
    NavbarComponent,
    FooterComponent,
    SingleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

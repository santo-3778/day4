import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactpageComponent } from './pages/contactpage/contactpage.component';
import { DistpageComponent } from './pages/distpage/distpage.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { SignuppageComponent } from './pages/signuppage/signuppage.component';
import { SingleComponent } from './pages/single/single.component';

const routes: Routes = [
  {

    path:'Home',component:HomepageComponent
  },


  {

    path:"dist",component:DistpageComponent
  },

  {

    path:'Contact',component:ContactpageComponent
  },

  {
    path:'Signup',component:SignuppageComponent

  },
  
  {

    path:'login',component:LoginpageComponent
  },
   
  {

    path:'single',component:SingleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

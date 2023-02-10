import { Component } from '@angular/core';
import { Router, withEnabledBlockingInitialNavigation } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
@Component({
  selector: 'app-distpage',
  templateUrl: './distpage.component.html',
  styleUrls: ['./distpage.component.css']
})
export class DistpageComponent {
  
  constructor (private d:ServiceService,private r :Router){}
  database=this.d.getdata();

  gotohere(District:any) {
    localStorage.setItem('District',District)
  this.r.navigate(['/single'])
  }
    


}

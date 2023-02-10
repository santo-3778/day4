import { Component } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent {
single :any;
constructor(private ser:ServiceService){}
ngOnInit():void{
 let District =localStorage.getItem("District")
 let database=this.ser.getdata()
 this.single=database.filter(e=> e.District===District)
}
}

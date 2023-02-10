import { Injectable } from '@angular/core';
import { database } from 'src/assets/data/dbss';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }



  getdata(){
    return database
  }
 
}


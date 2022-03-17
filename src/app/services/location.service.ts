import { Injectable } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import {MyLocation} from '../services/pancake.service';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor() { }


  async getMyLocation(){
      const myCoords = await Geolocation.getCurrentPosition();
      const myLoc: MyLocation =  {
        longi: myCoords.coords.longitude,
        lati: myCoords.coords.latitude
      }
      return myLoc;
  }
}

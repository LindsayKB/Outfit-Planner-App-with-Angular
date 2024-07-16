import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApixuService {

  constructor(private http: HttpClient) {}

  getWeather(location : any, units : any){
      var requestUrl = 'http://api.weatherstack.com/current?access_key=WEATHERSTACKAPIGOESHERE&query=' + location;
      console.log("Units: " + units);
      if (units == "f") {
        requestUrl += '&units=' + units;
      }
      console.log(requestUrl);
      return this.http.get(
          requestUrl
      );
  }
}

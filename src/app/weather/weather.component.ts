import { Component } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';

import { ApixuService } from "../apixu.service";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent {
  weatherSearchForm: FormGroup = new FormGroup({});
  weatherData: any;
  outfitData: any;

  outfits = [
    {
      "id": 1,
      "name": "Under 30",
      "ideas":
      [
        {"option": "Parka, sweater, and jeans with thermal leggings underneath"},
        {"option": "Turtleneck with jeans and a woven trenchcoat"}
      ]
    },
    {
      "id": 2,
      "name": "30-39",
      "ideas":
      [
        {"option": "Chunky sweater and jeans"},
        {"option": "Long sweater dress"},
        {"option": "Graphic sweatshirt and overalls"}
      ]
    },
    {
      "id": 3,
      "name": "40-49",
      "ideas":
      [
        {"option": "Sweatpants, sweatshirt, and trenchcoat"},
        {"option": "Sweater and thermal leggings"},
        {"option": "Peacoat, thick blouse, and jeans"}
      ]
    },
    {
      "id": 4,
      "name": "50-59",
      "ideas":
      [
        {"option": "Sweater and jeans"},
        {"option": "Chunky sweater and a maxi skirt"},
        {"option": "Sweater dress with tights"}
      ]
    },
    {
      "id": 5,
      "name": "60-69",
      "ideas":
      [
        {"option": "Sweatshirt and bike shorts"},
        {"option": "Lightweight turtleneck, vest, and slacks"},
        {"option": "Leather jacket, t-shirt, and jeans"}
      ]
    },
    {
      "id": 6,
      "name": "70-79",
      "ideas":
      [
        {"option": "Button down shirt and linen shorts"},
        {"option": "T-shirt and denim maxi skirt"},
        {"option": "Jumpsuit"}
      ]
    },
    {
      "id": 7,
      "name": "80-89",
      "ideas":
      [
        {"option": "Maxi dress and sandals"},
        {"option": "Puff sleeve top and denim shorts"},
        {"option": "Romper and sneakers"}
      ]
    },
    {
      "id": 8,
      "name": "90+",
      "ideas":
      [
        {"option": "Tank top and a lightweight skirt"},
        {"option": "Shortalls and a v-neck t-shirt"},
        {"option": "Crop top and denim shorts"}
      ]
    }
  ];

  constructor(
    private formBuilder: FormBuilder,
    private apixuService: ApixuService
  )
     { }

  ngOnInit() {
    this.weatherSearchForm = this.formBuilder.group({
        location: [''],
        units: ['']
      });
    }

    getOutfitResults(data : any, units : any) {
      var currentTemp = data.current.temperature;

      if (units == 'c') {
        //Convert temperature to Fahrenheit
        currentTemp = (currentTemp * (9 / 5)) + 32;
      }

      var id = 0;

      const x = currentTemp;

      switch (true) {
        case (x < 30):
          id = 1;
          break;
        case (x >= 30 && x < 39):
          id = 2;
          break;
        case (x >= 40 && x < 49):
          id = 3;
          break;
        case (x >= 50 && x < 59):
          id = 4;
          break;
        case (x >= 60 && x < 69):
          id = 5;
          break;
        case (x >= 70 && x < 79):
          id = 6;
          break;
        case (x >= 80 && x < 89):
          id = 7;
          break;
        case (x >= 90):
          id = 8;
          break;
        default:
          id = 0;
          break;
    }


      var results = this.outfits[id];

      return results.ideas;
    }


    sendToAPIXU(formValues : any) {
      this.apixuService.getWeather(formValues.location, formValues.units).subscribe(data => {
        this.weatherData = data;

        this.outfitData = this.getOutfitResults(data, formValues.units);

        console.log(this.weatherData);
      });
    }
}

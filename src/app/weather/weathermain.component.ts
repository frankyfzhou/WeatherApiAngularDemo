import { Component, ChangeDetectionStrategy } from '@angular/core';
import { WeatherService } from './weather.service';
import { CitiesListComponent } from './citieslist.component';
import { Observable } from 'rxjs/Observable';
import { IWeatherData } from './weatherData'
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'weather-main',
  templateUrl: './weathermain.component.html',
  styleUrls: ['./weathermain.component.css'],
})
export class WeatherMainComponent {
  constructor(private weatherService: WeatherService) {
  }

  cityIds: number[] = [];

  Add(cityId) {
    if (this.cityIds.indexOf(cityId)===-1)
    {
        this.cityIds.push(cityId);
    }
  }

  Remove(cityId) {
    var index = this.cityIds.indexOf(cityId, 0);
    if (index > -1) {
       this.cityIds.splice(index, 1);
    }
  }
}

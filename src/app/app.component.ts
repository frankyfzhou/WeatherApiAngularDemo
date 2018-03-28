import { Component, ChangeDetectionStrategy } from '@angular/core';
import { WeatherService } from './weather/weather.service';
import { Observable } from 'rxjs/Observable';
import { IWeatherData } from './weather/weatherData'
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  constructor(private weatherService: WeatherService) {
  }

  cityIds: number[] = [];
  search: string;
  abs: Subscription;
  // obs : Observable<IWeatherData>;
  
  get filter(): string {
      return this.search;
  }
  set filter(value:string){
      this.search = value;

      if (this.abs)
        this.abs.unsubscribe();
  }

  Add(cityId) {
    this.cityIds.push(cityId);
    console.log(this.cityIds);
  }

  Remove(cityId) {
    var index = this.cityIds.indexOf(cityId, 0);
    if (index > -1) {
       this.cityIds.splice(index, 1);
    }
  }
}

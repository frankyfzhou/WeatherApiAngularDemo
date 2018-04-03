import { Component, OnInit, Input, Output, EventEmitter,
    OnChanges, ChangeDetectionStrategy } from '@angular/core';
import { IWeatherData } from './weatherData';
import { WeatherService } from './weather.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IWeatherResponseData } from './weatherReturnObj';
import { ICity } from './city';

@Component({
    selector: 'cities-list',
    templateUrl: './citiesList.component.html',
    styleUrls: ['./citiesList.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CitiesListComponent implements OnChanges {
    @Input() text;
    // @Input() onAddTest;
    @Output() onAddCity = new EventEmitter<number>();

    filteredCities: ICity[] = [];
    
    constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _weatherService: WeatherService) { }

    ngOnChanges(): void {
        this.filteredCities = [];
        this._weatherService.getCitiesByName(this.text).subscribe(
            c=> this.filteredCities.push(c),
        );
    }

    Add(cityId) {
        // this.onAddTest(cityId);
        this.onAddCity.emit(cityId);
    }
}
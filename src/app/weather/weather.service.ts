import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import { IWeatherData } from './weatherData'
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/timer';
import { IWeatherResponseData } from './weatherReturnObj';
import { ICity } from './city';

@Injectable()
export class WeatherService {
    private getCityUrl = "http://api.openweathermap.org/data/2.5/weather?appid=62160c31d261d22adda78160df1c10e3&units=metric&id=";
    private cities: ICity[];

    constructor(private http: HttpClient)
    {
        let citiesUrl = "./assets/city.list.json";
        this.http.get<ICity[]>(citiesUrl).subscribe(r=>{
            this.cities=<ICity[]>r;
        });
    }

    getCitiesByName(name: string): Observable<ICity> {
        if (!this.cities||name === '')
        {
            return Observable.from([]);
        }

        let rx = new RegExp('^' + name, "i");

        let filteredCities = this.cities.filter(c=>
            rx.test(c.name)
        ).slice(0,10);

        return Observable.from(filteredCities);
    }

    getCityById(id: number): Observable<IWeatherData> {
        var url = this.getCityUrl + id;
        return this.http.get<IWeatherData>(url);
    }

    getCityByIdRepeat(id: number, delayMs: number): Observable<IWeatherData> {
        return Observable.timer(0, delayMs).flatMap((n)=>{
        var url = this.getCityUrl + id;
        return this.http.get<IWeatherData>(url);
        });
    }
}
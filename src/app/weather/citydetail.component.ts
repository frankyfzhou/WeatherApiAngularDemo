import { Component, OnInit, Input, OnChanges, ChangeDetectionStrategy
    , ChangeDetectorRef, 
    OnDestroy} from '@angular/core';
import { IWeatherData } from './weatherData';
import { ActivatedRoute, Router } from '@angular/router';
import { WeatherService } from './weather.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'city-detail',
    templateUrl: './citydetail.component.html',
    styleUrls: ['./citydetail.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CityDetailComponent implements OnInit, OnDestroy {
    @Input() cityId: number;
    weatherData: IWeatherData;
    weathersubscription: Subscription;
    
    constructor(private _route: ActivatedRoute,
                private _router: Router,
                private changeDetector: ChangeDetectorRef,
                private weatherService: WeatherService) { }

    ngOnInit(): void {
        if (!this.cityId)
        {
            this.cityId = +this._route.snapshot.paramMap.get('id');
            if (!this.cityId) return;
        }

        this.weathersubscription = 
        this.weatherService.getCityByIdRepeat(this.cityId, 3000)
        // this.weatherService.getCityById(this.cityId)
        .subscribe(r=>{
            this.weatherData = r;
            this.changeDetector.detectChanges();
        });
    }

    ngOnDestroy(): void {
        this.weathersubscription.unsubscribe();
    }
}
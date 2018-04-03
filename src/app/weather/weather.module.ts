import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WeatherService } from './weather.service';
import { CityDetailComponent } from './citydetail.component';
import { WeatherMainComponent } from './weathermain.component';
import { CitiesListComponent } from './citiesList.component';
import { DegToCardPipe } from './deg-to-card.pipe'

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: 'city/:id', 
        component: CityDetailComponent},
    ]),
    CommonModule,
    FormsModule
  ],
  exports: [
    CityDetailComponent,
    WeatherMainComponent,
  ],
  declarations: [
    CityDetailComponent,
    WeatherMainComponent,
    CitiesListComponent,
    DegToCardPipe
  ],
  providers: [
    WeatherService,
  ]
})
export class WeatherModule { }

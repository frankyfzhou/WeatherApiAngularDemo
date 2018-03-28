import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WeatherService } from './weather.service';
import { CityDetailComponent } from './citydetail.component';
import { CommonModule } from '@angular/common';
import { CitiesListComponent } from './citiesList.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: 'a', component: CityDetailComponent},
    //   {path: 'products/:id', 
    //     canActivate: [ProductGuardService],
    //     component: ProductDetailComponent},
    ]),
    CommonModule,
  ],
  exports: [
    CityDetailComponent,
    CitiesListComponent,
  ],
  declarations: [
    CityDetailComponent,
    CitiesListComponent,
  ],
  providers: [
    WeatherService,
  ]
})
export class WeatherModule { }

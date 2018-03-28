import { Coordinate } from "./coordinate";

export interface IWeatherData{
    coord: Coordinate;
    weather: IWeatherObject;
    base: string; 
    main: IMainWeather;
}

interface IWeatherObject {
    id: number;
    main: string;
    description: string;
    icon: string;
}

interface IMainWeather{
    temp: number;
    pressure: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
}
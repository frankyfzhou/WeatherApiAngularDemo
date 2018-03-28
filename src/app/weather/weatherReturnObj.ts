import { IWeatherData } from "./weatherData";

export interface IWeatherResponseData{
    cod: string;
    list: IWeatherData[];
}
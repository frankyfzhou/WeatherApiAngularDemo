import { Coordinate } from "./coordinate";

export interface ICity{
    id: number;
    name: string;
    country: string;
    coord: Coordinate
}
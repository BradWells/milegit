import { Location } from "../interfaces/location";

export interface Route {
    start?: Location;
    end?: Location;
    note?: string;
    mileage?: number;
    projectCode?: string;
}

import { Injectable } from '@angular/core';
import { Route } from '../interfaces/route';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { MapquestRouteResponse } from './mapquest-route-response';

@Injectable({
  providedIn: 'root'
})
export class MileageService {

  private readonly MAPQUEST_API_KEY = 'bKBgV2GVAB36746deWG0Gs3niD3emFQe';

  constructor(private http: HttpClient) { }

  getMileage(route : Route): Observable<number> {
    const url = 'https://www.mapquestapi.com/directions/v2/route';
    const params = new HttpParams()
        .set('key', this.MAPQUEST_API_KEY)
        .set('from', route.start.address)
        .set('to', route.end.address)
        .set('outFormat', 'json')
        .set('ambiguities', 'ignore')
        .set('routeType', 'shortest')
        .set('doReverseGeocode', 'false')
        .set('enhancedNarrative', 'false')
        .set('avoidTimedConditions', 'false');
    const responseObservable = this.http.get<MapquestRouteResponse>(url, { params : params });
    const mileageObservable: Observable<number> = responseObservable.pipe(
      tap(result => console.log(result)),
      map(result => result.route.distance)
    );
    return mileageObservable;
  }
}

import { Injectable, EventEmitter } from '@angular/core';
import { Location } from '../interfaces/location';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectedLocationSubscriptionService {
  // BehaviorSubject -> holds 1 value (good for 'get current thing')
  // Subject -> holds 0 values (good for events)
  // Observable -> ???
  public selectedLocation$: Subject<Location>;

  constructor() {
    this.selectedLocation$ = new Subject<Location>();
  }

  public subscribe(subscriber: any){
    this.selectedLocation$.subscribe(subscriber);
  }

  public select(location: Location): void {
    this.selectedLocation$.next(location);
  }
}
import { Component, OnInit } from '@angular/core';
import { Location } from '../../interfaces/location';
import { SelectedLocationSubscriptionService } from '../../services/selected-location-subscription.service';

@Component({
  selector: 'milegit-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  locations: Location[];
  
  constructor(private selectedLocationSubscriptionService : SelectedLocationSubscriptionService) { }

  ngOnInit() {
    this.locations = [
      {
        name: "Courthouse",
        address: "1701 Farnam St., Omaha, NE"
      },
      {
        name: "LFS Office",
        address: "1941 S. 42nd St., Omaha, NE"
      }
    ];
  }

  onLocationClick(location: Location){
    this.selectedLocationSubscriptionService.select(location);
  }

}

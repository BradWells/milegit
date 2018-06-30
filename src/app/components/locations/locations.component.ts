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
    this.locations = [{
      name: "Brad's house",
      address: "1524 S 50th St."
    }, {
      name: "Union Pacific",
      address: "Sad Dr."
    }];
  }

  onLocationClick(location: Location){
    this.selectedLocationSubscriptionService.select(location);
  }

}

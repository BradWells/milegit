import { Component, OnInit } from '@angular/core';
import { Location } from '../location';

@Component({
  selector: 'milegit-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  locations: Location[];
  
  constructor() { }

  ngOnInit() {
    this.locations = [{
      name: "Brad's house",
      address: "1524 S 50th St."
    }, {
      name: "Union Pacific",
      address: "Sad Dr."
    }];
  }

}

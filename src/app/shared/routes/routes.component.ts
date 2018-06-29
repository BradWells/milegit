import { Component, OnInit } from '@angular/core';
import { Route } from '../route';

@Component({
  selector: 'milegit-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.css']
})
export class RoutesComponent implements OnInit {
  routes: Route[];

  constructor() { }

  ngOnInit() {
    this.routes = [
      {
        start: {
          name: "Brad's house",
          address: "1524 S 50th St."
        },
        end: {
          name: "Union Pacific",
          address: "Sad Dr."
        },
        note: "derp",
        mileage: 12,
        projectCode: "60000"
      }
    ];
  }

}

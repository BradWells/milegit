import { Component, OnInit } from '@angular/core';
import { Route } from '../../interfaces/route';
import { SelectedLocationSubscriptionService } from '../../services/selected-location-subscription.service';
import { Location } from '../../interfaces/location';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'milegit-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.css']
})
export class RoutesComponent implements OnInit {
  displayedColumns: string[];
  tableDataSource: MatTableDataSource<Route>;
  routes: Route[];
  editingRoute: Route;
  currentlyAdding: string; // 'start', 'end'

  constructor(private selectedLocationSubscriptionService: SelectedLocationSubscriptionService) {
    selectedLocationSubscriptionService.subscribe(this.addSelectedLocationToLastRoute);
  }
  
  // Used arrow function because without it the wrong 'this' is used for selectedLocationSubscriptionService.subscribe
  addSelectedLocationToLastRoute = (selectedLocation: Location) => {
    if(this.currentlyAdding === 'start'){
      this.editingRoute.start = selectedLocation;
      this.currentlyAdding = 'end';
    } else {
      this.editingRoute.end = selectedLocation;
      //TODO some stuff
      this.routes.push(this.editingRoute);
      this.tableDataSource = new MatTableDataSource(this.routes);
      this.editingRoute = {};
      this.currentlyAdding = 'start';
    }
  }

  deleteRoute(route: Route){
    const routeIndex = this.routes.indexOf(route);
    this.routes.splice(routeIndex, 1);
  }

  deleteEditingRoute(){
    this.editingRoute = {};
    this.currentlyAdding = 'start';
  }

  ngOnInit() {
    this.displayedColumns = ["startLocation", "endLocation", "note", "mileage", "projectCode", "action"];
    this.editingRoute = {};
    this.currentlyAdding = 'start';
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
    this.tableDataSource = new MatTableDataSource(this.routes);
  }

}

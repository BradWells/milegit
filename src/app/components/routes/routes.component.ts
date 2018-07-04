import { Component, OnInit } from '@angular/core';
import { Route } from '../../interfaces/route';
import { SelectedLocationSubscriptionService } from '../../services/selected-location-subscription.service';
import { Location } from '../../interfaces/location';
import { MatTableDataSource } from '@angular/material';
import { CsvExportService } from '../../services/csv-export.service';
import { MileageService } from '../../services/mileage.service';

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

  private readonly DEFAULT_PROJ_CODE = "60000";

  constructor(private selectedLocationSubscriptionService: SelectedLocationSubscriptionService,
    private csvExportService : CsvExportService,
    private mileageService : MileageService) {
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
      this.calculateMileage(this.editingRoute);
      this.routes.push(this.editingRoute);
      this.createEditingRoute();
      this.refresh();
      this.currentlyAdding = 'start';
    }
  }

  deleteRoute(route: Route){
    console.log('deleting route');
    const routeIndex = this.routes.indexOf(route);
    this.routes.splice(routeIndex, 1);
    this.refresh();
  }

  deleteEditingRoute(){
    console.log('deleting editing route');
    delete this.editingRoute;
    this.createEditingRoute();
    this.currentlyAdding = 'start';
    this.refresh();
  }

  createEditingRoute(){
    this.editingRoute = {
      projectCode: this.DEFAULT_PROJ_CODE
    };
  }

  refresh(){
    this.tableDataSource = new MatTableDataSource(this.routes);
  }

  ngOnInit() {
    this.displayedColumns = ["startLocation", "endLocation", "note", "mileage", "projectCode", "action"];
    this.createEditingRoute();
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
        projectCode: this.DEFAULT_PROJ_CODE
      }
    ];
    this.tableDataSource = new MatTableDataSource(this.routes);
  }

  calculateMileage(route : Route){
    const mileageObservable = this.mileageService.getMileage(route)
    mileageObservable.subscribe(mileage => {
      route.mileage = mileage;
    });
  }

  exportRoutesToCsv(){
    this.csvExportService.exportRoutes(this.routes);
  }

}

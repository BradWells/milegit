import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutesComponent } from './routes/routes.component';
import { LocationsComponent } from './locations/locations.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RoutesComponent, LocationsComponent, LocationsComponent],
  exports: [RoutesComponent, LocationsComponent]
})
export class SharedModule { }

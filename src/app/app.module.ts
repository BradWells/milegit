import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LocationsComponent } from './components/locations/locations.component';
import { RoutesComponent } from './components/routes/routes.component';
import {MatButtonModule, MatTableModule, MatIconModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const materialModules = [
  MatButtonModule,
  MatTableModule,
  MatIconModule,
  BrowserAnimationsModule
];

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    RoutesComponent,
    LocationsComponent
  ],
  imports: [
    BrowserModule,
    ...materialModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

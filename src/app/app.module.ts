import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LocationsComponent } from './components/locations/locations.component';
import { RoutesComponent } from './components/routes/routes.component';
import {MatButtonModule, MatTableModule, MatIconModule, MatSelectModule, MatInputModule, } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const materialModules = [
  MatButtonModule,
  MatTableModule,
  MatIconModule,
  MatSelectModule,
  MatInputModule,
  FormsModule,
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
    HttpClientModule,
    ...materialModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

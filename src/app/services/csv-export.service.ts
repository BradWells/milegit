import { Injectable } from '@angular/core';
import { Route } from '../interfaces/route';
import { json2csv } from 'json2csv';

@Injectable({
  providedIn: 'root'
})
export class CsvExportService {

  constructor() {
  }

  exportRoutes(routes: Route[]){
    const fields = ['start', 'end', 'note', 'mileage', 'projectCode'];
    const csvText = json2csv({
      data: routes,
      fields: fields
    });
    this.download('Routes.csv', csvText);
  }

  private download(filename, text) {
    //https://stackoverflow.com/a/20194533
    var a = window.document.createElement('a');
    a.href = window.URL.createObjectURL(new Blob([text], {type: 'text/csv'}));
    a.download = filename;

    // Append anchor to body.
    document.body.appendChild(a);
    a.click();

    // Remove anchor from body
    document.body.removeChild(a);
  }
}

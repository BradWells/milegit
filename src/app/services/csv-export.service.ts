import { Injectable } from '@angular/core';
import { Route } from '../interfaces/route';
const json2csv = require('json2csv').parse;

@Injectable({
  providedIn: 'root'
})
export class CsvExportService {

  constructor() {
  }

  exportRoutes(routes: Route[]){
    const fields = ['start.address', 'end.address', 'note', 'mileage', 'projectCode'];
    const csvText = json2csv(routes, {fields: fields});
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

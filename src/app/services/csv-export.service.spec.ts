import { TestBed, inject } from '@angular/core/testing';

import { CsvExportService } from './csv-export.service';

describe('CsvExportService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CsvExportService]
    });
  });

  it('should be created', inject([CsvExportService], (service: CsvExportService) => {
    expect(service).toBeTruthy();
  }));
});

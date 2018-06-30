import { TestBed, inject } from '@angular/core/testing';

import { SelectedLocationSubscriptionService } from './selected-location-subscription.service';

describe('SelectedLocationSubscriptionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SelectedLocationSubscriptionService]
    });
  });

  it('should be created', inject([SelectedLocationSubscriptionService], (service: SelectedLocationSubscriptionService) => {
    expect(service).toBeTruthy();
  }));
});

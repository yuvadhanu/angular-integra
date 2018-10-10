import { Injectable } from '@angular/core';
import { Twoway } from './twoway';
import { empArray } from './mock-db';

@Injectable({
  providedIn: 'root'
})
export class ProvideService {

  constructor() { }

  getDatabase(): Twoway[] {
    return empArray;
  }

}

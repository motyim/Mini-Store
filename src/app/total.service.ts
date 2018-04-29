import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class TotalService {

  private totalSource = new BehaviorSubject<number>(0);

  // to make it observable
  currentTotal = this.totalSource.asObservable();

  constructor() { }

  changeTotal(amount: number) {
    this.totalSource.next(amount);
  }


}

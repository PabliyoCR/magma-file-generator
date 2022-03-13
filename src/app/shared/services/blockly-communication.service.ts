import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlocklyCommunicationService {

  selectionObservable = new Subject()

  constructor() { }

  elementChange() {
    this.selectionObservable.next()
  }
}

import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  show$ = new EventEmitter<boolean>();

  private _requestCount = 0;

  begin() {
    this._requestCount++;
    this.show$.emit(Boolean(this._requestCount));
  }

  end() {
    this._requestCount--;
    this.show$.emit(Boolean(this._requestCount));
  }
}

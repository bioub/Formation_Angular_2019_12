import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  request = new EventEmitter<number>();

  private _requestCount = 0;

  begin() {
    this._requestCount++;
    this.request.emit(this._requestCount);
  }

  end() {
    this._requestCount--;
    this.request.emit(this._requestCount);
  }
}

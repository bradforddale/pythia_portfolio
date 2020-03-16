import { Injectable } from '@angular/core';
import { Portfolio } from '../models/portfolio';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor() { }

  getPortfolios(): Observable<Portfolio[]> {
    return of([
      {id: "123", fullname: "Bradford Dale", email: "dfkjs@gmail.com", cell: "423423", awards: [], positions: []},
      {id: "456", fullname: "Bradford Dale", email: "dfkjs@gmail.com", cell: "423423", awards: [], positions: []}
    ]);
  }

  getPortfolio(id: string): Observable<Portfolio> {
    return of({id: "123", fullname: "Bradford Dale", email: "dfkjs@gmail.com", cell: "423423", awards: [], positions: []});
  }
}

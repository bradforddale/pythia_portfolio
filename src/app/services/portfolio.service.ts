import { Injectable } from '@angular/core';
import { Portfolio } from '../models/portfolio';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http: HttpClient) { }

  private pythiaServicesUrl = 'http://localhost:8080/pythia_services/profile/';

  httpOptions = {
    headers: new HttpHeaders(
      { 'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*' },
      )
  };

  getPortfolios(): Observable<Portfolio[]> {
    return this.http.get<Portfolio[]>(this.pythiaServicesUrl, this.httpOptions).pipe(
      retry(1),
      catchError(this.handleError<Portfolio[]>('GET_PORTFOLIOS', []))
    )

    // return of([
    //   {id: "123", fullname: "Bradford Dale", email: "dfkjs@gmail.com", cell: "423423", awards: [], positions: []},
    //   {id: "456", fullname: "Bradford Dale", email: "dfkjs@gmail.com", cell: "423423", awards: [], positions: []}
    // ]);
  }

  getPortfolio(id: string): Observable<Portfolio> {
    return of({id: "123", personalInfo: {fullname: "Bradford Dale", email: "dfkjs@gmail.com", cell: "423423"}, awards: [], positions: []});
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation}_ERROR: ${JSON.stringify(error)}`);
      return of(result as T);
    };
  }
}

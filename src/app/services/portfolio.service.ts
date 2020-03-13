import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor() { }

  getPortfolios(): string {
    return "Proper text";
  }
}

import { Component, OnInit } from '@angular/core';
import { PortfolioService } from './../services/portfolio.service'
import { Portfolio } from '../models/portfolio';

@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.scss']
})
export class PortfolioListComponent implements OnInit {

  constructor(private portfolioService: PortfolioService) { }
  portfolios: Portfolio[];

  ngOnInit(): void {
    this.portfolioService.getPortfolios().subscribe(portfolios => this.portfolios = portfolios);
  }

}

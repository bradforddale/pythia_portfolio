import { Component, OnInit } from '@angular/core';
import { PortfolioService } from './../services/portfolio.service'

@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.scss']
})
export class PortfolioListComponent implements OnInit {

  constructor(private portfolioService: PortfolioService) { }
  porfolios: string;

  ngOnInit(): void {
    this.porfolios = "hfsjdjfks";
    this.porfolios = this.portfolioService.getPortfolios();
  }

}

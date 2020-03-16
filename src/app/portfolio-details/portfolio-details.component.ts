import { Component, OnInit, Input } from '@angular/core';
import { Portfolio } from '../models/portfolio';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PortfolioService } from '../services/portfolio.service'

@Component({
  selector: 'app-portfolio-details',
  templateUrl: './portfolio-details.component.html',
  styleUrls: ['./portfolio-details.component.scss']
})
export class PortfolioDetailsComponent implements OnInit {
  constructor( 
    private route: ActivatedRoute,
    private location: Location,
    private portfolioService: PortfolioService,
    ) { }

  @Input() selectedPortfolio: Portfolio;

  ngOnInit(): void {
    this.getPortfolio();
    // this.selectedPortfolio = {id: "123", fullname: "Bradford Dale", email: "dfkjs@gmail.com", cell: "423423", awards: [], positions: []}
  }

  getPortfolio(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!!id) {
      this.portfolioService.getPortfolio(id)
      .subscribe(portfolio => this.selectedPortfolio = portfolio);
    }
    
  }

}

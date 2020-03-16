import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioDetailsComponent } from './portfolio-details/portfolio-details.component';
import { PortfolioListComponent } from './portfolio-list/portfolio-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list', component: PortfolioListComponent },
  { path: 'details/:id', component: PortfolioDetailsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

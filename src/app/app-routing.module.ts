import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FetchBettypesComponent } from './Components/fetch-bettypes/fetch-bettypes.component';
import { AddBettypesComponent } from './Components/add-bettypes/add-bettypes.component';
import { SportsComponent } from './Components/sports/sports.component';
import { AddSportComponent } from './components/add-sport/add-sport.component';
import { CountriesComponent } from './countries/countries.component';
import { AddCountriesComponent } from './Components/AddCountries/AddCountries.component';


const routes: Routes = [
  {path : '', redirectTo:'/countries',pathMatch:'full'},
  { path: 'bettypes', component: FetchBettypesComponent },
  { path: 'countries', component: CountriesComponent },
  { path: 'Add-countries', component: AddCountriesComponent },
  { path: 'Add-bettypes', component: AddBettypesComponent },
  { path: 'Sports', component: SportsComponent },
  { path: 'Add-Sport', component: AddSportComponent },
  { path: 'bettype/edit/:id', component: AddBettypesComponent }, 
  { path: 'sport/edit/:id', component: AddSportComponent }, 
  { path: 'countries/edit/:id', component: AddBettypesComponent }, 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

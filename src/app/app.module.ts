import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import {RouterModule} from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideMenueComponent } from './Components/side-menue/side-menue.component';
import {HttpClientModule} from '@angular/common/http'
import { AddBettypesComponent } from './Components/add-bettypes/add-bettypes.component';
import { FetchBettypesComponent } from './Components/fetch-bettypes/fetch-bettypes.component';
import { SportsComponent } from './Components/sports/sports.component';
import { AddSportComponent } from './components/add-sport/add-sport.component';
import { CountriesComponent } from './countries/countries.component';


@NgModule({
  declarations: [
    AppComponent,
    SideMenueComponent,

    AddBettypesComponent,
    FetchBettypesComponent,
    SportsComponent,
    AddSportComponent,
    CountriesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

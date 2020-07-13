import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideMenueComponent } from './Components/side-menue/side-menue.component';
import {HttpClientModule} from '@angular/common/http'
import { AddBettypesComponent } from './Components/add-bettypes/add-bettypes.component';
import { FetchBettypesComponent } from './Components/fetch-bettypes/fetch-bettypes.component';

@NgModule({
  declarations: [
    AppComponent,
    SideMenueComponent,

    AddBettypesComponent,
    FetchBettypesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

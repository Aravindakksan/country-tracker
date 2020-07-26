import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CnameComponent } from './cname/cname.component';
import { CcodeComponent } from './ccode/ccode.component';
import { CcapitalComponent } from './ccapital/ccapital.component';
import { ContinentComponent } from './continent/continent.component';
import { DetailComponent } from './detail/detail.component';
import { MainComponent } from './main/main.component';
import { PopulationComponent } from './population/population.component';
import { AreaComponent } from './area/area.component';  
import {ChartsModule} from 'ng2-charts'

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CnameComponent,
    CcodeComponent,
    CcapitalComponent,
    ContinentComponent,
    DetailComponent,
    MainComponent,
    PopulationComponent,
    AreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

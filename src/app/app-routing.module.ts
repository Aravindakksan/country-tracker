import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CnameComponent } from './cname/cname.component';
import { CcodeComponent } from './ccode/ccode.component';
import { CcapitalComponent } from './ccapital/ccapital.component';
import { ContinentComponent } from './continent/continent.component';
import { NavComponent } from './nav/nav.component';
import { DetailComponent } from './detail/detail.component';
import { PopulationComponent } from './population/population.component';
import { AreaComponent } from './area/area.component';


const routes: Routes = [
  {
    path:"nav",
   component:NavComponent
   },
  {
   path:"name",
  component:CnameComponent
  },
  {
    path:"code",
   component:CcodeComponent
   },
   {
    path:"capital",
   component:CcapitalComponent
   },
   {
    path:"continent",
   component:ContinentComponent
   },
   {
    path:"detail",
   component:DetailComponent
   },
   {
    path:"population",
   component:PopulationComponent
   },
   {
    path:"area",
   component:AreaComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

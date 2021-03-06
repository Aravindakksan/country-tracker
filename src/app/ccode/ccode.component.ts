import { Component, OnInit, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CountryService } from '../country.service';
import { stringify } from '@angular/compiler/src/util';
import { country } from '../country';
import { Observable } from 'rxjs';
import { map, startWith, filter } from 'rxjs/operators';
let COUNTRIES: country[] = []
function search(text: string, pipe: PipeTransform): country[] {
  return COUNTRIES.filter(country => {
    const term = text.toLowerCase();
    return country.code.toLowerCase().includes(term);
  });
}

@Component({
  selector: 'app-ccode',
  templateUrl: './ccode.component.html',
  styleUrls: ['./ccode.component.css'],
  providers: [DecimalPipe]
})
export class CcodeComponent{
  filter = new FormControl('');
  countries$: Observable<country[]>;
  constructor(private country: CountryService, private router: Router, pipe: DecimalPipe) {

    this.country.getcode().subscribe(
      data => {
        COUNTRIES = data;


        this.countries$ = this.filter.valueChanges.pipe(
          startWith(''),
          map(text => search(text, pipe))
        );
        console.log(this.countries$)
      },

      err => console.log("error", err),
      () => console.log("complete")
    ) 
  }
  countrydetail(name){
    localStorage.removeItem("countryname");
    localStorage.setItem("countryname",name);
    this.router.navigate(['/detail']);
  }
}

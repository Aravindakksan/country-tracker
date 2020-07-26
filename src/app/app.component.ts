import { Component, OnInit, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CountryService } from './country.service';
import { stringify } from '@angular/compiler/src/util';
import { country } from './country';
import { Observable } from 'rxjs';
import { map, startWith, filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent{

  constructor() {}
  
}

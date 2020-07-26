import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {country} from './country';
import {HttpResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountryService implements OnInit{

  constructor(private http: HttpClient) { }

  ngOnInit(){}

  getcountries(){
    return this.http.get<country[]>("https://cors-anywhere.herokuapp.com/https://mucountrytracker-app.herokuapp.com/");
  }
  getname(){
    return this.http.get<country[]>("https://cors-anywhere.herokuapp.com/https://mucountrytracker-app.herokuapp.com/name");
  }
  getcontinent(){
    return this.http.get<country[]>("https://cors-anywhere.herokuapp.com/https://mucountrytracker-app.herokuapp.com/continent");
  }
  getcode(){
    return this.http.get<country[]>("https://cors-anywhere.herokuapp.com/https://mucountrytracker-app.herokuapp.com/code");
  }
  getcapital(){
    return this.http.get<country[]>("https://cors-anywhere.herokuapp.com/https://mucountrytracker-app.herokuapp.com/capital");
  }
  
}

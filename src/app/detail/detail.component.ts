import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';
import { country } from '../country';



@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  countrydetail=[];
  constructor(private country: CountryService) {
    this.country.getcountries().subscribe(
      data => {
        var cname=localStorage.getItem("countryname");
        for(var i=0;i<data.length;i++){
          if(data[i].name==cname){
            this.countrydetail.push(data[i].name);
            this.countrydetail.push(data[i].capital);
            this.countrydetail.push(data[i].code);
            this.countrydetail.push(data[i].currency);
            this.countrydetail.push(data[i].flag);
            this.countrydetail.push(Number(data[i].lat));
            this.countrydetail.push(Number(data[i].lon));
            this.countrydetail.push(Number(data[i].population));
            this.countrydetail.push(Number(data[i].area));
            this.countrydetail.push(data[i].region);
            this.countrydetail.push(data[i].subregion);
            this.countrydetail.push(data[i].timezone);
          }
        }
        console.log(this.countrydetail)
      },
      err => console.log("error", err),
      () => console.log("complete")
    ) 
   }

  ngOnInit(): void {
  }

}

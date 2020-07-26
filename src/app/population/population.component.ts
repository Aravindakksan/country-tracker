import { Component, OnInit} from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { MultiDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts'
import { CountryService } from '../country.service';

@Component({
  selector: 'app-population',
  templateUrl: './population.component.html', 
  styleUrls: ['./population.component.css']
})
export class PopulationComponent {
  ls:any=[]
  name:any=[]
  population:any=[]
  constructor(private country: CountryService) {
    this.country.getcountries().subscribe(
      data =>{
        for(var i=0;i<data.length;i++){
          this.ls.push({"population":Number(data[i].population),"name":data[i].name})
        }
        this.ls.sort((a, b) => a.population < b.population ? -1 : a.population > b.population ? 1 : 0);
        this.ls.reverse()
        this.ls=this.ls.slice(0,10);
        for(var j=0;j<this.ls.length;j++){
          this.name.push(this.ls[j].name)
          this.population.push(this.ls[j].population)
        }
        console.log(this.name);
        console.log(this.population);
      }
    );
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  
  public pieChartColors: Array < any > = [{
    backgroundColor: ['blue', 'green', 'yellow', 'red', 'orange', 'violet', 'indigo', 'brown', 'gold', 'pink'],
    borderColor: ['black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black']
  }];
  
  public pieChartLabels: Label[] = this.name;
  public pieChartData: MultiDataSet = this.population;
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  ngOnInit() {
  }
    
}

  



import { Component, OnInit} from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { MultiDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts'
import { CountryService } from '../country.service';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html', 
  styleUrls: ['./area.component.css']
})
export class AreaComponent{
ls:any=[]
name:any=[]
area:any=[]
constructor(private country: CountryService) {
  this.country.getcountries().subscribe(
    data =>{
      for(var i=0;i<data.length;i++){
        this.ls.push({"area":Number(data[i].area),"name":data[i].name})
      }
      this.ls.sort((a, b) => a.area < b.area ? -1 : a.area > b.area ? 1 : 0);
      this.ls.reverse()
      this.ls=this.ls.slice(0,10);
      for(var j=0;j<this.ls.length;j++){
        this.name.push(this.ls[j].name)
        this.area.push(this.ls[j].area)
      }
      console.log(this.name);
      console.log(this.area);
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
public pieChartData: MultiDataSet = this.area;
public pieChartType: ChartType = 'pie';
public pieChartLegend = true;
public pieChartPlugins = [];
ngOnInit() {
}
  
}

import { Component, OnInit,ViewChild,Input } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})

export class ResultComponent implements OnInit   {


  constructor() {
    monkeyPatchChartJsTooltip();

    monkeyPatchChartJsLegend();
  }

  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'right',
      labels: {
        fontSize: 18,
        usePointStyle:true,
        padding:25,
        fontStyle:"bold",
        fontColor:"#7F7E96"
      },
    }
    

  };
  
  public pieChartData: SingleDataSet = [30000, 50000,];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public chartColors: any[] = [
    { 
      backgroundColor:["#13A538", "#ED8C2B"] 
    }];
    public labels=['Principle loan amount','Totel interest']
  ngOnInit(): void {
  }

} 

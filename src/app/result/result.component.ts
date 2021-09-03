import { Component, OnInit,ViewChild,Input } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})

export class ResultComponent implements OnInit   {

public emi:number=0
public interest :number=0
public totel:number=0
public piearray=[]
  constructor() {
    
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
  
  public pieChartData: SingleDataSet =[3000,5000];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public chartColors: any[] = [
    { 
      backgroundColor:["#13A538", "#ED8C2B"] 
    }];
    public labels=['Principle loan amount','Totel interest']
  ngOnInit(): void {

    this.getvalues()
    monkeyPatchChartJsTooltip();

    monkeyPatchChartJsLegend();
  }
getvalues(){
let amount=parseInt(localStorage.getItem('amount')||'')
let year =parseFloat(localStorage.getItem('year')||'')
let interest= parseFloat(localStorage.getItem('interest')||'')
let interestmonth=(interest/12/100)
let x=Math.pow((1+(interestmonth)),12*year)
let y=(Math.pow((1+(interestmonth)),12*year)-1)
let emi=Math.round((amount*interestmonth)*(x/y))
let totel_sum=Math.round (emi*(12*year))
let totel_int=(totel_sum-amount)
let Principlesum=totel_sum-totel_int
this.emi=emi
this.interest=totel_int
this.totel=totel_sum
this.pieChartData=[amount,this.interest]
console.log(this.piearray);

}

} 

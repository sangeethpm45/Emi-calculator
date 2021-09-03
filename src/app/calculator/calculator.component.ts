import { Component, OnInit } from '@angular/core';
import { Options } from "@angular-slider/ngx-slider";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  value: number = 0;
  value2:number=0;
  value3:number=0
  options: Options = {
    step:25,
    ceil:200,
    showTicks: true,
    showTicksValues:true,
    animateOnMove:true,
    hideLimitLabels:true,
  };

  options2: Options = {
    step:2.5,
    ceil:20,
    showTicks: true,
    showTicksValues:true,
    animateOnMove:true,
    hideLimitLabels:true,
  };

  options3: Options = {
    step:5,
    ceil:30,
    showTicks: true,
    showTicksValues:true,
    animateOnMove:true,
    hideLimitLabels:true,
  };

  constructor() { }

  ngOnInit(): void {
  }

}

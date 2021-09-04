import { Component, OnInit } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';
import {
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
  value: number = 0;
  value2: number = 0;
  value3: number = 0;
  value4:number=0
  options: Options = {
    floor:0,
    ceil: 200,
    ticksArray:[0,25,50,75,100,125,150,175,200],
    showTicks:true,
    showTicksValues:true,
    animateOnMove:true,
    step:.1
  
  };

  options2: Options = {
    floor: 0,
    ceil:20,
    ticksArray:[0,2.5,5,7.5,10,12.5,15,17.5,20],
    showTicks: true,
    showTicksValues: true,
    tickStep:.5,
    step:.5,
    animateOnMove:true,
  };

  options3: Options = {
    ceil: 30,
    ticksArray:[0,5,10,15,20,25,30],
    showTicks: true,
    showTicksValues: true,
    animateOnMove: true,
    hideLimitLabels: true,
  };
  form = this.fb.group({
    amount: [50000, [Validators.required,Validators.min(50000)]],
    interest: [1,[Validators.required, Validators.min(1)]],
    year: [2, [ Validators.required,Validators.min(1)]],
  });
  submit(){
      localStorage.setItem('amount',this.form.value.amount)
      localStorage.setItem('year',this.form.value.year)
      localStorage.setItem('interest',this.form.value.interest)
      console.log(this.form.value);
      
      this.router.navigateByUrl('result')    
  }
  setamount(){
    let amnt=this.form.value.amount
    if(amnt<100000){
    this.value=amnt/amnt
    //this.form.value.amount=this.value
    }
    this.value=amnt/100000
    //this.form.value.amount=this.value
    //console.log(this.value);
  }

  getamount(){
    this.form.patchValue({amount:Math.floor(this.value*100000)})
    
    this.value4=Math.floor(this.value*100000)
  }


  setinterest(){
    let intrst=this.form.value.interest    
    this.value2=intrst
    
  }
  getinterest(){
    
    this.form.patchValue({interest:this.value2})
    
  }

  setyear(){
    let year=this.form.value.year
    this.value3=year
  }
  getyear(){
    this.form.patchValue({year:this.value3})
  }
  constructor(public fb: FormBuilder,private router:Router) {}

  ngOnInit(): void {}
}

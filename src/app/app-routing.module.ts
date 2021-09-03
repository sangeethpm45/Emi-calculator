import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  {
    path:'',
    component:CalculatorComponent
  },
  {
    path:'result',
    component:ResultComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

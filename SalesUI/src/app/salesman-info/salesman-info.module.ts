import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface SalesmanInfo{
  name : string;
  area : string;
  totalValueOfProductSold: number;
  totalCommission: number;
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class SalesmanInfoModule { }

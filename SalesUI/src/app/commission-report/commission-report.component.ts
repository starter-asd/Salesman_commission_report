import { Component, OnInit} from '@angular/core';
import { ServiceService } from '../service.service';
import { OrderByPipe } from '../order-by.pipe';
import { LocalDate } from '@js-joda/core';
import { ShowProductPopupComponent } from '../show-product-popup/show-product-popup.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SalesmanPopupComponent } from '../salesman-popup/salesman-popup.component';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-commission-report',
  templateUrl: './commission-report.component.html',
  styleUrls: ['./commission-report.component.css'],
  providers:[OrderByPipe]
})
export class CommissionReportComponent implements OnInit{
  date :any;
  reportDate : any;
  commissionData: any;
  sortColumn : string = 'salesman';
  reverseSort:boolean = false;
 salesman_name : any;
  selectedItems  : any;
  product_name : any;
  totalRecords : number = 1000;
  page : number =1;

  HandleDateChange = (event : any)=>{
    this.date = event.target.value;
    console.log(this.date)
    console.log(typeof this.date);
    this.reportDate = LocalDate.parse(this.date);
    console.log(this.reportDate);
    console.log(typeof this.reportDate)
  }

  
  constructor(private serviceService: ServiceService,private orderByPipe : OrderByPipe,private http : HttpClient, private dialog : MatDialog) { }
  ngOnInit(): void {
  }
  
  getCommissionData(fileInput : HTMLInputElement) : void {
    this.serviceService.getCommissionData(this.reportDate).subscribe(data=>{
      this.commissionData = data;
    });

  }


  sort(column:string){
    this.reverseSort = (this.sortColumn == column) ? !this.reverseSort : false;
    this.sortColumn = column;
  }
  

  showSalesmanInfo(salesman : string){
   this.salesman_name = salesman;
    this.serviceService.getSalesmanInfo(this.salesman_name).subscribe((response : any) => {
      const dialogRef = this.dialog.open(SalesmanPopupComponent,{
        width:'400px',
        data : {
          area : response[0].area,
          totalValue : response[0].totalValue,
          totalCommission : response[0].totalCommission,
          name : response[0].name,
        }
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
      console.log(response)
    });

    
  }

  showProductInfo(product : string){
    this.product_name = product;
    this.serviceService.getProductInfo(this.product_name).subscribe((response : any) => {
      const dialogRef = this.dialog.open(ShowProductPopupComponent,{
        width:'400px',
        data : {
          response : response
        },
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
       console.log(response);
    });
    
  }
 

}

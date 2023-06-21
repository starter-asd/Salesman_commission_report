import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalDate } from '@js-joda/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private apiUrl = 'http://localhost:8080/commission';
  constructor(private http: HttpClient) { }

  getCommissionData (reportDate: LocalDate){
    const url = this.apiUrl;
    
    const params = new HttpParams().set('date',reportDate.toString());
    return this.http.get(url,{params});
  }

  getSalesmanInfo(salesman_name : string): Observable<any>{
    const url = "http://localhost:8080/commission/salesman";
    const params = new HttpParams().set('salesman_name',salesman_name);
    return this.http.get(url,{params});
  }
  getProductInfo(product:string): Observable<any>{
    const url = "http://localhost:8080/commission/product_name";
    const params = new HttpParams().set('product_name',product);
    return this.http.get(url,{params});
  }
}

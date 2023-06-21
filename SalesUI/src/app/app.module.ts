import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadSalesComponent } from './upload-sales/upload-sales.component';
import { HttpClientModule } from '@angular/common/http';
import { CommissionReportComponent } from './commission-report/commission-report.component';
import { OrderByPipe } from './order-by.pipe';
import { ShowProductPopupComponent } from './show-product-popup/show-product-popup.component';
import { SalesmanPopupComponent } from './salesman-popup/salesman-popup.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    UploadSalesComponent,
    CommissionReportComponent,
    OrderByPipe,
    ShowProductPopupComponent,
    SalesmanPopupComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    MatButtonModule,
    BrowserAnimationsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[ShowProductPopupComponent],
})
export class AppModule { }

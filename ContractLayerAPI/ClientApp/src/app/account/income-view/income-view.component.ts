import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../config';
import { DialogService } from '../../dialog/dialog.service';
import { IncomeDetailsComponent } from '../income-details/income-details.component';
import { IncomeService } from './income.service';
import { ProductService } from '../../master/product-view/product.service';
import * as moment from 'moment';

@Component({
  selector: 'app-income-view',
  templateUrl: './income-view.component.html',
  styleUrls: ['./income-view.component.css']
})
export class IncomeViewComponent implements OnInit {

  onBtnClick1 = (param) => {
    alert('i am clicked');
    console.log (param);
}

  columnDefs = [
     
    {
      headerName: 'Edit', valueFormatter: () => { return 'Edit' }, 'width': 40,

      cellRenderer: (params) => {
        var newTH = document.createElement('div');
        newTH.innerHTML = '<i class="pi pi-pencil style="font-size:large;"></i>';
        newTH.onclick = () => {
          const ref = this.dialog.open(IncomeDetailsComponent, { data: params.data, modalConfig: { title: 'Add/Edit Income Details' },isEditable: true });
          ref.afterClosed.subscribe(result => {
            this.RefreshGrid();
          });
        };
        return newTH;
      },
    },
    {
      headerName: 'Delete', 'width': 40,

      cellRenderer: (params) => {
        var newTH = document.createElement('div');
        newTH.innerHTML = ' <i class="pi pi-trash" style="font-size: initial;"></i>';
        newTH.onclick = () => {
          this.delete(params.data);

        };
        return newTH;
      },
    },
    {
      headerName: 'Record No', headerCheckboxSelection: true,
      headerCheckboxSelectionFilteredOnly: true,
      checkboxSelection: true,
      field: 'RecordNo', 'width': 120
    },

    
    { headerName: 'Location', field: 'Location.LocationName', 'width': 140 },
    {
      headerName: 'Date ', field: 'Date', valueFormatter: this.dateFormatter, 'width': 120
    },
    {
      headerName: 'Type Of Income', field: 'Income.IncomeType', 'width': 130
    },
    {
      headerName: 'Title    ', field: 'Title', 'width': 130
    },
    { headerName: 'Payment Method    ', field: 'PaymentMethod', 'width': 140 },
    { headerName: 'Cheque No    ', field: 'ChequeNo', 'width': 120 },
    { headerName: 'Amount    ', field: 'Amount', 'width': 120 }
  ];

  rowData = [
   
  ];

  dateFormatter(params) {
    return moment(params.value).format('DD/MM/YYYY');
  }
    
  constructor(private router: Router, private http: HttpClient, private incomeService: IncomeService, public dialog: DialogService, public productService: ProductService) { }

  ngOnInit() {

    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };


    return this.http.get(APP_CONSTANT.INCOME_API.GETALL, httpOptions)
      .subscribe((income: any) => {
        this.rowData = income;
      });
  }

  exportAsXLSX(): void {
    this.productService.exportAsExcelFile(this.rowData, 'IncomeDetails');
  }

  redirectToAddNew() {
    const ref = this.dialog.open(IncomeDetailsComponent, { modalConfig: { title: 'Add/Edit Income Details' },isEditable: false });
    ref.afterClosed.subscribe(result => {
      // this.rowData.push(result); //TODO this should be implemented like this
      this.RefreshGrid();
    });
  }

  RefreshGrid = () => {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.get(APP_CONSTANT.INCOME_API.GETALL, httpOptions)
      .subscribe((income: any) => {
        this.rowData = income;
      });
  }

  delete(income) {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    if (confirm("Are you sure do you want to delete record?")) {
      return this.http.post(APP_CONSTANT.INCOME_API.DELETE, income, httpOptions)
        .subscribe((income) => {
          this.RefreshGrid();
        });
    }
  }
}


  



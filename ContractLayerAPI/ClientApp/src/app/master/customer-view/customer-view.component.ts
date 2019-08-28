import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../config';
import { CusotmerService } from './customer.service';
import { CustomerInfoComponent } from '../customer-info/customer-info.component';
import { DialogService} from '../../dialog/dialog.service';
import { ProductService } from '../product-view/product.service';


@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent implements OnInit {

  onBtnClick1 = (param) => {
    alert('i am clicked');
    console.log (param);
  }

  private gridApi;
  private gridColumnApi;

  columnDefs = [
     
    {
      headerName: 'Edit', valueFormatter: () => { return 'Edit' }, 'width': 50,

      cellRenderer: (params) => {
        var newTH = document.createElement('div');
        newTH.innerHTML = '<i class="pi pi-pencil" style="font-size: large;"></i>';
        newTH.onclick = () => {
          const ref = this.dialog.open(CustomerInfoComponent, { data: params.data, modalConfig: { title: 'Add/Edit Customer' },isEditable: true });
          ref.afterClosed.subscribe(result => {
            this.RefreshGrid();
          });
        };
        return newTH;
      },
    },

    {
      headerName: 'Delete', 'width': 50,

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
      headerName: 'Sr.No', headerCheckboxSelection: true,
      headerCheckboxSelectionFilteredOnly: true,
      checkboxSelection: true,
      field: 'CustomerId', 'width': 100,
      filter: "agTextColumnFilter",
      filterParams: { defaultOption: "startsWith" }
    },
    
    {
      headerName: 'Customer Name ', field: 'CustmerName', 'width': 180,
      filter: "agTextColumnFilter",
      filterParams: { defaultOption: "startsWith" }
    },
    {
      headerName: 'Mobile No', field: 'CustomerMobileNo', 'width': 130,
      filter: "agTextColumnFilter",
      filterParams: { defaultOption: "startsWith" }
    },
    {
      headerName: 'Address ', field: 'Address', 'width': 180,
      filter: "agTextColumnFilter",
      filterParams: { defaultOption: "startsWith" }
    },
    
    {
      headerName: 'Location           ', field: 'Location.LocationName',
      filter: "agTextColumnFilter",
      filterParams: { defaultOption: "startsWith" }
    },
    {
      headerName: 'State           ', field: 'State',
      filter: "agTextColumnFilter",
      filterParams: { defaultOption: "startsWith" }
    },
    {
      headerName: 'District           ', field: 'District',
      filter: "agTextColumnFilter",
      filterParams: { defaultOption: "startsWith" }
    },
    {
      headerName: 'Taluka           ', field: 'Taluka',
      filter: "agTextColumnFilter",
      filterParams: { defaultOption: "startsWith" }
    },
    {
      headerName: 'City           ', field: 'City',
      filter: "agTextColumnFilter",
      filterParams: { defaultOption: "startsWith" }
    },
    {
      headerName: 'Pincode           ', field: 'Pincode',
      filter: "agTextColumnFilter",
      filterParams: { defaultOption: "startsWith" }
    },
    { headerName: 'GstNo           ', field: 'GstNo' },
    { headerName: 'PanNo           ', field: 'PanNo' },
    { headerName: 'BankName           ', field: 'BankName' },
    { headerName: 'AccountNo           ', field: 'AccountNo' },
    { headerName: 'AccountHolderName           ', field: 'AccountHolderName' },
    { headerName: 'IfscCode           ', field: 'IfscCode' },
    { headerName: 'Branch Name           ', field: 'BranchName' }
  ];

  defaultColDef = {
    sortable: true,
    filter: true
  };

  rowData;

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.ngOnInit();
  }
    
  constructor(private router: Router, private http: HttpClient, private cusotmerService: CusotmerService, public dialog: DialogService, public productService: ProductService) { }

  ngOnInit() {

    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    
    //let customer = this.customerForm.value;

   this.cusotmerService.loadCustomers()
      .subscribe((customer:any) => {
        this.rowData = customer;
      });
  }

  exportAsXLSX(): void {
    this.productService.exportAsExcelFile(this.rowData, 'CustomerRecord');
  }

  redirectToAddNew() {
    const ref = this.dialog.open(CustomerInfoComponent, {modalConfig: { title: 'Add/Edit Customer' },isEditable: false });
    ref.afterClosed.subscribe(result => {
     // this.rowData.push(result); //TODO this should be implemented like this
      this.RefreshGrid();
    });     
  }

  RefreshGrid = () => {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.get(APP_CONSTANT.CUSOTMER_API.GETALL, httpOptions)
      .subscribe((customer: any) => {
        this.rowData = customer;
      });
  }
  delete(customer) {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    if (confirm("Are you sure do you want to delete record?")) {

      return this.http.post(APP_CONSTANT.CUSOTMER_API.DELETE, customer, httpOptions)
        .subscribe((customer) => {
          this.RefreshGrid();
        });
    }
  }

  }


  



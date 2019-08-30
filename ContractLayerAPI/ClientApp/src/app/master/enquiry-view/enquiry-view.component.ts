import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../config';
import { DialogService } from '../../dialog/dialog.service';
import { EnquiryMasterComponent } from '../enquiry-master/enquiry-master.component';
import { EnquiryService } from './enquiry.service';
import { ProductService } from '../product-view/product.service';


@Component({
  selector: 'app-enquiry-view',
  templateUrl: './enquiry-view.component.html',
  styleUrls: ['./enquiry-view.component.css']
})
export class EnquiryViewComponent implements OnInit {

  onBtnClick1 = (param) => {
    alert('i am clicked');
    console.log(param);
  }

  columnDefs = [
    
    {
      headerName: 'Edit', valueFormatter: () => { return 'Edit' }, 'width': 50,

      cellRenderer: (params) => {
        var newTH = document.createElement('div');
        newTH.innerHTML = '<i class="pi pi-pencil" style="font-size: large;"></i>';
        newTH.onclick = () => {
          const ref = this.dialog.open(EnquiryMasterComponent, { data: params.data, modalConfig: { title: 'Add/Edit Enquiry' },isEditable: true });
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
      headerName: 'RecordNo', headerCheckboxSelection: true,
      headerCheckboxSelectionFilteredOnly: true,
      checkboxSelection: true,
      field: 'RecordNo', 'width': 150
    },

    { headerName: 'Date ', field: 'Date', 'width': 100 },
    {
      headerName: 'Customer Name', field: 'CustomerName', 'width': 100
    },
    {
      headerName: 'Enquiry ', field: 'Enquiry', 'width': 100
    },
    {
      headerName: 'RequiredQty', field: 'RequiredQty', 'width': 100
    },
    { headerName: 'District ', field: 'District', 'width': 100 },

    { headerName: 'Taluka ', field: 'Taluka', 'width': 100 },
    { headerName: 'City', field: 'City', 'width': 100 },
    { headerName: 'Location', field: 'Location.LocationName' }

  ];

  rowData;

  constructor(private router: Router, private http: HttpClient, private enquiryService: EnquiryService, public dialog: DialogService, public productService: ProductService) { }

  ngOnInit() {

    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.get(APP_CONSTANT.ENQUIRY_API.GETALL, httpOptions)
      .subscribe((enquiry: any) => {
        this.rowData = enquiry;
      });
  }
  delete(enquiry) {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    //let customer = this.customerForm.value;
    
    if (confirm("Are you sure do you want to delete record?")) {
      return this.http.post(APP_CONSTANT.ENQUIRY_API.DELETE, enquiry, httpOptions)
        .subscribe((enquiry) => {
          this.RefreshGrid();
        });
    }
  }

  exportAsXLSX(): void {
    this.productService.exportAsExcelFile(this.rowData, 'EnquiryDetails');
  }

  redirectToAddNew() {
    const ref = this.dialog.open(EnquiryMasterComponent, { modalConfig: { title: 'Add/Edit Enquiry' },isEditable: false });
    ref.afterClosed.subscribe(result => {
      // this.rowData.push(result); //TODO this should be implemented like this
      this.RefreshGrid();
    });
  }

  RefreshGrid = () => {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.get(APP_CONSTANT.ENQUIRY_API.GETALL, httpOptions)
      .subscribe((enquiry: any) => {
        this.rowData = enquiry;
      });
  }

}








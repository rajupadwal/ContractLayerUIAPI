import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../config';
import { CusotmerService } from './customer.service';
import { CustomerInfoComponent } from '../customer-info/customer-info.component';
import { DialogService} from '../../dialog/dialog.service';


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
 

  columnDefs = [
    {

      headerName: 'Button Col 1', 'width':100,
      cellRenderer: 'buttonRenderer',
    },

    {
      headerName: 'CustomerId', headerCheckboxSelection: true,
      headerCheckboxSelectionFilteredOnly: true,
      checkboxSelection: true,
      field: 'CustomerId', 'width': 150

      
    },

    {
      headerName: 'Edit', valueFormatter: () => { return 'Edit' }, 'widht': 50,

      cellRenderer: (params) => {
        var newTH = document.createElement('div');
        newTH.innerHTML = '<i class="pi pi-pencil"></i>';
        newTH.onclick =  ()=> {
          const ref = this.dialog.open(CustomerInfoComponent, { data: params.data, modalConfig: {title:'Add/Edit Customer'} });
          ref.afterClosed.subscribe(result => {
            this.RefreshGrid();
          });     
        };
        return newTH;
      },
    },
    //{ headerName: 'CustomerId', field: 'CustomerId' },
    { headerName: 'CustmerName ', field: 'CustmerName', 'width': 150 },
    {
      headerName: 'CustomerMobileNo', field: 'CustomerMobileNo',' width': 150 },
    {
      headerName: 'Address ', field: 'Address' ,'width': 100},
    {
      headerName: 'PlantAddress    ', field: 'PlantAddress','width': 100 },
    { headerName: 'State           ', field: 'State' }
    
  ];

  rowData ;
    
  constructor(private router: Router, private http: HttpClient, private cusotmerService: CusotmerService, public dialog: DialogService) { }

  ngOnInit() {

    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    
    //let customer = this.customerForm.value;

    return this.http.get(APP_CONSTANT.CUSOTMER_API.GETALL,  httpOptions)
      .subscribe((customer:any) => {
        this.rowData = customer;
      });
  }
  redirectToAddNew() {
    const ref = this.dialog.open(CustomerInfoComponent, {modalConfig: { title: 'Add/Edit Customer' } });
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

  }


  



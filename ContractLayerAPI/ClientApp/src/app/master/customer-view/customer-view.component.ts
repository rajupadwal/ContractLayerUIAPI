import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../config';
import { CusotmerService } from './customer.service';



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

      headerName: 'Button Col 1',
      cellRenderer: 'buttonRenderer',
      cellRendererParams: {
        onClick: this.onBtnClick1.bind(this),
        label: 'Click 1'
      }
    },

    {
      headerName: 'CustomerId', headerCheckboxSelection: true,
      headerCheckboxSelectionFilteredOnly: true,
      checkboxSelection: true,
       field: 'CustomerId'
    },
    {
      headerName: 'Edit', valueFormatter: () => { return 'Edit' } 
    },
    //{ headerName: 'CustomerId', field: 'CustomerId' },
    { headerName: 'CustmerName ', field: 'custmerName' },
    { headerName: 'CustomerMobileNo', field: 'customerMobileNo' },
    { headerName: 'Address ', field: 'Address' },
    { headerName: 'PlantAddress    ', field: 'plantAddress' },
    { headerName: 'State           ', field: 'state' }
    
  ];

  rowData = [
   
  ];
    
  constructor(private router: Router, private http: HttpClient,private cusotmerService: CusotmerService) { }

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
    this.router.navigateByUrl('/master/Customerview/customerinfo');
  }
  }


  



import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../config';
import { PlanService } from './plan.service';
import { DialogService } from '../../dialog/dialog.service';
import { PlanMasterComponent } from '../plan-master/plan-master.component';
import { ProductService } from '../product-view/product.service';

@Component({
  selector: 'app-plan-view',
  templateUrl: './plan-view.component.html',
  styleUrls: ['./plan-view.component.css']
})
export class PlanViewComponent implements OnInit {
   
  onBtnClick1 = (param) => {
    alert('i am clicked');
    console.log (param);
  
}
 
  columnDefs = [

    {
      headerName: 'Edit', valueFormatter: () => { return 'Edit' }, 'width': 80,

      cellRenderer: (params) => {
        var newTH = document.createElement('div');
        newTH.innerHTML = '<i class="pi pi-pencil" style="font-size: large;"></i>';
        newTH.onclick = () => {
          const ref = this.dialog.open(PlanMasterComponent, { data: params.data, modalConfig: { title: 'Add/Edit Plan Master' },isEditable: true });
          ref.afterClosed.subscribe(result => {
            this.RefreshGrid();
          });
        };
        return newTH;
      },
    },
    {
      headerName: 'Delete', 'width': 80,

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
      headerName: 'Sr No', headerCheckboxSelection: true,
      headerCheckboxSelectionFilteredOnly: true,
      checkboxSelection: true,
      field: 'PlanId', 'width': 120
    },

    

    { headerName: 'Plan Name ', field: 'PlanName', 'width': 150 },
    {
      headerName: 'Chick Age In Days', field: 'ChickAgeInDays',' width': 130 },
    {
      headerName: 'Duration In Days ', field: 'DurationInDays' ,'width': 135},
    {
      headerName: 'No Of Chicks    ', field: 'NoOfChicks', 'width': 125},

    { headerName: 'Eggs Return           ', field: 'EggsReturn' , 'width': 110 },
    {
      headerName: 'Chicks Return Rate ', field: 'ChicksReturnRate', 'width': 150
    },
    {
      headerName: 'Amount    ', field: 'Amount', 'width': 120
    },
    { headerName: 'Admin Charges           ', field: 'AdminCharges' , 'width': 130 }
  ];

  rowData = [
   
  ];
    
  constructor(private router: Router, private http: HttpClient, private planservice: PlanService, public dialog: DialogService, public productService: ProductService) { }

  ngOnInit() {

    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    
    return this.http.get(APP_CONSTANT.PLAN_API.GETALL,  httpOptions)
      .subscribe((plan:any) => {
        this.rowData = plan;
      });
  }

  exportAsXLSX(): void {
    this.productService.exportAsExcelFile(this.rowData, 'PlanDetails');
  }

  redirectToAddNew() {
    const ref = this.dialog.open(PlanMasterComponent, { modalConfig: { title: 'Add/Edit Plan Master' },isEditable: false });
    ref.afterClosed.subscribe(result => {
      // this.rowData.push(result); //TODO this should be implemented like this
      this.RefreshGrid();
    });
  }

  RefreshGrid = () => {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.get(APP_CONSTANT.PLAN_API.GETALL, httpOptions)
      .subscribe((plan: any) => {
        this.rowData = plan;
      });
  }

  delete(plan) {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    //let customer = this.customerForm.value;
    if (confirm("Are you sure do you want to delete record?")) {

      return this.http.post(APP_CONSTANT.PLAN_API.DELETE, plan, httpOptions)
        .subscribe((plan) => {
          this.RefreshGrid();
        });
    }
  }
}



  



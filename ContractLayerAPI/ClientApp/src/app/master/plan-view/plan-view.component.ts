import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../config';
import { PlanService } from './plan.service';
import { DialogService } from '../../dialog/dialog.service';
import { PlanMasterComponent } from '../plan-master/plan-master.component';

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
      headerName: 'Button Col 1', 'width':100,
      cellRenderer: 'buttonRenderer',
      cellRendererParams: {
        onClick: this.onBtnClick1.bind(this),
        label: 'Click 1'
      }
    },

    {
      headerName: 'PlanId', headerCheckboxSelection: true,
      headerCheckboxSelectionFilteredOnly: true,
      checkboxSelection: true,
      field: 'PlanId', 'width': 150
    },

    {
      headerName: 'Edit', valueFormatter: () => { return 'Edit' }, 'width': 50,

      cellRenderer: (params) => {
        var newTH = document.createElement('div');
        newTH.innerHTML = '<i class="pi pi-pencil"></i>';
        newTH.onclick = () => {
          const ref = this.dialog.open(PlanMasterComponent, { data: params.data, modalConfig: { title: 'Add/Edit Plan Master' } });
          ref.afterClosed.subscribe(result => {
            this.RefreshGrid();
          });
        };
        return newTH;
      },
    },
    {
      headerName: 'Delete', 'width': 150,

      cellRenderer: (params) => {
        var newTH = document.createElement('div');
        newTH.innerHTML = 'Delete';
        newTH.className = "pi pi-times";
        newTH.onclick = () => {
          this.delete(params.data);

        };
        return newTH;
      },
    },

    { headerName: 'PlanName ', field: 'PlanName', 'width': 150 },
    {
      headerName: 'ChickAgeInDays', field: 'ChickAgeInDays',' width': 150 },
    {
      headerName: 'DurationInDays ', field: 'DurationInDays' ,'width': 100},
    {
      headerName: 'NoOfChicks    ', field: 'NoOfChicks', 'width': 100},

    { headerName: 'EggsReturn           ', field: 'EggsReturn' , 'width': 100 },
    {
      headerName: 'ChicksReturnRate ', field: 'ChicksReturnRate', 'width': 100
    },
    {
      headerName: 'Amount    ', field: 'Amount', 'width': 100
    },
    { headerName: 'AdminCharges           ', field: 'AdminCharges' , 'width': 100 }
  ];

  rowData = [
   
  ];
    
  constructor(private router: Router, private http: HttpClient, private planservice: PlanService, public dialog: DialogService) { }

  ngOnInit() {

    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    
    return this.http.get(APP_CONSTANT.PLAN_API.GETALL,  httpOptions)
      .subscribe((plan:any) => {
        this.rowData = plan;
      });
  }
  redirectToAddNew() {
    const ref = this.dialog.open(PlanMasterComponent, { modalConfig: { title: 'Add/Edit Plan Master' } });
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


    return this.http.post(APP_CONSTANT.PLAN_API.DELETE, plan, httpOptions)
      .subscribe((plan) => {
        this.RefreshGrid();
      });
  }
}



  


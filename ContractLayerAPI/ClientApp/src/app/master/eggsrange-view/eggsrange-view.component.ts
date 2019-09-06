import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../config';
import { DialogService } from '../../dialog/dialog.service';
import { EggsrangeMasterComponent } from '../eggsrange-master/eggsrange-master.component';
import { EggsrangeService } from './eggsrange.service';

@Component({
  selector: 'app-eggsrange-view',
  templateUrl: './eggsrange-view.component.html',
  styleUrls: ['./eggsrange-view.component.css']
})
export class EggsrangeViewComponent implements OnInit {

  onBtnClick1 = (param) => {
    alert('i am clicked');
    console.log (param);
  
}
 
  columnDefs = [
    
    {
      headerName: 'Edit', valueFormatter: () => { return 'Edit' }, 'width': 40,

      cellRenderer: (params) => {
        var newTH = document.createElement('div');
        newTH.innerHTML = '<i class="pi pi-pencil" style="font-size: large;"></i>';
        newTH.onclick = () => {
          const ref = this.dialog.open(EggsrangeMasterComponent, { data: params.data, modalConfig: { title: 'Add/Edit Eggs Range Master' },isEditable: true });
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
      headerName: 'Sr No', headerCheckboxSelection: true,
      headerCheckboxSelectionFilteredOnly: true,
      checkboxSelection: true,
      field: 'EggsRangeCode', 'width': 150
    },

    
    { headerName: 'Eggs Range From ', field: 'EggsRangeFrom', 'width': 180 },
    { headerName: 'Eggs Range To ', field: 'EggsRangeTo', 'width': 180 },
    { headerName: 'Eggs Rate ', field: 'EggsRate', 'width': 180 },
  ];

  rowData = [
   
  ];
    
  constructor(private router: Router, private http: HttpClient, private eggsrangeService: EggsrangeService, public dialog: DialogService) { }

  ngOnInit() {

    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    
    return this.http.get(APP_CONSTANT.EGGSRANGE_API.GETALL,  httpOptions)
      .subscribe((eggsrange:any) => {
        this.rowData = eggsrange;
      });
  }
  redirectToAddNew() {
    const ref = this.dialog.open(EggsrangeMasterComponent, { modalConfig: { title: 'Add/Edit Eggs Range Master' },isEditable: false });
    ref.afterClosed.subscribe(result => {
      // this.rowData.push(result); //TODO this should be implemented like this
      this.RefreshGrid();
    });
  }

  RefreshGrid = () => {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.get(APP_CONSTANT.EGGSRANGE_API.GETALL, httpOptions)
      .subscribe((eggsrange: any) => {
        this.rowData = eggsrange;
      });
  }
  delete(eggsrange) {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    if (confirm("Are you sure do you want to delete record?")) {

      return this.http.post(APP_CONSTANT.EGGSRANGE_API.DELETE, eggsrange, httpOptions)
        .subscribe((eggsrange) => {
          this.RefreshGrid();
        });
    }
  }
}


  



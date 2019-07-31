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
    //{
    //  headerName: 'Button Col 1', 'width':100,
    //  cellRenderer: 'buttonRenderer',
    //  cellRendererParams: {
    //    onClick: this.onBtnClick1.bind(this),
    //    label: 'Click 1'
    //  }
    //},

    {
      headerName: 'Edit', valueFormatter: () => { return 'Edit' }, 'width': 100,

      cellRenderer: (params) => {
        var newTH = document.createElement('div');
        newTH.innerHTML = '<i class="pi pi-pencil"></i>';
        newTH.onclick = () => {
          const ref = this.dialog.open(EggsrangeMasterComponent, { data: params.data, modalConfig: { title: 'Add/Edit Eggs Range Master' } });
          ref.afterClosed.subscribe(result => {
            this.RefreshGrid();
          });
        };
        return newTH;
      },
    },

    {
      headerName: 'Delete', 'width': 100,

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

    {
      headerName: 'Sr No', headerCheckboxSelection: true,
      headerCheckboxSelectionFilteredOnly: true,
      checkboxSelection: true,
      field: 'EggsRangeCode', 'width': 150
    },

    
    { headerName: 'EggsRangeFrom ', field: 'EggsRangeFrom', 'width': 150 },
    { headerName: 'EggsRangeTo ', field: 'EggsRangeTo', 'width': 150 },
    { headerName: 'EggsRate ', field: 'EggsRate', 'width': 150 },
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
    const ref = this.dialog.open(EggsrangeMasterComponent, { modalConfig: { title: 'Add/Edit Eggs Range Master' } });
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
    
    return this.http.post(APP_CONSTANT.EGGSRANGE_API.DELETE, eggsrange, httpOptions)
      .subscribe((eggsrange) => {
        this.RefreshGrid();
      });
  }
}


  



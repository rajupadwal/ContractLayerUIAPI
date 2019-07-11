import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../config';
import { ProfileService } from './profile.service';
import { DialogService } from '../../dialog/dialog.service';
import { ProfileMasterComponent } from '../profile-master/profile-master.component';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent implements OnInit {

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
      headerName: 'ProfileId', headerCheckboxSelection: true,
      headerCheckboxSelectionFilteredOnly: true,
      checkboxSelection: true,
      field: 'ProfileId', 'width': 150
    },

    {
      headerName: 'Edit', valueFormatter: () => { return 'Edit' }, 'width': 50,

      cellRenderer: (params) => {
        var newTH = document.createElement('div');
        newTH.innerHTML = '<i class="pi pi-pencil"></i>';
        newTH.onclick = () => {
          const ref = this.dialog.open(ProfileMasterComponent, { data: params.data, modalConfig: { title: 'Add/Edit Profile Master' } });
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
    { headerName: 'CompanyName ', field: 'CompanyName', 'width': 150 },
    {
      headerName: 'PhoneNo', field: 'PhoneNo',' width': 150 },
    {
      headerName: 'Address ', field: 'Address' ,'width': 100},
    {
      headerName: 'GSTNo    ', field: 'GstNo', 'width': 100},

    { headerName: 'EmailId           ', field: 'EmailId' , 'width': 100 },
    {
      headerName: 'MobileNo ', field: 'MobileNo', 'width': 100
    },
    {
      headerName: 'ThankYouNote    ', field: 'ThankYouNote', 'width': 100
    } 
  ];

  rowData = [
   
  ];
    
  constructor(private router: Router, private http: HttpClient, private profileService: ProfileService, public dialog: DialogService) { }

  ngOnInit() {

    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    
    return this.http.get(APP_CONSTANT.PROFILE_API.GETALL,  httpOptions)
      .subscribe((profile:any) => {
        this.rowData = profile;
      });
  }
  redirectToAddNew() {
    const ref = this.dialog.open(ProfileMasterComponent, { modalConfig: { title: 'Add/Edit Profile Master' } });
    ref.afterClosed.subscribe(result => {
      // this.rowData.push(result); //TODO this should be implemented like this
      this.RefreshGrid();
    });
  }

  RefreshGrid = () => {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.get(APP_CONSTANT.PROFILE_API.GETALL, httpOptions)
      .subscribe((profile: any) => {
        this.rowData = profile;
      });
  }

  delete(profile) {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post(APP_CONSTANT.PROFILE_API.DELETE, profile, httpOptions)
      .subscribe((profile) => {
        this.RefreshGrid();
      });
  }
}

  



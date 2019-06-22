import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  columnDefs
  rowData

  constructor(private router: Router) {
    console.log("Initializing case component");
  }


  redirectToAddcase() {
    this.router.navigateByUrl('/client/addclient');
  }
  ngOnInit() {

    this.columnDefs = [
      { headerName: 'Full Name', field: 'Full_Name' },
      { headerName: 'Company Name', field: 'Company_Name' },
      { headerName: 'Email Address', field: 'Email_Address' },
      { headerName: 'Phone Number', field: 'Phone_Number' },
      { teamMember: 'Action(s)', field: '' }

    ];

    this.rowData = [
      {
        Full_Name:'Mukund',
        Company_Name:'LTI',
        Email_Address:'Mukund.avhad@gmail.com ',
        Phone_Number:'8149484832',
      },
      {
        Full_Name: 'Sharad',
        Company_Name: 'IBM',
        Email_Address: 'Mukund.avhad@gmail.com ',
        Phone_Number: '8149484832',
      },
      {
        Full_Name: 'Pramod',
        Company_Name: 'Cognizent',
        Email_Address: 'Mukund.avhad@gmail.com ',
        Phone_Number: '8149484832',
      },
      {
        Full_Name: 'Gaurav',
        Company_Name: 'BHC',
        Email_Address: 'Mukund.avhad@gmail.com ',
        Phone_Number: '8149484832',
      }
    ]

  }

}

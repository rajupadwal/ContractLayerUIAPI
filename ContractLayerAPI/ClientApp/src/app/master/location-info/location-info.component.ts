import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../config';
import { map } from 'rxjs/operators';
import { Router } from "@angular/router";

@Component({
  selector: 'app-location-info',
  templateUrl: './location-info.component.html',
  styleUrls: ['./location-info.component.css']
})

export class LocationInfoComponent implements OnInit {

  locationForm: FormGroup;
  //resultList: any[] = [];
  //error: string = '';
  //success: string = '';
  constructor(private router: Router, private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.locationForm = this.formBuilder.group({

      LocationId: [0],
      LocationName: [],
      LocationCode: [],
      PinCode: [],
      Address: [],
      Remarks: [],
      ContactNo: [],
    });
  }

  savelocation() {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    //let customer = this.customerForm.value;
    let location = this.locationForm.value;

    return this.http.post(APP_CONSTANT.LOCATION_API.ADD, location, httpOptions)
      .subscribe((location) => {
        // login successful if there's a jwt token in the response
        if (location) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          this.router.navigateByUrl('/master/Locationview');
        }
        return location;


      });

  }

 

}

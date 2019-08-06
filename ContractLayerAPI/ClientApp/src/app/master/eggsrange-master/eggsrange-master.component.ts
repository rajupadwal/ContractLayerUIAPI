import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../config';
import { map } from 'rxjs/operators';
import { Router } from "@angular/router";
import { DialogConfig } from "src/app/dialog/dialog-config";
import { DialogRef } from '../../dialog/dialog-ref';

@Component({
  selector: 'app-eggsrange-master',
  templateUrl: './eggsrange-master.component.html',
  styleUrls: ['./eggsrange-master.component.css']
})

export class EggsrangeMasterComponent implements OnInit {

  eggsrangemasterForm: FormGroup;
  public isEditable: boolean = false;
  constructor(private router: Router, private formBuilder: FormBuilder, private http: HttpClient, private config: DialogConfig, public dialog: DialogRef) { }

  ngOnInit() {
    this.eggsrangemasterForm = this.formBuilder.group({
      EggsRangeCode: [0],
      EggsRangeFrom: [],
      EggsRangeTo: [],
      EggsRate: []
    });
    if (this.config.isEditable == true) {
      this.setDataForEdit();
    }
  }

  setDataForEdit = () => {
    this.isEditable = true;
    this.eggsrangemasterForm.setValue(this.config.data);
  }

  saveEggsrangeMaster() {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    let eggsrangemaster = this.eggsrangemasterForm.value;

    return this.http.post(this.isEditable ? APP_CONSTANT.EGGSRANGE_API.EDIT : APP_CONSTANT.EGGSRANGE_API.ADD, eggsrangemaster, httpOptions)
      .subscribe((eggsrangemaster) => {
        // login successful if there's a jwt token in the response
        if (eggsrangemaster) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          this.dialog.close(eggsrangemaster);
        }
        return eggsrangemaster;
      });
  }
}

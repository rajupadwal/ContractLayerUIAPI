import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../config';
import { map } from 'rxjs/operators';
import { Router } from "@angular/router";
import { DialogConfig } from "src/app/dialog/dialog-config";
import { DialogRef } from '../../dialog/dialog-ref';
import { SubTypeService } from '../subtype-view/subtype.service';
import { TypeService } from '../type-view/type.service';

@Component({
  selector: 'app-subtype-master',
  templateUrl: './subtype-master.component.html',
  styleUrls: ['./subtype-master.component.css']
})

export class SubtypeMasterComponent implements OnInit {


  subtypeForm: FormGroup;
  public typeList: [];
  public isEditable: boolean = false;

  constructor(private router: Router, private formBuilder: FormBuilder, private http: HttpClient, private config: DialogConfig, public dialog: DialogRef, private typeservice: TypeService) { }

  ngOnInit() {
    this.subtypeForm = this.formBuilder.group({

      SubTypeId: [0],
      Type: [{}],
      SubType: ["", Validators.required],
      TypeId: [],
      CreateDate: [],
      UpdateDate: []
    });
    if (this.config.isEditable == true) {
      this.getType(this.config.data.TypeId);
      this.setDataForEdit();
    }
  }

  getType(id) {
    this.typeservice.getTypedetailsByID(id).subscribe((type) => {
      this.subtypeForm.patchValue({ Type: type });
    });
  }

  searchType(event) {
    this.typeservice.searchTypeName(event.query).subscribe((data: any) => {
      this.typeList = data;
    });
  }

  setDataForEdit = () => {
    this.isEditable = true;
    this.subtypeForm.setValue(this.config.data);
  }

  saveSubTypeMaster() {

    if (!this.dialog.validateForm11(this.subtypeForm)) {
      return;
    }
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    let subtypedetails = this.subtypeForm.value;
    subtypedetails.TypeId = subtypedetails.Type.TypeId;
    delete subtypedetails.Type;
    return this.http.post(this.isEditable ? APP_CONSTANT.SUBTYPEMASTER_API.EDIT : APP_CONSTANT.SUBTYPEMASTER_API.ADD, subtypedetails, httpOptions)
      .subscribe((subtypedetails) => {
        if (subtypedetails) {
          this.dialog.close(subtypedetails);
        }
        return subtypedetails;
      });
  }
}






























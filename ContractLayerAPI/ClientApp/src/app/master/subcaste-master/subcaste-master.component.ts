import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../config';
import { map } from 'rxjs/operators';
import { Router } from "@angular/router";
import { DialogConfig } from "src/app/dialog/dialog-config";
import { DialogRef } from '../../dialog/dialog-ref';
import { CasteService } from '../caste-view/caste.service';

@Component({
  selector: 'app-subcaste-master',
  templateUrl: './subcaste-master.component.html',
  styleUrls: ['./subcaste-master.component.css']
})

export class SubcasteMasterComponent implements OnInit {

  subcasteForm: FormGroup;
  public casteList: [];
  public isEditable: boolean = false;

  constructor(private router: Router, private formBuilder: FormBuilder, private http: HttpClient, private config: DialogConfig, public dialog: DialogRef, private casteservice: CasteService) { }

  ngOnInit() {
    this.subcasteForm = this.formBuilder.group({

      SubCasteId: [0],
      Caste: [{}],
     SubCasteName: ["", Validators.required],
      CasteId: [],
      CreateDate: [],
      UpdateDate: []
    });
    if (this.config.isEditable == true) {
      this.getCaste(this.config.data.CasteId);
      this.setDataForEdit();
    }
  }

  getCaste(id) {
    this.casteservice.getCastedetailsByID(id).subscribe((caste) => {
      this.subcasteForm.patchValue({ Caste: caste });
    });
  }

  searchCaste(event) {
    this.casteservice.searchCasteName(event.query).subscribe((data: any) => {
      this.casteList = data;
    });
  }

  setDataForEdit = () => {
    this.isEditable = true;
    this.subcasteForm.setValue(this.config.data);
  }

  saveSubcasteMaster() {

    if (!this.dialog.validateForm11(this.subcasteForm)) {
      return;
    }

    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    let subcastedetails = this.subcasteForm.value;
    subcastedetails.CasteId = subcastedetails.Caste.CasteId;
    delete subcastedetails.Caste;
    return this.http.post(this.isEditable ? APP_CONSTANT.SUBCASTEMASTER_API.EDIT : APP_CONSTANT.SUBCASTEMASTER_API.ADD, subcastedetails, httpOptions)
      .subscribe((subcastedetails) => {
        if (subcastedetails) {
          this.dialog.close(subcastedetails);
        }
        return subcastedetails;
      });
  }
}

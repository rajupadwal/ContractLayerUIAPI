import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../config';
import { map } from 'rxjs/operators';
import { Router } from "@angular/router";
import { DialogConfig } from "src/app/dialog/dialog-config";
import { DialogRef } from '../../dialog/dialog-ref';
import { BankService } from '../bank-view/bank.service';
import { StateService } from '../state-view/state.service';
import { CasteService } from '../caste-view/caste.service';
import { TypeService } from '../type-view/type.service';
import { SubTypeService } from '../subtype-view/subtype.service';
import { SchemeService } from '../scheme-view/scheme.service';
import { SchemePaymentService } from '../schemepayment-view/schemepayment.service';
import { BeneficieryService } from '../beneficiery-view/beneficiery.service';
import * as moment from 'moment';

@Component({
  selector: 'app-beneficiery-details',
  templateUrl: './beneficiery-details.component.html',
  styleUrls: ['./beneficiery-details.component.css']
})

export class BeneficieryDetailsComponent implements OnInit {

  beneficieryForm: FormGroup;
  public stateList: [];
  public districtList: [];
  public talukaList: [];
  public casteList: [];
  public subcasteList: [];
  public typeList: [];
  public subtypeList: [];
  public schemeList: [];
  public paymentList: [];
  public bankList: [];
  public branchList: [];
  public isEditable: boolean = false;

  constructor(private router: Router, private formBuilder: FormBuilder, private http: HttpClient, private config: DialogConfig, public dialog: DialogRef,
    private stateservice: StateService, private bankService: BankService, private beneficieryservice: BeneficieryService,
    private casteservice: CasteService,  private typeservice: TypeService, private subtypeservice: SubTypeService,
    private bankservice: BankService, private schemeservice: SchemeService, private schemepaymentservice: SchemePaymentService) { }

  ngOnInit() {

    this.beneficieryForm = this.formBuilder.group({
      BeneficiaryId: [0],
      Name: ["", Validators.required],
      Address: ["", Validators.required],
      State: [{}],
      StateId: [],
      District: [{}],
      DistrictId: [],
      Taluka: [{}],
      TalukaId: [],
      Scheme: [{}],
      SchemeId: [],
      Caste: [{}],
      CasteId: [],
      Subcaste: [{}],
      SubCasteId: [],
      Type: [{}],
      TypeId: [],
      Subtype: [{}],
      SubTypeId: [],
      Payment: [{}],
      PaymentId: [],
      Bank: [{}],
      BankId: [],
      Branch: [{}],
      BranchId: [],  
      DateOfBirth: ["", Validators.required],
      AadharNo: ["", Validators.required],
      NameAsPerAadhar: ["", Validators.required],
      NoOfChild: ["", Validators.required],
      DisablePercentage: ["", Validators.required],
      BplNo: ["", Validators.required],
      SanctionOrderNo: ["", Validators.required],
      SanctionDate: ["", Validators.required],
      DueDate: ["", Validators.required],
      IfscCode: ["", Validators.required],
      AccountNo: ["", Validators.required],
      KhataNo: ["", Validators.required],
      CreateDate: [],
      UpdateDate: []

    });
    if (this.config.isEditable == true) {
      this.getState(this.config.data.StateId);
      this.setDataForEdit();
    }
  } 

  getState(id) {
    this.stateservice.getStatedetailsByID(id).subscribe((state) => {
      this.beneficieryForm.patchValue({ State: state });
    });
  }

  searchState(event) {
    this.stateservice.searchStateName(event.query).subscribe((data: any) => {
      this.stateList = data;
    });
  }

  searchDistrict(event) {
    let newDetails = this.beneficieryForm.value;
    newDetails.StateId = newDetails.State.StateId;

    this.beneficieryservice.getDistrictByStateID(newDetails)
      .subscribe((district: any) => {
        this.districtList = district;
        this.districtList.forEach((key: any, value: any) => {
          key.DistrictName = key.DistrictName;
        })
      });
  }

  searchTaluka(event) {
    let newDetails = this.beneficieryForm.value;
    newDetails.StateId = newDetails.State.StateId;
    newDetails.DistrictId = newDetails.District.DistrictId;

    this.beneficieryservice.getTalukaByStateDistrictID(newDetails)
      .subscribe((taluka: any) => {
        this.talukaList = taluka;
        this.talukaList.forEach((key: any, value: any) => {
          key.TalukaName = key.TalukaName;
        })
      });
  } 

  searchCaste(event) {
    this.casteservice.searchCasteName(event.query).subscribe((data: any) => {
      this.casteList = data;
    });
  }

  searchSubcaste(event) {
    let newDetails = this.beneficieryForm.value;
    newDetails.CasteId = newDetails.Caste.CasteId;

    this.beneficieryservice.getSubCasteByCasteID(newDetails)
      .subscribe((subcaste: any) => {
        this.subcasteList = subcaste;
        this.subcasteList.forEach((key: any, value: any) => {
          key.SubCasteName = key.SubCasteName;
        })
      });
  }

  searchType(event) {
    this.typeservice.searchTypeName(event.query).subscribe((data: any) => {
      this.typeList = data;
    });
  }

  searchSubtype(event) {
    let newDetails = this.beneficieryForm.value;
    newDetails.TypeId = newDetails.Type.TypeId;

    this.beneficieryservice.getSubTypeByTypeID(newDetails)
      .subscribe((subtype: any) => {
        this.subtypeList = subtype;
        this.subtypeList.forEach((key: any, value: any) => {
          key.SubType = key.SubType;
        })
      });
  }

  searchBank(event) {
    this.bankservice.searchBankName(event.query).subscribe((data: any) => {
      this.bankList = data;
    });
  }

  searchBranch(event) {
    let newDetails = this.beneficieryForm.value;
    newDetails.BankId = newDetails.Bank.BankId;

    this.beneficieryservice.geBranchByBankID(newDetails)
      .subscribe((branch: any) => {
        this.branchList = branch;
        this.branchList.forEach((key: any, value: any) => {
          key.BranchName = key.BranchName;
        })
      });
  }

  onSelectBranch = (value) => {
    let newDetails = this.beneficieryForm.value;

    this.beneficieryForm.patchValue({ IfscCode: newDetails.Branch.IfscCode });
  };

  searchScheme(event) {
    this.schemeservice.searchScheme(event.query).subscribe((data: any) => {
      this.schemeList = data;
    });
  }

  onSelectScheme = (value) => {
    let newDetails = this.beneficieryForm.value;

    this.beneficieryForm.patchValue({ SanctionOrderNo: newDetails.Scheme.SanctionOrderNo, SanctionDate: moment(newDetails.Scheme.SanctionDate).toDate(), DueDate: moment(newDetails.Scheme.DueDate).toDate()});
  };

  searchPayment(event) {
    this.schemepaymentservice.searchSchemePayment(event.query).subscribe((data: any) => {
      this.paymentList = data;
    });
  }

  setDataForEdit = () => {
    this.isEditable = true;
    let beneficieryForm = this.config.data;
    beneficieryForm.DateOfBirth = moment(this.config.data.DateOfBirth).toDate();
    beneficieryForm.SanctionDate = moment(this.config.data.SanctionDate).toDate();
    beneficieryForm.DueDate = moment(this.config.data.DueDate).toDate();
    this.beneficieryForm.setValue(this.config.data);
  }

  saveBeneficiery() {
    if (!this.dialog.validateForm(this.beneficieryForm)) {
      return;
    }

    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    let beneficierydetails = this.beneficieryForm.value;

    beneficierydetails.StateId = beneficierydetails.State.StateId;
    beneficierydetails.DistrictId= beneficierydetails.District.DistrictId;
    beneficierydetails.TalukaId=beneficierydetails.Taluka.TalukaId;
    beneficierydetails.CasteId=beneficierydetails.Caste.CasteId;
    beneficierydetails.SubCasteId=beneficierydetails.Subcaste.SubCasteId;
    beneficierydetails.TypeId=beneficierydetails.Type.TypeId;
    beneficierydetails.SubTypeId=beneficierydetails.Subtype.SubTypeId;
    beneficierydetails.BankId=beneficierydetails.Bank.BankId;
    beneficierydetails.BranchId=beneficierydetails.Branch.BranchId;
    beneficierydetails.SchemeId=beneficierydetails.Scheme.SchemeId;
    beneficierydetails.PaymentId = beneficierydetails.Payment.SrNo;

    delete beneficierydetails.State;
    delete beneficierydetails.District;
    delete beneficierydetails.Taluka;
    delete beneficierydetails.Caste;
    delete beneficierydetails.Subcaste;
    delete beneficierydetails.Type;
    delete beneficierydetails.Subtype;
    delete beneficierydetails.Bank;
    delete beneficierydetails.Branch;
    delete beneficierydetails.Scheme;
    delete beneficierydetails.Payment;

    return this.http.post(this.isEditable ? APP_CONSTANT.BENEFICIERYMASTER_API.EDIT : APP_CONSTANT.BENEFICIERYMASTER_API.ADD, beneficierydetails, httpOptions)
      .subscribe((beneficierydetails) => {
        if (beneficierydetails) {
          this.dialog.close(beneficierydetails);
        }
        return beneficierydetails;
      });
  }
}

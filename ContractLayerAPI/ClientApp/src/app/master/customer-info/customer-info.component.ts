import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from "@angular/forms";
@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent implements OnInit {
  addDPRForm: FormGroup;
  resultList: any[] = [];
  error: string = '';
  success: string = '';
  constructor(private formBuilder: FormBuilder ) { }

  ngOnInit() {
    let dt = new Date();
    
    //this.dprService.setDPRItemGroupDetails(); 

    this.addDPRForm = this.formBuilder.group({
      Dprid: [{ value: 0, disabled: true }],
      ClientItemGroupDetailId: [{}, Validators.required],
      ProjectItemGroupDetailId: [{}, Validators.required],
      DprcontractorItemGroupDetailId: [{}, Validators.required],
      WorkNameItemGroupDetailId: [{}, Validators.required],
      TargetDate: [dt, Validators.required],
      Dprdate: [dt, Validators.required],
      DprassociateNameItemGroupDetailId: [{}, Validators.required],
     
      KtrepresentativeItemGroupDetailId: [{}, Validators.required],
      ReportText: ['', Validators.required],
    });
  }
  

  public Search(groupName:string,$event) {
    //this.resultList = this.dprService.itemGroupDetails.filter(x => x.GroupName.toUpperCase() == groupName.toUpperCase() && x.ItemName.toUpperCase().indexOf($event.query.toUpperCase())>=0);
  }
  onSubmit = () => {
    if (this.addDPRForm.status == "INVALID") {
      return;
    }
    this.saveChanges();
  }

  public saveChanges() {
   let formToSubmit={}
   Object.keys(this.addDPRForm.controls).forEach(key => {
     let value = this.addDPRForm.get(key).value["ItemDetailId"] ? this.addDPRForm.get(key).value["ItemDetailId"] : this.addDPRForm.get(key).value;
     formToSubmit[key] = value
   });
  //  this.dprService.saveDPRDetails(JSON.stringify(formToSubmit)).subscribe((response) => {

  //    this.success = 'Record Saved Sucessfully !';
  //    this.displayMessage();
  //  },
  //    (error) => {

  //      this.error = "Get an Error while Saving the DPR..Please try again!";
  //      this.displayMessage();
  //    });
  }
  public clear = () => {
    this.ngOnInit();
    this.addDPRForm.markAsPristine();
  }

  displayMessage() {
    setTimeout(() => {
      this.error = '';
      this.success = '';
    }, 5000)
  }

}

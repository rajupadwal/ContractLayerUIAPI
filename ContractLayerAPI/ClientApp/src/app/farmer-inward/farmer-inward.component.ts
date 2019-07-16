import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
@Component({
  selector: 'app-farmer-inward',
  templateUrl: './farmer-inward.component.html',
  styleUrls: ['./farmer-inward.component.css']
})
export class FarmerInwardComponent implements OnInit {
  customerForm: FormGroup;
  inwardItem:any = [];
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {


    this.customerForm = this.formBuilder.group({
      firstName: []
    });
  }


  addNewItem = () => {
    if(this.inwardItem.length>2)
    this.inwardItem.push({product:'3rd Item',standardPack:'',quantity:0})
    this.inwardItem.push({ product: '', standardPack: '', quantity: 0 })

  }

  removeItem = () => {
    //delete
    //this.inwardItem
  }
  saveItems = () => {


    this.inwardItem.forEach(obj => {
      console.log(obj.product);
    });



  }

  
}

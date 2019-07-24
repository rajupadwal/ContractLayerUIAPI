
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { APP_CONSTANT } from '../../../config';


@Injectable({
providedIn :'root'
})
export class ProductService {
  
  constructor(private http: HttpClient) { }
  loadProducts = () => {
    return this.http.get(APP_CONSTANT.PRODUCT_API.GETALL);
  }

  loadUnits = () => {
    return this.http.get(APP_CONSTANT.PRODUCT_UNIT_API.GETALL);
  }


  saveFarmerInwards(master) {

    this.http.post(APP_CONSTANT.PRODUCT_FARMER_INWARDS_API.SAVEFARMERINWARDMASTER,  master)
      .subscribe((response) => {
        console.log("Inward master added successfully");
      });


    //this.http.post(APP_CONSTANT.PRODUCT_FARMER_INWARDS_API.SAVEFARMERINWARDSDETAILS, details)
    //  .subscribe((response) => {
    //    console.log("Inward master added successfully");
    //  });
  }


  getAllFarmerinwardmastedetails = (master) => {
    return this.http.post(APP_CONSTANT.PRODUCT_FARMER_INWARDS_API.GETALLFARMERINWARDMASTEDETAILS, master);
  }

  getAllFarmerchickeggbilldetails = (master) => {
    return this.http.post(APP_CONSTANT.PRODUCT_FARMER_CHICKEGGBILL_API.GETALLFARMERCHICKEGGBILLDETAILS, master);
  }

  saveFarmerChickEggBill(master) {

    this.http.post(APP_CONSTANT.PRODUCT_FARMER_CHICKEGGBILL_API.SAVEFARMERCHICKEGGBILLMASTER, master)
      .subscribe((response) => {
        console.log("Bill added successfully");
      });


    //this.http.post(APP_CONSTANT.PRODUCT_FARMER_INWARDS_API.SAVEFARMERINWARDSDETAILS, details)
    //  .subscribe((response) => {
    //    console.log("Inward master added successfully");
    //  });
  }
  
}



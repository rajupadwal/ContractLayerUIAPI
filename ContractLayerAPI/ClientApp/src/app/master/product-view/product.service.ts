
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

  
  getProductByID(id) {
    return this.http.post(APP_CONSTANT.PRODUCT_API.GETByID, id);
  }

  getUnitByID(id) {
    return this.http.post(APP_CONSTANT.PRODUCT_UNIT_API.GETByID, id);
  }

  searchUnit(searchString) {
    return this.http.post(APP_CONSTANT.PRODUCT_UNIT_API.SEARCH_UNITS, JSON.stringify(searchString));
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

  //Farmer Outward Details

  saveFarmerOutwards(master) {

    this.http.post(APP_CONSTANT.PRODUCT_FARMER_OUTWARDS_API.SAVEFARMEROUTWARDMASTER, master)
      .subscribe((response) => {
        console.log("Outward master added successfully");
      });

  }

  getAllFarmeroutwardmastedetails = (master) => {
    return this.http.post(APP_CONSTANT.PRODUCT_FARMER_OUTWARDS_API.GETALLFARMEROUTWARDMASTEDETAILS, master);
  }


  //Purchase Bill Details

  savePurchaseBills(master) {

    this.http.post(APP_CONSTANT.PRODUCT_PURCHASE_BILLS_API.SAVEPURCHASEBILLMASTER, master)
      .subscribe((response) => {
        console.log("Purchase Bill master added successfully");
      });

  }

  getAllPurchasebillmastedetails = (master) => {
    return this.http.post(APP_CONSTANT.PRODUCT_PURCHASE_BILLS_API.GETALLPURCHASEBILLMASTEDETAILS, master);
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




import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { APP_CONSTANT } from '../../../config';
import { Observable } from "rxjs";


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

  getProductTypeByProductID(master) {
    return this.http.post(APP_CONSTANT.PRODUCT_API.GETTYPEBYPRODUCTID, master);
  }

  getUnitByID(id) {
    return this.http.post(APP_CONSTANT.PRODUCT_UNIT_API.GETByID, id);
  }

  searchUnit(searchString) {
    return this.http.post(APP_CONSTANT.PRODUCT_UNIT_API.SEARCH_UNITS, JSON.stringify(searchString));
  }

  saveFarmerInwards(master): Observable<any> {
   return this.http.post(APP_CONSTANT.PRODUCT_FARMER_INWARDS_API.SAVEFARMERINWARDMASTER,  master)
      .pipe((response:any) => {
        return response;
      });
  }


  getAllFarmerinwardmastedetails = (master) => {
    return this.http.post(APP_CONSTANT.PRODUCT_FARMER_INWARDS_API.GETALLFARMERINWARDMASTEDETAILS, master);
  }

  //Farmer Outward Details

  saveFarmerOutwards(master): Observable<any> {

   return this.http.post(APP_CONSTANT.PRODUCT_FARMER_OUTWARDS_API.SAVEFARMEROUTWARDMASTER, master)
      .pipe((response: any) => {
        return response;
      });

  }

  getAllFarmeroutwardmastedetails = (master) => {
    return this.http.post(APP_CONSTANT.PRODUCT_FARMER_OUTWARDS_API.GETALLFARMEROUTWARDMASTEDETAILS, master);
  }


  //Purchase Bill Details

  savePurchaseBills(master): Observable<any>  {

    return this.http.post(APP_CONSTANT.PRODUCT_PURCHASE_BILLS_API.SAVEPURCHASEBILLMASTER, master)
     .pipe((response: any) => {
       return response;
      });

  }

  getAllPurchasebillmastedetails = (master) => {
    return this.http.post(APP_CONSTANT.PRODUCT_PURCHASE_BILLS_API.GETALLPURCHASEBILLMASTEDETAILS, master);
  }

  getAllFarmerchickeggbilldetails = (master) => {
    return this.http.post(APP_CONSTANT.PRODUCT_FARMER_CHICKEGGBILL_API.GETALLFARMERCHICKEGGBILLDETAILS, master);
  }

  saveFarmerChickEggBill(master): Observable<any> {

    return this.http.post(APP_CONSTANT.PRODUCT_FARMER_CHICKEGGBILL_API.SAVEFARMERCHICKEGGBILLMASTER, master)
      .pipe((response: any) => {
        return response;
      });


    //this.http.post(APP_CONSTANT.PRODUCT_FARMER_INWARDS_API.SAVEFARMERINWARDSDETAILS, details)
    //  .subscribe((response) => {
    //    console.log("Inward master added successfully");
    //  });
  }
  
}



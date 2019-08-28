import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PrintService {
  isPrinting = false;
  documentData: any;
  constructor(private router: Router) { }

  printDocument(documentName: string, documentData: any) {
    this.isPrinting = true;
    this.documentData = documentData;
    switch (documentName) {
      case 'invoice': {
        this.router.navigate(['/',
          {
            outlets: {
              'print': ['print', documentName, "101,102"]
            }
          }]);
        break;
      }
      case 'PurchaseBill': {
        this.router.navigate(['/',
          {
            outlets: {
              'print': ['print', documentName, ""]
            }
          }]);
        break;
      }
      case 'CreateSale': {
        this.router.navigate(['/',
          {
            outlets: {
              'print': ['print', documentName, ""]
            }
          }]);
        break;
      }

      case 'CustomerReceipt': {
        this.router.navigate(['/',
          {
            outlets: {
              'print': ['print', documentName, ""]
            }
          }]);
        break;
      }

      case 'SupplierReceipt': {
        this.router.navigate(['/',
          {
            outlets: {
              'print': ['print', documentName, ""]
            }
          }]);
        break;
      }

      case 'FarmerInward': {
        this.router.navigate(['/',
          {
            outlets: {
              'print': ['print', documentName, ""]
            }
          }]);
        break;
      }

      case 'FarmerOutward': {
        this.router.navigate(['/',
          {
            outlets: {
              'print': ['print', documentName, ""]
            }
          }]);
        break;
      }

    }
  }



  onDataReady() {
    setTimeout(() => {
      window.print();
      this.isPrinting = false;
      this.router.navigate([{ outlets: { print: null } }]);
    });
  }
}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import { SimpleLayoutComponent } from './layouts/simple-layout.component';
// Layouts
import { PrintLayoutComponent } from "./printing/print-layout/print-layout.component";
import { InvoiceComponent } from "./printing/invoice/invoice.component";
import { AppMainComponent } from "./app.main.component";

import { PurchaseBillPrintComponent} from './printing/purchaseBillPrint/purchase-bill.print.component'
import { CreateSalePrintComponent } from './printing/createSalePrint/create-sale.print.component';
import { CustomerReceiptPrintComponent } from './printing/customerReceiptPrint/customer-receipt.print.component';
import { SupplierReceiptPrintComponent } from './printing/supplierReceiptPrint/supplier-receipt.print.component';
import { FarmerInwardPrintComponent } from './printing/farmerInwardPrint/farmer-inward.print.component';
import { FarmerOutwardPrintComponent } from './printing/farmerOutwardPrint/farmer-outward.print.component';
import { SupplierLedgerPrintComponent } from './printing/supplierLedgerPrint/supplier-ledger.print.component';
import { CustomerLedgerPrintComponent } from './printing/customerLedgerPrint/customer-ledger.print.component';

import {AuthGuard } from './auth.guard';
import { DatewiseFarmerInwardPrintComponent } from './printing/datewiseFarmerInwardPrint/datewise-farmerinward.print.component';
import { DatewiseFarmerOutwardPrintComponent } from './printing/datewiseFarmerOutwardPrint/datewise-farmeroutward.print.component';
import { DatewiseExpencesPrintComponent } from './printing/datewiseExpencesPrint/datewise-expences.print.component';
import { PurchaseBillReturnPrintComponent } from './printing/purchaseBillReturnPrint/purchase-billreturn.print.component';
import { DatewisePurchaseReturnPrintComponent } from './printing/datewisePurchaseReturnPrint/datewise-purchasereturn.print.component';
export const routes: Routes = [

  

  {
    path: 'print',
    outlet: 'print',
    component: PrintLayoutComponent,
    children: [
      { path: 'invoice/:invoiceIds', component: InvoiceComponent},
      { path: 'PurchaseBill/:purchaseDetails', component: PurchaseBillPrintComponent },
      { path: 'CreateSale/:createSales', component: CreateSalePrintComponent },
      { path: 'CustomerReceipt/:customerReceipts', component: CustomerReceiptPrintComponent },
      { path: 'SupplierReceipt/:supplierReceipts', component: SupplierReceiptPrintComponent },
      { path: 'FarmerInward/:farmerInwards', component: FarmerInwardPrintComponent },
      { path: 'FarmerOutward/:farmerOutwards', component: FarmerOutwardPrintComponent },
      { path: 'SupplierLedger/:supplierLedgers', component: SupplierLedgerPrintComponent },
      { path: 'CustomerLedger/:customerLedgers', component: CustomerLedgerPrintComponent },
      { path: 'DatewiseFarmerInward/:datewiseFarmerInwards', component: DatewiseFarmerInwardPrintComponent },
      { path: 'DatewiseFarmerOutward/:datewiseFarmerOutwards', component: DatewiseFarmerOutwardPrintComponent },
      { path: 'DatewiseExpences/:datewiseExpences', component: DatewiseExpencesPrintComponent },
      { path: 'PurchaseBillReturn/:purchaseBillReturns', component: PurchaseBillReturnPrintComponent },
      { path: 'DatewisePurchaseReturn/:datewisePurchaseReturns', component: DatewisePurchaseReturnPrintComponent },
    ]
  },
  {
    path: '',
    component: SimpleLayoutComponent,
    data: {
      title: 'Pages'
    },
    children: [
      {
        path: '',
        loadChildren: './pages/pages.module#PagesModule',
      }
    ]
  },

  {
    path: 'dashboard',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
       
      {
        path: 'Farmeroutwardview',
        loadChildren: './farmeroutward-view/farmeroutward.module#FarmeroutwardViewModule'
         ,canActivate: [AuthGuard] 
      },
       
      {
        path: 'Purchasebillreturnview',
        loadChildren: './purchasebillreturn-view/purchasebillreturn.module#PurchasebillreturnModule'
        , canActivate: [AuthGuard] 
      },
      {
        path: 'master',
        component: SimpleLayoutComponent,
        data: {
          title: 'Master'
        },
        children: [
          {
            path: 'Enquiryview',
            loadChildren: './master/enquiry-view/enquiry.view.module#EnquiryViewModule'
            , canActivate: [AuthGuard] 
          },

          {
            path: 'Customerview',
            loadChildren: './master/customer-view/customer.module#CusotmerModule'
            , canActivate: [AuthGuard] 
          },

          {
            path: 'Supplierview',
            loadChildren: './master/supplier-view/supplier.view.module#SupplierViewModule'
            , canActivate: [AuthGuard] 
          },

          {
            path: 'Locationview',
            loadChildren: './master/location-view/location.view.module#LocationViewModule'
            , canActivate: [AuthGuard] 
          },

          {
            path: 'Planview',
            loadChildren: './master/plan-view/plan.view.module#PlanViewModule'
            , canActivate: [AuthGuard] 
          },

          {
            path: 'Productdescview',
            loadChildren: './master/productdesc-view/productdesc.view.module#ProductdescViewModule'
            , canActivate: [AuthGuard] 
          },

          {
            path: 'Profileview',
            loadChildren: './master/profile-view/profile.view.module#ProfileViewModule'
            , canActivate: [AuthGuard] 
          },
          
          {
            path: 'Employeeview',
            loadChildren: './master/employee-view/employee.view.module#EmployeeViewModule'
            , canActivate: [AuthGuard] 
          },
          
          {
            path: 'Productview',
            loadChildren: './master/product-view/product.view.module#ProductViewModule'
            , canActivate: [AuthGuard] 
          },
           
          {
            path: 'Expencetypeview',
            loadChildren: './master/expencetype-view/expencetype.view.module#ExpencetypeViewModule'
            , canActivate: [AuthGuard] 
          },
           
          {
            path: 'Eggsrangedetails',
            loadChildren: './master/eggsrange-view/eggsrange.view.module#EggsrangeViewModule'
            , canActivate: [AuthGuard] 
          },

          {
            path: 'Bankview',
            loadChildren: './master/bank-view/bank.view.module#BankViewModule'
            , canActivate: [AuthGuard]
          },
          {
            path: 'Branchview',
            loadChildren: './master/branch-view/branch.view.module#BranchViewModule'
            , canActivate: [AuthGuard]
          },
          {
            path: 'Typeview',
            loadChildren: './master/type-view/type.view.module#TypeViewModule'
            , canActivate: [AuthGuard]
          },
          {
            path: 'Subtypeview',
            loadChildren: './master/subtype-view/subtype.view.module#SubtypeViewModule'
            , canActivate: [AuthGuard]
          },
          {
            path: 'Casteview',
            loadChildren: './master/caste-view/caste.view.module#CasteViewModule'
            , canActivate: [AuthGuard]
          },
          {
            path: 'Subcasteview',
            loadChildren: './master/subcaste-view/subcaste.view.module#SubcasteViewModule'
            , canActivate: [AuthGuard]
          },
          {
            path: 'Stateview',
            loadChildren: './master/state-view/state.view.module#StateViewModule'
            , canActivate: [AuthGuard]
          },
          {
            path: 'Districtview',
            loadChildren: './master/district-view/district.view.module#DistrictViewModule'
            , canActivate: [AuthGuard]
          },
          {
            path: 'Talukaview',
            loadChildren: './master/taluka-view/taluka.view.module#TalukaViewModule'
            , canActivate: [AuthGuard]
          },
          {
            path: 'Schemeview',
            loadChildren: './master/scheme-view/scheme.view.module#SchemeViewModule'
            , canActivate: [AuthGuard]
          },
          {
            path: 'Schemepaymentview',
            loadChildren: './master/schemepayment-view/schemepayment.view.module#SchemePaymentViewModule'
            , canActivate: [AuthGuard]
          },

          {
            path: 'Beneficieryview',
            loadChildren: './master/beneficiery-view/beneficiery.view.module#BeneficieryViewModule'
            , canActivate: [AuthGuard]
          },
        ]
      },

      {
        path: 'bookingmaster',
        component: SimpleLayoutComponent,
        data: {
          title: 'Booking'
        },
        children: [

          {
            path: 'Bookingview',
            loadChildren: './bookingmaster/booking-view/booking.view.module#BookingViewModule'
            , canActivate: [AuthGuard] 
          },
          {
            path: 'Bookingcancelview',
            loadChildren: './bookingmaster/bookingcancel-view/bookingcancel.view.module#BookingcancelViewModule'
            , canActivate: [AuthGuard] 
          },
          
        ]
      },
      {
        path: 'purchase',
        component: SimpleLayoutComponent,
        data: {
          title: 'Purchase'
        },
        children: [

          {
            path: 'Purchasebillview',
            loadChildren: './purchase/purchasebill-view/purchasebill.module#PurchasebillModule'
            , canActivate: [AuthGuard] 
          },
          {
            path: 'Farmerinwardview',
            loadChildren: './purchase/farmerinward-view/farmerinward.module#FarmerinwardModule'
            , canActivate: [AuthGuard] 
          },
          {
            path: 'Farmeroutwardview',
            loadChildren: './farmeroutward-view/farmeroutward.module#FarmeroutwardViewModule'
            , canActivate: [AuthGuard] 
          },

        ]
      },

      {
        path: 'sale',
        component: SimpleLayoutComponent,
        data: {
          title: 'Sales'
        },
        children: [

          {
            path: 'Salechickeggbillview',
            loadChildren: './sale/farmerchickeggsbill-view/farmerchickeggsbill.view.module#FarmerchickeggbillModule'
            , canActivate: [AuthGuard] 
          },
        ]
      },

      {
        path: 'report',
        component: SimpleLayoutComponent,
        data: {
          title: 'Reports'
        },
        children: [

          {
            path: 'Stockdetailview',
            loadChildren: './reports/stockdetail-view/stockdetail.module#StockdetailModule'
            , canActivate: [AuthGuard] 
          },

          {
            path: 'Customerbookingoutstandingview',
            loadChildren: './reports/customerbookingoutstanding-view/customerbookingoutstanding.module#CustomerbookingoutstandingModule'
            , canActivate: [AuthGuard] 
          },

          {
            path: 'Customerbilloutstandingview',
            loadChildren: './reports/customerbilloutstanding-view/customerbilloutstanding.module#CustomerbilloutstandingModule'
            , canActivate: [AuthGuard] 
          },

          {
            path: 'Supplierbilloutstandingview',
            loadChildren: './reports/supplierbilloutstanding-view/supplierbilloutstanding.module#SupplierbilloutstandingModule'
          },

          {
            path: 'Supplierledgerview',
            loadChildren: './reports/supplierledger-view/supplierledger.module#SupplierledgerModule'
          },

          {
            path: 'Customerledgerview',
            loadChildren: './reports/customerledger-view/customerledger.module#CustomerledgerModule'
          },

          {
            path: 'Datewiseinwardview',
            loadChildren: './reports/datewiseinward-view/datewiseinward.module#DatewiseinwardModule'
          },
          {
            path: 'Datewiseoutwardview',
            loadChildren: './reports/datewiseoutward-view/datewiseoutward.module#DatewiseoutwardModule'
          },
          {
            path: 'Datewiseexpencesview',
            loadChildren: './reports/datewiseexpences-view/datewiseexpences.module#DatewiseexpencesModule'
          },
          {
            path: 'Datewisepurchasereturnview',
            loadChildren: './reports/datewisepurchasereturn-view/datewisepurchasereturn.module#DatewisepurchasereturnModule'
          },
        ]
      },

      {
        path: 'account',
        component: SimpleLayoutComponent,
        data: {
          title: 'Account'
        },
        children: [

          {
            path: 'Salesreceiptview',
            loadChildren: './account/salesreceipt-view/salesreceipt.view.module#SalesReceiptViewModule'
            , canActivate: [AuthGuard] 
          },
          {
            path: 'Purchasepaymentview',
            loadChildren: './account/purchasepayment-view/purchasepayment.view.module#PurchasePaymentViewModule'
            , canActivate: [AuthGuard] 
          },
          {
            path: 'Purchasereturnreceiptview',
            loadChildren: './account/purchasereturnreceipt-view/purchasereturnreceipt.view.module#PurchasereturnReceiptViewModule'
            , canActivate: [AuthGuard] 
          },
          {
            path: 'Officeexpencedetails',
            loadChildren: './account/expencedetails-view/expencedetails.view.module#ExpencedetailsViewModule'
            , canActivate: [AuthGuard] 
          },
          {
            path: 'Employeeadvanceview',
            loadChildren: './account/employeeadvance-view/employeeadvance.view.module#EmployeeadvanceViewModule'
            , canActivate: [AuthGuard] 
          },
          {
            path: 'Incomedetails',
            loadChildren: './account/income-view/income.view.module#IncomeViewModule'
            , canActivate: [AuthGuard] 
          },
        ]
      },
      

      //{
      //  path: 'cases',
      //  loadChildren: './cases/cases.module#CasesModule'
      //},
      //{
      //  path: 'team',
      //  loadChildren: './team/team.module#TeamModule'
      //}, {
      //  path: 'clients',
      //  loadChildren: './clients/clients.module#ClientsModule'
      //}, {
      //  path: 'calendar',
      //  loadChildren: './calendar/calendar.module#CalendarModule'
      //}, {
      //  path: 'todo',
      //  loadChildren: './todo/todo.module#TodoModule'
      //}, {
      //  path: 'documents',
      //  loadChildren: './documents/documents.module#DocumentsModule'
      //}, {
      //  path: 'invoices',
      //  loadChildren: './invoices/invoices.module#InvoicesModule'
      //}, {
      //  path: 'causelist',
      //  loadChildren: './causelist/causelist.module#CauselistModule'
      //}, {
      //  path: 'casediary',
      //  loadChildren: './casediary/casediary.module#CaseDiaryModule'
      //}, 


      //{
      //  path: 'components',
      //  loadChildren: './components/components.module#ComponentsModule'
      //},
      //{
      //  path: 'icons',
      //  loadChildren: './icons/icons.module#IconsModule'
      //},
      //{
      //  path: 'widgets',
      //  loadChildren: './widgets/widgets.module#WidgetsModule'
      //},
      //{
      //  path: 'charts',
      //  loadChildren: './chartjs/chartjs.module#ChartJSModule'
      //}
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import { SimpleLayoutComponent } from './layouts/simple-layout.component';

export const routes: Routes = [
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
        path: 'farmerInward',
        loadChildren: './farmer-inward/farmer-inward.module#FarmerInwardModule'
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
          },

          {
            path: 'Customerview',
            loadChildren: './master/customer-view/customer.module#CusotmerModule'
          },

          {
            path: 'Supplierview',
            loadChildren: './master/supplier-view/supplier.view.module#SupplierViewModule'
          },

          {
            path: 'Locationview',
            loadChildren: './master/location-view/location.view.module#LocationViewModule'
          },

          {
            path: 'Planview',
            loadChildren: './master/plan-view/plan.view.module#PlanViewModule'
          },

          {
            path: 'Productdescview',
            loadChildren: './master/productdesc-view/productdesc.view.module#ProductdescViewModule'
          },

          {
            path: 'Profileview',
            loadChildren: './master/profile-view/profile.view.module#ProfileViewModule'
          },
          
          {
            path: 'Employeeview',
            loadChildren: './master/employee-view/employee.view.module#EmployeeViewModule'
          },
          
          {
            path: 'Productview',
            loadChildren: './master/product-view/product.view.module#ProductViewModule'
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
          },
          {
            path: 'Bookingcancelview',
            loadChildren: './bookingmaster/bookingcancel-view/bookingcancel.view.module#BookingcancelViewModule'
          },
          {
            path: 'Salesreceiptview',
            loadChildren: './bookingmaster/salesreceipt-view/salesreceipt.view.module#SalesReceiptViewModule'
          },
        ]
      },

      //{
      //  path: 'account',
      //  component: SimpleLayoutComponent,
      //  data: {
      //    title: 'Account'
      //  },
      //  children: [

      //    {
      //      path: 'Salesreceiptview',
      //      loadChildren: './account/salesreceipt-view/salesreceipt.view.module#SalesReceiptViewModule'
      //    },
          
      //  ]
      //},

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

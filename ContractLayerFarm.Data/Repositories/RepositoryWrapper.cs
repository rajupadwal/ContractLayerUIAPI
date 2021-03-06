﻿using System;
using System.Collections.Generic;
using System.Text;
using ContractLayerFarm.Data.Contract;
using ContractLayerFarm.Data.Models;

namespace ContractLayerFarm.Data.Repositories
{
    public class RepositoryWrapper : IRepositoryWrapper
    {
        private ContractLayerDBContext _repoContext;

        private CustomerRepository _customer;
        private SupplierRepository _supplier;
        private LocationRepository _location;
        private PlanRepository _plan;
        private UnitRepository _unit;
        private ProductdescRepository _productdesc;
        private ProductRepository _product;
        private ProfileRepository _profile;
        private EmployeeRepository _employee;
        private BookingRepository _booking;
        private BookingCancelRepository _bookingcancel;
        private ExpencedetailsRepository _expencedetails;
        private ExpencetypeRepository _expencetype;
        private EggsrangeRepository _eggsrange;
        private EmployeeAdvanceRepository _employeeadvance;
        private IncomeRepository _income;
        private EnquiryRepository _enquiry;
        private SalesreceiptRepository _salesreceipt;
        private PurchasepaymentRepository _purchasepayment;
        private PurchasereturnreceiptRepository _purchasereturnreceipt;
        private IncometypeRepository _incometype;

        public IUnitRepository Unit
        {
            get
            {
                if (_unit == null)
                {
                    _unit = new UnitRepository(_repoContext);
                }

                return _unit;
            }
        }
        public IIncometypeRepository Incometype
        {
            get
            {
                if (_incometype == null)
                {
                    _incometype = new IncometypeRepository(_repoContext);
                }
                return _incometype;
            }
        }

        public IPurchasereturnreceiptRepository Purchasereturnreceipt
        {
            get
            {
                if(_purchasereturnreceipt==null)
                {
                    _purchasereturnreceipt = new PurchasereturnreceiptRepository(_repoContext);
                }
                return _purchasereturnreceipt;
            }
        }
        
                

        public IBookingCancelRepository Bookingcancel
        {
            get
            {
                if (_bookingcancel == null)
                {
                    _bookingcancel = new BookingCancelRepository(_repoContext);
                }

                return _bookingcancel;
            }
        }

       
        public IPurchasepaymentRepository Purchasepayment
        {
            get
            {
                if (_purchasepayment == null)
                {
                    _purchasepayment = new PurchasepaymentRepository(_repoContext);
                }

                return _purchasepayment;
            }
        }

        public ISalesreceiptRepository Salesreceipt
        {
            get
            {
                if (_salesreceipt == null)
                {
                    _salesreceipt = new SalesreceiptRepository(_repoContext);
                }

                return _salesreceipt;
            }
        }

        public IEggsrangeRepository Eggsrange
        {
            get
            {
                if (_eggsrange == null)
                {
                    _eggsrange = new EggsrangeRepository(_repoContext);
                }

                return _eggsrange;
            }
        }

        public IEmployeeAdvanceRepository Employeeadvance
        {
            get
            {
                if (_employeeadvance == null)
                {
                    _employeeadvance = new EmployeeAdvanceRepository(_repoContext);
                }

                return _employeeadvance;
            }
        }
        public IEnquiryRepository Enquiry
        {
            get
            {
                if (_enquiry == null)
                {
                    _enquiry = new EnquiryRepository(_repoContext);
                }

                return _enquiry;
            }
        }
        public IIncomeRepository Income
        {
            get
            {
                if (_income == null)
                {
                    _income = new IncomeRepository(_repoContext);
                }

                return _income;
            }
        }
        public IExpencedetailsRepository Expencedetails
        {
            get
            {
                if (_expencedetails == null)
                {
                    _expencedetails = new ExpencedetailsRepository(_repoContext);
                }

                return _expencedetails;
            }
        }

        public IExpencetypeRepository Expencetype
        {
            get
            {
                if (_expencetype == null)
                {
                    _expencetype = new ExpencetypeRepository(_repoContext);
                }

                return _expencetype;
            }
        }

        public IBookingRepository Booking
        {
            get
            {
                if (_booking == null)
                {
                    _booking = new BookingRepository(_repoContext);
                }

                return _booking;
            }
        }

        public ICustomerRepository Customer
        {
            get
            {
                if (_customer == null)
                {
                    _customer = new CustomerRepository(_repoContext);
                }

                return _customer;
            }
        }

        public IEmployeeRepository Employee
        {
            get
            {
                if (_employee == null)
                {
                    _employee = new EmployeeRepository(_repoContext);
                }

                return _employee;
            }
        }

        public IProfileRepository Profile
        {
            get
            {
                if (_profile == null)
                {
                    _profile = new ProfileRepository(_repoContext);
                }

                return _profile;
            }
        }

        public IProductRepository Product
        {
            get
            {
                if (_product == null)
                {
                    _product = new ProductRepository(_repoContext);
                }

                return _product;
            }
        }

        public IProductdescRepository Productdesc
        {
            get
            {
                if (_productdesc == null)
                {
                    _productdesc = new ProductdescRepository(_repoContext);
                }

                return _productdesc;
            }
        }

        public ISupplierRepository Supplier
        {
            get
            {
                if (_supplier == null)
                {
                    _supplier = new SupplierRepository(_repoContext);
                }

                return _supplier;
            }
        }

        public ILocationRepository Location
        {
            get
            {
                if (_location==null)
                {
                    _location = new LocationRepository(_repoContext);
                }

                return _location;
            }
        }

        public IPlanRepository Plan
        {
            get
            {
                if (_plan == null)
                {
                    _plan = new PlanRepository(_repoContext);
                }

                return _plan;
            }
        }

        public RepositoryWrapper(ContractLayerDBContext repositoryContext)
        {
            _repoContext = repositoryContext;
        }
    }
}

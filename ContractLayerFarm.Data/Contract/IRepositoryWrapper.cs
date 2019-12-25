using System;
using System.Collections.Generic;
using System.Text;

namespace ContractLayerFarm.Data.Contract
{

    public interface IRepositoryWrapper
    {
        ITalukamasterRepository Talukamaster { get; }
        IDistrictmasterRepository Districtmaster { get; }
        ITypemasterRepository Type { get; }
        ISubtypemasterRepository Subtype { get; }
        ISubcastemasterRepository Subcastemaster { get; }
        IStatemasterRepository Statemaster { get; }
        ICastemasterRepository Castemaster { get; }
        IBankmasterRepository Bankmaster { get; }
        IBranchRepository Branchmaster { get; }
        ISchemeRepository Schememaster { get; }
        ISchemepaymentRepository Schemepayment { get; }
        ICustomerRepository Customer { get; }
        IUnitRepository Unit { get; }
        ISupplierRepository Supplier { get; }
        ILocationRepository Location { get; }
        IProductdescRepository Productdesc { get; }
        IProductRepository Product { get; }
        IPlanRepository Plan { get; }
        IProfileRepository Profile { get; }
        IEmployeeRepository Employee { get; }
        IBookingRepository Booking { get; }
        IBookingCancelRepository Bookingcancel { get; }
        IExpencedetailsRepository Expencedetails { get; }
        IExpencetypeRepository Expencetype { get; }
        IEggsrangeRepository Eggsrange { get; }
        IEmployeeAdvanceRepository Employeeadvance { get; }
        IIncomeRepository Income { get; }
        IEnquiryRepository Enquiry { get; }
        ISalesreceiptRepository Salesreceipt { get; }
        IPurchasepaymentRepository Purchasepayment { get; }
        IIncometypeRepository Incometype { get; }
        IPurchasereturnreceiptRepository Purchasereturnreceipt { get;  }

        //IItemGroupDetailRepository IItemGroupDetail { get; }
        //IDPRRepository IDPRRepository { get; }

    }

}

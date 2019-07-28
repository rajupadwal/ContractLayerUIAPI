using System;
using System.Collections.Generic;
using System.Text;

namespace ContractLayerFarm.Data.Contract
{

    public interface IRepositoryWrapper
    {
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

        //IItemGroupDetailRepository IItemGroupDetail { get; }
        //IDPRRepository IDPRRepository { get; }

    }

}

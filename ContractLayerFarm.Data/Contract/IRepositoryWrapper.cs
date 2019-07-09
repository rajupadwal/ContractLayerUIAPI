using System;
using System.Collections.Generic;
using System.Text;

namespace ContractLayerFarm.Data.Contract
{

    public interface IRepositoryWrapper
    {
        ICustomerRepository Customer { get; }
        ISupplierRepository Supplier { get; }
        ILocationRepository Location { get; }
        IProductdescRepository Productdesc { get; }

        IProductRepository Product { get; }
        IPlanRepository Plan { get; }
       IProfileRepository Profile { get; }
        IEmployeeRepository Employee { get; }
        //IItemGroupDetailRepository IItemGroupDetail { get; }
        //IDPRRepository IDPRRepository { get; }

    }

}

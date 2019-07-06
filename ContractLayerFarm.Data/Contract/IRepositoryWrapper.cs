using System;
using System.Collections.Generic;
using System.Text;

namespace ContractLayerFarm.Data.Contract
{

    public interface IRepositoryWrapper
    {
        ICustomerRepository Customer { get; }
        ISupplierRepository Supplier { get; }
        //IItemGroupDetailRepository IItemGroupDetail { get; }
        //IDPRRepository IDPRRepository { get; }

    }

}

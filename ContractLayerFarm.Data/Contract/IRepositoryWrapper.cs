using System;
using System.Collections.Generic;
using System.Text;

namespace ContractLayerFarm.Data.Contract
{

    public interface IRepositoryWrapper
    {
        ICustomerRepository Customer { get; }
        //IItemGroupDetailRepository IItemGroupDetail { get; }
        //IDPRRepository IDPRRepository { get; }

    }

}

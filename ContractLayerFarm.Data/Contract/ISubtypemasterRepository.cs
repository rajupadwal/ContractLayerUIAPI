using System;
using System.Collections.Generic;
using System.Text;
using ContractLayerFarm.Data.Models;
namespace ContractLayerFarm.Data.Contract
{
       public interface ISubtypemasterRepository : IRepositoryBase<TblSubTypeMaster>
    {
        bool Authenticate();

        IEnumerable<TblSubTypeMaster> GetAllType();
        IEnumerable<TblSubTypeMaster> GetAllTypeForSubtype(TblSubTypeMaster master);

    }
}

using System;
using System.Collections.Generic;
using System.Text;
using ContractLayerFarm.Data.Models;
namespace ContractLayerFarm.Data.Contract
{
       public interface ISchemeRepository : IRepositoryBase<TblSchemeMaster>
    {
         
        bool Authenticate();
        IEnumerable<TblSchemeMaster> SearchScheme(string searchString);
    }
}

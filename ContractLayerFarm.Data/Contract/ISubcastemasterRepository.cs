using System;
using System.Collections.Generic;
using System.Text;
using ContractLayerFarm.Data.Models;
namespace ContractLayerFarm.Data.Contract
{
       public interface ISubcastemasterRepository : IRepositoryBase<TblSubCasteMaster>
    {
        bool Authenticate();
        IEnumerable<TblSubCasteMaster> GetAllSubcaste();
        IEnumerable<TblSubCasteMaster> GetAllSubcasteForCaste(TblSubCasteMaster master);
        IEnumerable<TblSubCasteMaster> SearchSubCasteName(string searchString);
    }
}

using System;
using System.Collections.Generic;
using System.Text;
using ContractLayerFarm.Data.Contract;
using ContractLayerFarm.Data.Models;
using ContractLayerFarm.Data.Repositories;

namespace ContractLayerFarm.Data.Repositories
{
    public class BookingRepository : RepositoryBase<TblBookingMaster>, IBookingRepository
    {

        public BookingRepository(ContractLayerDBContext ktConContext) : base(ktConContext) {  }

        bool IBookingRepository.Authenticate()
        {
            return true;
        }
    }
}

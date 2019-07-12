using System;
using System.Collections.Generic;
using System.Text;
using ContractLayerFarm.Data.Contract;
using ContractLayerFarm.Data.Models;
using ContractLayerFarm.Data.Repositories;

namespace ContractLayerFarm.Data.Repositories
{
    public class BookingCancelRepository : RepositoryBase<TblBookingCancelMaster>, IBookingCancelRepository
    {

        public BookingCancelRepository(ContractLayerDBContext ktConContext) : base(ktConContext) {  }

        bool IBookingCancelRepository.Authenticate()
        {
            return true;
        }
    }
}

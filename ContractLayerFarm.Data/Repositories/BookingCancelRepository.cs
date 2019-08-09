using System;
using System.Collections.Generic;
using System.Text;
using ContractLayerFarm.Data.Contract;
using ContractLayerFarm.Data.Models;
using ContractLayerFarm.Data.Repositories;
using System.Linq.Expressions;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace ContractLayerFarm.Data.Repositories
{
    public class BookingCancelRepository : RepositoryBase<TblBookingCancelMaster>, IBookingCancelRepository
    {
        private ContractLayerDBContext ktConContext;
        public BookingCancelRepository(ContractLayerDBContext ktConContext) : base(ktConContext)
        {
            this.ktConContext = ktConContext;
        }

        public IEnumerable<TblBookingCancelMaster> GetAllBookingCancel()
        {

            var TblBookingCancelMaster = this.ktConContext.TblBookingCancelMaster
                       .Include(blog => blog.Location)
                       .Include(blog => blog.Customer)
                       .Include(blog => blog.Plan)
                       .ToList();
            return TblBookingCancelMaster;
        }

        public int GetBookingCancelNo()
        {
            int maxBookingCancelNo = this.ktConContext.TblBookingCancelMaster.Select(p => p.RecordNo).DefaultIfEmpty(0).Max() + 1;
            return maxBookingCancelNo;
        }
        bool IBookingCancelRepository.Authenticate()
        {
            return true;
        }
    }
}

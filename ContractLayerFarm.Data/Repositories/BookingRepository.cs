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
    public class BookingRepository : RepositoryBase<TblBookingMaster>, IBookingRepository
    {
        private ContractLayerDBContext ktConContext;
        public BookingRepository(ContractLayerDBContext ktConContext) : base(ktConContext)
        {
            this.ktConContext = ktConContext;
        }

        public IEnumerable<TblBookingMaster> GetAllBooking()
        {

            var TblBookingMaster = this.ktConContext.TblBookingMaster
                       .Include(blog => blog.Location)
                       .Include(blog => blog.Customer)
                       .Include(blog => blog.Plan)
                       .Include(blog=>blog.Employee)
                       .ToList();
            return TblBookingMaster;
        }
        bool IBookingRepository.Authenticate()
        {
            return true;
        }
    }
}

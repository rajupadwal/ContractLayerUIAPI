using System;
using System.Collections.Generic;
using System.Text;
using System.Linq.Expressions;
using System.Linq;


using ContractLayerFarm.Data.Contract;
using ContractLayerFarm.Data.Models;
using ContractLayerFarm.Data.Repositories;
using Microsoft.EntityFrameworkCore;

namespace ContractLayerFarm.Data.Repositories
{
    public class CustomerRepository : RepositoryBase<TblCustomerMaster>, ICustomerRepository
    {
        private ContractLayerDBContext ktConContext;
        public CustomerRepository(ContractLayerDBContext ktConContext) : base(ktConContext) {
            this.ktConContext = ktConContext;
        }

        public IEnumerable<TblCustomerMaster> SearchCustomer(string searchString)
        {
            if(string.IsNullOrEmpty(searchString))
            { return new List<TblCustomerMaster>(); }

           return this.ktConContext.Set<TblCustomerMaster>().Where(customer => customer.CustmerName.ToLower().Contains(searchString.ToLower()));
        }

        public IEnumerable<TblCustomerMaster> GetAllCustomer()
        {

            var TblCustomerMasters = this.ktConContext.TblCustomerMaster
                       .Include(blog => blog.Location)
                       .ToList();
            return TblCustomerMasters;
        }

        bool ICustomerRepository.Authenticate()
        {
            return true;
        }
    }
}

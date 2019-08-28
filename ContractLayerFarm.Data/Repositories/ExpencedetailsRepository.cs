using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using ContractLayerFarm.Data.Contract;
using ContractLayerFarm.Data.Models;
using ContractLayerFarm.Data.Repositories;
using System.Linq.Expressions;
using Microsoft.EntityFrameworkCore;

namespace ContractLayerFarm.Data.Repositories
{
    public class ExpencedetailsRepository : RepositoryBase<TblOfficeExpencesDetails>, IExpencedetailsRepository
    {
        private ContractLayerDBContext ktConContext;
        public ExpencedetailsRepository(ContractLayerDBContext ktConContext) : base(ktConContext) {

            this.ktConContext = ktConContext;
        }

        bool IExpencedetailsRepository.Authenticate()
        {
            return true;
        }
        public IEnumerable<TblOfficeExpencesDetails> GetAllExpenceType()
        {

            var TblOfficexpencesDetails = this.ktConContext.TblOfficeExpencesDetails
                       .Include(blog => blog.Location)
                       .Include(blog => blog.Employee)
                       .Include(blog=>blog.Expence)
                       .ToList();
            return TblOfficexpencesDetails;
        }
        public int GetExpenceNo()
        {
            int maxExpenceNo = this.ktConContext.TblOfficeExpencesDetails.Select(p => p.ExpencesNo).DefaultIfEmpty(0).Max() + 1;
            return maxExpenceNo;
        }

        public void DeleteOfficeExpense(TblOfficeExpencesDetails master)
        {
            var toBeDeleteofficeexp = this.RepositoryContext.Set<TblOfficeExpencesDetails>().Where(s => s.PkId == master.PkId );
            RepositoryContext.RemoveRange(toBeDeleteofficeexp);
            this.RepositoryContext.SaveChanges();
        }
    }
}

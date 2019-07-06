using System;
using System.Collections.Generic;
using System.Text;
using ContractLayerFarm.Data.Contract;
using ContractLayerFarm.Data.Models;

namespace ContractLayerFarm.Data.Repositories
{
    public class RepositoryWrapper : IRepositoryWrapper
    {
        private ContractLayerDBContext _repoContext;

        private CustomerRepository _customer;
        private SupplierRepository _supplier;

        public ICustomerRepository  Customer
        {
            get
            {
                if (_customer == null)
                {
                    _customer = new CustomerRepository(_repoContext);
                }

                return _customer;
            }
        }

        public ISupplierRepository Supplier
        {
            get
            {
                if (_supplier == null)
                {
                    _supplier = new SupplierRepository(_repoContext);
                }

                return _supplier;
            }
        }

        public RepositoryWrapper(ContractLayerDBContext repositoryContext)
        {
            _repoContext = repositoryContext;
        }
    }
}

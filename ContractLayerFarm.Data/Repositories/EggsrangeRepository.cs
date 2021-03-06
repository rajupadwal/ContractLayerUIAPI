﻿using System;
using System.Collections.Generic;
using System.Text;
using ContractLayerFarm.Data.Contract;
using ContractLayerFarm.Data.Models;
using ContractLayerFarm.Data.Repositories;

namespace ContractLayerFarm.Data.Repositories
{
    public class EggsrangeRepository : RepositoryBase<TblEggsRangeMaster>, IEggsrangeRepository
    {

        public EggsrangeRepository(ContractLayerDBContext ktConContext) : base(ktConContext) {  }

        bool IEggsrangeRepository.Authenticate()
        {
            return true;
        }
    }
}

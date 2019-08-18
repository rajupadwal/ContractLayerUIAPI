using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace ContractLayerFarm.Data.Models
{
   public class ViewStockDetails
    {
        
        //----------------ProductwiseStock Details------------------
        public string ProductName { get; set; }
        public string ProductType { get; set; }
        public string UnitDescription { get; set; }
        public decimal OpeningStock { get; set; }
        public decimal InwardQty { get; set; }
        public decimal OutwardQty { get; set; }
        public decimal AvailableStock { get; set; }


        //----------------Customerwise Booking Outstanding------------------
        public string CustomerName { get; set; }
        public string Address { get; set; }
        public string MobileNo { get; set; }
        public decimal BookingAmount { get; set; }
        public decimal CancelBookingAmt { get; set; }
        public decimal BookingReceivedAmt { get; set; }

        public decimal BookingOutstanding { get; set; }

        //----------------Customerwise Booking Outstanding------------------
        public decimal BillAmount { get; set; }
        public decimal BillPaidAmt { get; set; }
        public decimal BillOutstanding { get; set; }
    }
}

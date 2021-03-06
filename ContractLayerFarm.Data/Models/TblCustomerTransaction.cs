﻿using System;
using System.Collections.Generic;

namespace ContractLayerFarm.Data.Models
{
    public partial class TblCustomerTransaction
    {
        public int PkId { get; set; }
        public DateTime? TransactionDate { get; set; }
        public int? CustomerId { get; set; }
        public string BookingId { get; set; }
        public string BillId { get; set; }
        public string TransactionType { get; set; }
        public decimal? BookingAmount { get; set; }
        public decimal? CancelBookingAmt { get; set; }
        public decimal? BookingReceivedAmt { get; set; }
        public decimal? BillAmount { get; set; }
        public decimal? BillPaidAmt { get; set; }
        public string ReceiptNo { get; set; }
        public string PaymentType { get; set; }
        public string Narration { get; set; }
    }
}

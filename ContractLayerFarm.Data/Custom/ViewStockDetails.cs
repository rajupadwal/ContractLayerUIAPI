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
        public decimal RejectedQty { get; set; }
        public decimal AvailableStock { get; set; }


        //----------------Customerwise Booking Outstanding------------------
        public string CustomerName { get; set; }
        public string Address { get; set; }
        public string MobileNo { get; set; }
        public decimal BookingAmount { get; set; }
        public decimal CancelBookingAmt { get; set; }
        public decimal BookingReceivedAmt { get; set; }
        public string BookingId { get; set; }
        public string ReceiptNo { get; set; }
        public decimal BookingOutstanding { get; set; }

        //----------------Customerwise Booking Outstanding------------------
        public decimal BillAmount { get; set; }
        public decimal BillPaidAmt { get; set; }
        public decimal BillOutstanding { get; set; }

        //----------------Supplier Outstanding------------------------------
        public string SupplierName { get; set; }
        public decimal PurchaseAmount { get; set; }
        public decimal PurchasePaidAmt { get; set; }
        public decimal PurchaseOutstanding { get; set; }

        public DateTime TransactionDate { get; set; }
        public string TransactionType { get; set; }
        public string BillId { get; set; }
        public string PaymentVocherNo { get; set; }
        public string PaymentType { get; set; }
        public string Narration { get; set; }

        public string ProductTypeUnit { get; set; }
        public string PlanName { get; set; }
        public decimal Quantity { get; set; }

        public string ExpencesNo { get; set; }
        public string ExpenceType { get; set; }

        public string EmployeeName { get; set; }
        public string PaymentMethod { get; set; }
        public decimal Amount { get; set; }
        public string LocationName { get; set; }
    }
}

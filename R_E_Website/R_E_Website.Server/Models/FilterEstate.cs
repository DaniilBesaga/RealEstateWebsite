using R_E_Website.Server.Enums;

namespace R_E_Website.Server.Models
{
    public class FilterEstate
    {
        public EstateType EstateType { get; set; }
        public string EstateLocation { get; set; }
        public int? RoomsCountFrom { get; set; }
        public int? RoomsCountTo { get; set; }
        public int TotalSquareFrom { get; set; }
        public int TotalSquareTo { get; set; }
        public int PriceRangeFrom { get; set; }
        public int PriceRangeTo { get; set; }
    }
}

using R_E_Website.Server.Enums;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace R_E_Website.Server.Models
{
    public class Newsletter
    {
        [Column("email")]
        [EmailAddress]
        public required string Email { get; set; }

        [Column("estateTypes")]
        public EstateType[]? EstateTypes { get; set; }

        [Column("roomsCountFrom")]
        public int? RoomsCountFrom { get; set; }

        [Column("roomsCountTo")]
        public int? RoomsCountTo { get; set; }

        [Column("totalSquareFrom")]
        public int? TotalSquareFrom { get; set; }

        [Column("totalSquareTo")]
        public int? TotalSquareTo { get; set; }

        [Column("priceRangeFrom")]
        public int? PriceRangeFrom { get; set; }

        [Column("priceRangeTo")]
        public int? PriceRangeTo { get; set; }
    }
}

using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using R_E_Website.Server.Enums;
using System.Reflection.Metadata;

namespace R_E_Website.Server.Models
{
    public class Estate
    {
        [Required]
        [Key]
        [Column("estate_id")]
        public int Id { get; set; }

        [Column("estate_type")]
        public EstateType EstateType { get; set; }

        [Column("imgsUrl")]
        public string? ImgsUrlFolder { get; set; }

        [Column("city")]
        public string? City { get; set; }

        [Column("complexName")]
        public string? ComplexName { get; set; }

        [Column("complexUrl")]
        public string? ComplexUrl { get; set; }

        [Column("district")]
        public string? District { get; set; }

        [Column("estate_address")]
        public string? EstateAddress { get; set; }

        [Column("totalSquare")]
        public int? TotalSquare { get; set; }

        [Column("livingSquare")]
        public int? LivingSquare { get; set; }

        [Column("kitchenSquare")]
        public int? KitchenSquare { get; set; }

        [Column("roomCount")]
        public int? RoomCount { get; set; }

        [Column("floorsNumber")]
        public int? NumberOfFloors { get; set; }

        [Column("estate_floor")]
        public int? EstateFloor { get; set; }

        [Column("price_uah")]
        public int PriceUah { get; set; }

        [Column("price_usd")]
        public int PriceUsd  => PriceUah * 39; 

        [Column("houseSeria")]
        public string? HouseSeria { get; set; }

        [Column("houseArea")]
        public int? HouseArea { get; set; }

        [Column("houseMaterial")]
        public string? HouseMaterial { get; set; }

        [Column("discriptiion")]
        public string? Discription { get; set; }

        [Column("iframeUrl")]
        public string? IFrameUrl { get; set; }

        [Column("phonenumber")]
        [Phone]
        public string PhoneNumber { get; set; }
        
    }
}

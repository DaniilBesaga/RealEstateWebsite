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
        public string ImgsUrlFolder { get; set; }

        [Column("city")]
        public string City { get; set; }

        [Column("district")]
        public string District { get; set; }

        [Column("totalSquare")]
        public int TotalSquare { get; set; }

        [Column("livingSquare")]
        public int LivingSquare { get; set; }

        [Column("kitchenSquare")]
        public int KitchenSquare { get; set; }

        

        [Column("floorsNumber")]
        public int FloorsNumber { get; set; }

        [Column("houseSeria")]
        public int HouseSeria { get; set; }

        [Column("houseMaterial")]
        public int HouseMaterial { get; set; }

        [Column("discriptiion")]
        public int Discriptiion { get; set; }

        [Column("iframeUrl")]
        public int IFrameUrl { get; set; }

        [Column("phonenumber")]
        [Phone]
        public int PhoneNumber { get; set; }

        public EstateThumbnail? EstateThumbnail { get; set; }
        
    }
}

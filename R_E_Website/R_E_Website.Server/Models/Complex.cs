using R_E_Website.Server.Enums;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace R_E_Website.Server.Models
{
    public class Complex
    {
        [Required]
        [Key]
        [Column("complex_id")]
        public int Id { get; set; }

        [Column("complex_name")]
        public string ComplexName {  get; set; }

        [Column("imgs_url")]
        public string ImgsUrlFolder { get; set; }

        [Column("class_type")]
        public ClassType ClassType { get; set; }

        [Column("developer")]
        public string Developer { get; set; }

        [Column("number_of_floors")]
        public int NumberOfFloors { get; set; }

        [Column("build_tech")]
        public string BuildTechnology { get; set; }

        [Column("houses_count")]
        public int HouseCount { get; set; }

        [Column("commisioned_year")]
        public int CommisionedYear { get; set; }

        [Column("ceilling_height")]
        public double CeillingHeight { get; set; }

        [Column("parking_type")]
        public ParkingType ParkingType { get; set; }

        [Column("description")]
        public string Description { get; set; }

        
    }
}

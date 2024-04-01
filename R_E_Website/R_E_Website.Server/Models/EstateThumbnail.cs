using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Reflection.Metadata;

namespace R_E_Website.Server.Models
{
    public class EstateThumbnail
    {
        [Required]
        [Key]
        [Column("estate_tn_id")]
        public int Id { get; set; }

        [Column("img_url")]
        public string ImgUrl { get; set; }

        [Column("estate_address")]
        public string EstateAddress { get; set; }

        [Column("estate_square")]
        public int EstateSquare { get; set; }

        [Column("estate_floor")]
        public int EstateFloor { get; set; }

        [Column("price_uah")]
        public int PriceUah { get; set; }

        [Column("price_usd")]
        public int PriceUsd { get; set; }

        public int EstateId { get; set; }
        [Column("estateThumbnail")]
        public Estate Estate { get; set; } = null!;
    }
}

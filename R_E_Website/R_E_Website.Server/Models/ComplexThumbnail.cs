using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace R_E_Website.Server.Models
{
    public class ComplexThumbnail
    {
        [Required]
        [Key]
        [Column("estate_tn_id")]
        public int Id { get; set; }

        [Column("img_url")]
        public string ImgUrl { get; set; }

        [Column("complex_name")]
        public string ComplexName { get; set; }

        public int ComplexId { get; set; }
        [Column("compex_thumbnail")]
        public Complex Complex { get; set; } = null!;
    }
}

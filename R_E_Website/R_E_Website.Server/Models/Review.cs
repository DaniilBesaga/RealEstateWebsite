using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace R_E_Website.Server.Models
{
    public class Review
    {
        [Required]
        [Key]
        [Column("review_id")]
        public int Id { get; set; }

        [Column("body")]
        public string Body { get; set; }
        [Column("author")]
        public string Author { get; set; }
        [Column("created_at")]
        public DateTime Created_At { get; set; }
    }
}

using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace R_E_Website.Server.Models
{
    public class RequestEstate
    {
        [Required]
        [Key]
        [Column("request_id")]
        public int Id { get; set; }
        [Column("request_id")]
        public int RequestId { get; set; }
        public Request request { get; set; }
    }
}

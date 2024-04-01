using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace R_E_Website.Server.Models
{
    public class Request
    {
        [Required]
        [Key]
        [Column("request_id")]
        public int Id { get; set; }
        [Column("client_info")]
        public ClientInfo ClientInfo { get; set; }
        [Column("estate_info")]
        public Estate EstateInfo { get; set; }

        [Column("add_info")]
        public string? AdditionalInfo { get; set; }
    }
}

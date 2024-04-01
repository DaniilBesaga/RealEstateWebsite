using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace R_E_Website.Server.Models
{
    public class ClientInfo
    {
        [Required]
        [Key]
        [Column("client_id")]
        public int Id { get; set; }

        [Column("client_name")]
        [Required]
        public required string Name { get; set; }

        [Column("client_email")]
        [Required]
        [EmailAddress]
        public required string Email { get; set; }

        [Column("client_phone")]
        [Required]
        [Phone]
        public required string PhoneNumber { get; set; }

        [Column("request_id")]
        public int RequestId { get; set; }
        public Request request { get; set; }
    }
}

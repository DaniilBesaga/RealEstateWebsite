using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace R_E_Website.Server.Models
{
    public class OrderService
    {
        [Required]
        [Key]
        [Column("order_id")]
        public int Id { get; set; }

        [Column("client_name")]
        [Required]
        public string Name { get; set; }

        [Column("client_phone")]
        [Required]
        [Phone]
        public string PhoneNumber { get; set; }

        [Column("client_email")]
        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Column("estate_id")]
        public int? EstateId { get; set; }
        public Estate? Estate { get; set; }
    }
}

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
    }
}

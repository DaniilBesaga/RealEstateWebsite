using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using R_E_Website.Server.Enums;

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
        public RequestEstate EstateInfo { get; set; }

        [Column("request_type")]
        public RequestType RequestType { get; set; }

        [Column("add_info")]
        public string? AdditionalInfo { get; set; }
    }
}

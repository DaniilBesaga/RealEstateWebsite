using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace R_E_Website.Server.Models
{
    [Table("RequestEstates")]
    public class RequestEstate : Estate
    {
        [Column("request_id")]
        public int RequestId { get; set; }
        public Request Request { get; set; }
    }
}

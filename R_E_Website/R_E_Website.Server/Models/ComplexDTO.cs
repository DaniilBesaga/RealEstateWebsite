using System.ComponentModel.DataAnnotations.Schema;

namespace R_E_Website.Server.Models
{
    public class ComplexDTO
    {
        public int Id { get; set; }
        public string ComplexName { get; set; }
        public string ImgUrl { get; set; }
    }
}

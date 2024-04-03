using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Reflection.Metadata;

namespace R_E_Website.Server.Models
{
    public class EstateDTO
    {
        public int Id { get; set; }
        public string ImgUrl { get; set; }
        public string EstateAddress { get; set; }
        public int? EstateSquare { get; set; }     
        public int? EstateFloor { get; set; }
        public int PriceUah { get; set; }
        public int PriceUsd { get; set; }
    }
}

using Microsoft.EntityFrameworkCore;
using R_E_Website.Server.Data;
using R_E_Website.Server.GenericRepository;
using R_E_Website.Server.Interfaces;
using R_E_Website.Server.Models;

namespace R_E_Website.Server.Repository
{
    public class EstateDTORepository : GenericRepository<EstateDTO>, IEstateDTORepository
    {
        private DatabaseContext _context = null;
        public EstateDTORepository()
        {
            _context = new DatabaseContext();
        }
        public async Task<EstateDTO> GetEstateShortcutByIdAsync(int id)
        {
            var estate = await _context.Estates.FirstOrDefaultAsync
                (i => i.Id == id);
            return new EstateDTO()
            {
                Id = estate.Id,
                EstateAddress = estate.EstateAddress,
                EstateFloor = estate.EstateFloor,
                EstateSquare = estate.TotalSquare,
                ImgUrl = estate.ImgsUrlFolder + "/1",
                PriceUah = estate.PriceUah,
                PriceUsd = estate.PriceUsd
            };
        }
    }
}

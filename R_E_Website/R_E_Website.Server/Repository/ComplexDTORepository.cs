using Microsoft.EntityFrameworkCore;
using R_E_Website.Server.Data;
using R_E_Website.Server.GenericRepository;
using R_E_Website.Server.Interfaces;
using R_E_Website.Server.Models;

namespace R_E_Website.Server.Repository
{
    public class ComplexDTORepository : IComplexDTORepository
    {
        private DatabaseContext _context = null;
        public ComplexDTORepository()
        {
            _context = new DatabaseContext();
        }
        public async Task<ComplexDTO> GetComplexShortcutByIdAsync(int id)
        {
            var complex = await _context.Complexes.FirstOrDefaultAsync
                (i => i.Id == id);
            return new ComplexDTO()
            {
                Id = complex.Id,
                ComplexName = complex.ComplexName,
                ImgUrl = complex.ImgsUrlFolder + "/1"
            };
        }
    }
}

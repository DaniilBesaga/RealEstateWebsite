using R_E_Website.Server.GenericRepository;
using R_E_Website.Server.Models;

namespace R_E_Website.Server.Interfaces
{
    public interface IEstateDTORepository : IGenericRepository<EstateDTO>
    {
        Task<EstateDTO> GetEstateShortcutByIdAsync(int id);
    }
}

using R_E_Website.Server.GenericRepository;
using R_E_Website.Server.Models;

namespace R_E_Website.Server.Interfaces
{
    public interface IComplexDTORepository : IGenericRepository<ComplexDTO>
    {
        Task<ComplexDTO> GetComplexShortcutByIdAsync(int id);
    }
}

using R_E_Website.Server.GenericRepository;
using R_E_Website.Server.Models;

namespace R_E_Website.Server.Interfaces
{
    public interface IComplexDTORepository 
    {
        Task<ComplexDTO> GetComplexShortcutByNameAsync(string name);
        Task<IEnumerable<ComplexDTO>> GetAllComplexesShortcutAsync();
    }
}

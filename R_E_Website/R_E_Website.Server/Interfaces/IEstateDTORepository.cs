using R_E_Website.Server.GenericRepository;
using R_E_Website.Server.Models;

namespace R_E_Website.Server.Interfaces
{
    public interface IEstateDTORepository
    {
        Task<EstateDTO> GetEstateShortcutByIdAsync(int id);
        Task<IEnumerable<EstateDTO>> GetAllEstatesShortcutAsync(string estateType, string sort);
        Task<IEnumerable<EstateDTO>> GetAllEstatesFilterAsync(FilterEstate filterEstate);
        Task<int> GetObjectCount(int catalogType);
    }
}

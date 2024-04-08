using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using R_E_Website.Server.Interfaces;
using R_E_Website.Server.Repository;

namespace R_E_Website.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EstateDTOController : ControllerBase
    {
        private IEstateDTORepository _estateDTORepository;
        public EstateDTOController(IEstateDTORepository estateDTORepository)
        {
            _estateDTORepository = estateDTORepository;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllEstatesDTO([FromHeader] string EstateType)
        {
            var requestEstates = await _estateDTORepository.GetAllEstatesShortcutAsync(EstateType);
            return Ok(requestEstates);
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetEstateDTO(int id)
        {
            var requestEstates = await _estateDTORepository.GetEstateShortcutByIdAsync(id);
            return Ok(requestEstates);
        }
    }
}

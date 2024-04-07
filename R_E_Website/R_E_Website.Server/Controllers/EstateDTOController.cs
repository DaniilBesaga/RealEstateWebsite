using Microsoft.AspNetCore.Mvc;
using R_E_Website.Server.Repository;

namespace R_E_Website.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EstateDTOController : ControllerBase
    {
        private EstateDTORepository _estateDTORepository;
        public EstateDTOController(EstateDTORepository estateDTORepository)
        {
            _estateDTORepository = estateDTORepository;
        }
        [HttpGet("{id:int}")]
        public async Task<ActionResult> GetEstateDTO(int id)
        {
            var requestEstates = await _estateDTORepository.GetEstateShortcutByIdAsync(id);
            return Ok(requestEstates);
        }
    }
}

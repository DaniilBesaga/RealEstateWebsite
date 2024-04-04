using Microsoft.AspNetCore.Mvc;
using R_E_Website.Server.Repository;

namespace R_E_Website.Server.Controllers
{
    [ApiController]
    [Route("[api/controller]")]
    public class ComplexDTOController : ControllerBase
    {
        private ComplexDTORepository _complexDTORepository;
        public ComplexDTOController(ComplexDTORepository complexDTORepository)
        {
            _complexDTORepository = complexDTORepository;
        }
        [HttpGet("{id:int}")]
        public async Task<ActionResult> GetComplexDTO(int id)
        {
            var requestEstates = await _complexDTORepository.GetComplexShortcutByIdAsync(id);
            return Ok(requestEstates);
        }
    }
}

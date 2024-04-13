using Microsoft.AspNetCore.Mvc;
using R_E_Website.Server.Interfaces;
using R_E_Website.Server.Repository;

namespace R_E_Website.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ComplexDTOController : ControllerBase
    {
        private IComplexDTORepository _complexDTORepository;
        public ComplexDTOController(IComplexDTORepository complexDTORepository)
        {
            _complexDTORepository = complexDTORepository;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllComplexesDTO()
        {
            var complexesDTO = await _complexDTORepository.GetAllComplexesShortcutAsync();
            return Ok(complexesDTO);
        }
        [HttpGet("{name:int}")]
        public async Task<ActionResult> GetComplexDTO(int name)
        {
            var complexDTO = await _complexDTORepository.GetComplexShortcutByNameAsync(name);
            return Ok(complexDTO);
        }
    }
}

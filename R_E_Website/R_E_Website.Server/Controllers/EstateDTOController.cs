using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using R_E_Website.Server.Interfaces;
using R_E_Website.Server.Models;
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
        public async Task<IActionResult> GetAllEstatesDTO([FromHeader] string EstateType, [FromHeader] string sort)
        {
            var requestEstates = await _estateDTORepository.GetAllEstatesShortcutAsync(EstateType, sort);
            return Ok(requestEstates);
        }

        [HttpPost("getByFilter")]
        public async Task<IActionResult> GetAllEstatesDTOByFilter([FromBody] FilterEstate filterEstate)
        {
            var requestEstates = await _estateDTORepository.GetAllEstatesFilterAsync(filterEstate);
            return Ok(requestEstates);
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetEstateDTO(int id)
        {
            try
            {
                var requestEstates = await _estateDTORepository.GetEstateShortcutByIdAsync(id);

                if (requestEstates == null)
                    return NotFound();

                return Ok(requestEstates);
            }
            catch (Exception ex)
            {
                string err = ex.Message + "\n" + ex.StackTrace;
                return BadRequest(err);
            }
        }

        [HttpGet("catalogType/{catalogType:int}")]
        public async Task<IActionResult> GetEstateCount(int catalogType)
        {
            var requestEstates = await _estateDTORepository.GetObjectCount(catalogType);
            return Ok(requestEstates);
        }
    }
}

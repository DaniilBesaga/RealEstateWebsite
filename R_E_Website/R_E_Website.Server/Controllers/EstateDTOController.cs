using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using R_E_Website.Server.Enums;
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
        public async Task<IActionResult> GetAllEstatesDTO([FromHeader] string EstateType)
        {
            try
            {
                var requestEstates = await _estateDTORepository.GetAllEstatesShortcutAsync(EstateType);
                return Ok(requestEstates);
            }
            catch
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        [HttpPost("getByFilter")]
        public async Task<IActionResult> GetAllEstatesDTOByFilter([FromBody] FilterEstate filterEstate)
        {
            try
            {
                var requestEstates = await _estateDTORepository.GetAllEstatesFilterAsync(filterEstate);
                return Ok(requestEstates);
            }
            catch
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
            
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
            catch
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
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

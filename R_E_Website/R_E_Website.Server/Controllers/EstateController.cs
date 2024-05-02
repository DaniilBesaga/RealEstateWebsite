using Microsoft.AspNetCore.Mvc;
using R_E_Website.Server.GenericRepository;
using R_E_Website.Server.Models;

namespace R_E_Website.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EstateController : ControllerBase
    {
        private IGenericRepository<Estate> _estateRepository;
        public EstateController(IGenericRepository<Estate> estateRepository)
        {
            _estateRepository = estateRepository;
        }
        [HttpGet]
        public async Task<ActionResult> GetEstates()
        {
            try
            {
                var estates = await _estateRepository.GetAllAsync();
                return Ok(estates);
            }
            catch
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult> GetEstateById(int id)
        {
            try
            {
                var estate = await _estateRepository.GetByIdAsync(id);

                if (estate == null)
                {
                    return NotFound();
                }
                var estates = await _estateRepository.GetAllAsync();
                return Ok(estate);
            }
            catch 
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
            
        }

        [HttpPost]
        public async Task<ActionResult> CreateEstate([FromBody] Estate estate)
        {
            try
            {
                if (estate == null)
                {
                    return BadRequest();
                }

                await _estateRepository.InsertAsync(estate);
            }
            catch
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
            return CreatedAtAction(nameof(GetEstateById), new { id = estate.Id }, estate);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateEstate(int id, [FromBody] Estate estate)
        {
            try
            {
                if (estate == null || id != estate.Id)
                {
                    return BadRequest();
                }

                var existingEstate = await _estateRepository.GetByIdAsync(id);
                if (existingEstate == null)
                {
                    return NotFound();
                }
                await _estateRepository.UpdateAsync(existingEstate);
            }
            catch
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEstate(int id)
        {
            try
            {
                var existingEstate = await _estateRepository.GetByIdAsync(id);
                if (existingEstate == null)
                {
                    return NotFound();
                }
                await _estateRepository.DeleteAsync(id);
            }
            catch
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
            return NoContent();
        }
    }
}

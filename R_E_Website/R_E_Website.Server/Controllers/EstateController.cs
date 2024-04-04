using Microsoft.AspNetCore.Mvc;
using R_E_Website.Server.GenericRepository;
using R_E_Website.Server.Models;

namespace R_E_Website.Server.Controllers
{
    [ApiController]
    [Route("[api/controller]")]
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
            var estates = await _estateRepository.GetAllAsync();
            return Ok(estates);
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult> GetEstateById(int id)
        {
            var estate = await _estateRepository.GetByIdAsync(id);

            if (estate == null)
            {
                return NotFound();
            }

            return Ok(estate);
        }

        [HttpPost]
        public async Task<ActionResult> CreateEstate([FromBody] Estate estate)
        {
            if (estate == null)
            {
                return BadRequest();
            }

            await _estateRepository.InsertAsync(estate);

            return CreatedAtAction(nameof(GetEstateById), new { id = estate.Id }, estate);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateEstate(int id, [FromBody] Estate estate)
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

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEstate(int id)
        {
            var existingEstate = await _estateRepository.GetByIdAsync(id);
            if (existingEstate == null)
            {
                return NotFound();
            }
            await _estateRepository.DeleteAsync(id);

            return NoContent();
        }
    }
}

using Microsoft.AspNetCore.Mvc;
using R_E_Website.Server.GenericRepository;
using R_E_Website.Server.Models;

namespace R_E_Website.Server.Controllers
{
    [ApiController]
    [Route("[api/controller]")]
    public class RequestEstateController : ControllerBase
    {
        private IGenericRepository<RequestEstate> _requestEstateRepository;
        public RequestEstateController(IGenericRepository<RequestEstate> requestEstateRepository)
        {
            _requestEstateRepository = requestEstateRepository;
        }
        [HttpGet]
        public async Task<ActionResult> GetRequestsEstate()
        {
            var requestEstates = await _requestEstateRepository.GetAllAsync();
            return Ok(requestEstates);
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult> GetRequestEstateById(int id)
        {
            var requestEstate = await _requestEstateRepository.GetByIdAsync(id);

            if (requestEstate == null)
            {
                return NotFound();
            }

            return Ok(requestEstate);
        }

        [HttpPost]
        public async Task<ActionResult> CreateRequestEstate([FromBody] RequestEstate requestEstate)
        {
            if (requestEstate == null)
            {
                return BadRequest();
            }

            await _requestEstateRepository.InsertAsync(requestEstate);

            return CreatedAtAction(nameof(GetRequestEstateById), new { id = requestEstate.Id }, requestEstate);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateRequestEstate(int id, [FromBody] RequestEstate requestEstate)
        {
            if (requestEstate == null || id != requestEstate.Id)
            {
                return BadRequest();
            }

            var existingRequestEstate = await _requestEstateRepository.GetByIdAsync(id);
            if (existingRequestEstate == null)
            {
                return NotFound();
            }

            await _requestEstateRepository.UpdateAsync(existingRequestEstate);

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRequestEstate(int id)
        {
            var existingRequestEstate = await _requestEstateRepository.GetByIdAsync(id);
            if (existingRequestEstate == null)
            {
                return NotFound();
            }
            await _requestEstateRepository.DeleteAsync(id);

            return NoContent();
        }
    }
}

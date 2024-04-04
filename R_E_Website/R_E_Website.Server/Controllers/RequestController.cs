using Microsoft.AspNetCore.Mvc;
using R_E_Website.Server.GenericRepository;
using R_E_Website.Server.Models;

namespace R_E_Website.Server.Controllers
{
    public class RequestController : ControllerBase
    {
        private IGenericRepository<Request> _requestRepository;
        public RequestController(IGenericRepository<Request> requestRepository)
        {
            _requestRepository = requestRepository;
        }
        [HttpGet]
        public async Task<ActionResult> GetRequests()
        {
            var requests = await _requestRepository.GetAllAsync();
            return Ok(requests);
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult> GetRequestById(int id)
        {
            var request = await _requestRepository.GetByIdAsync(id);

            if (request == null)
            {
                return NotFound();
            }

            return Ok(request);
        }

        [HttpPost]
        public async Task<ActionResult> CreateRequest([FromBody] Request request)
        {
            if (request == null)
            {
                return BadRequest();
            }

            await _requestRepository.InsertAsync(request);

            return CreatedAtAction(nameof(GetRequestById), new { id = request.Id }, request);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateRequest(int id, [FromBody] Request request)
        {
            if (request == null || id != request.Id)
            {
                return BadRequest();
            }

            var existingRequest = await _requestRepository.GetByIdAsync(id);
            if (existingRequest == null)
            {
                return NotFound();
            }

            await _requestRepository.UpdateAsync(existingRequest);

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRequest(int id)
        {
            var existingRequest = await _requestRepository.GetByIdAsync(id);
            if (existingRequest == null)
            {
                return NotFound();
            }
            await _requestRepository.DeleteAsync(id);

            return NoContent();
        }
    }
}

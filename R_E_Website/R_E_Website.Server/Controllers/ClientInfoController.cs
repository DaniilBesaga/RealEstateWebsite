using Microsoft.AspNetCore.Mvc;
using R_E_Website.Server.GenericRepository;
using R_E_Website.Server.Models;

namespace R_E_Website.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ClientInfoController : ControllerBase
    {
        private IGenericRepository<ClientInfo> _clientInfoRepository;
        public ClientInfoController(IGenericRepository<ClientInfo> clientInfoRepository)
        {
            _clientInfoRepository = clientInfoRepository;
        }
        [HttpGet]
        public async Task<ActionResult> GetClientsInfo()
        {
            var clientsInfo = await _clientInfoRepository.GetAllAsync();
            return Ok(clientsInfo);
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult> GetClientInfoById(int id)
        {
            var clientInfo = await _clientInfoRepository.GetByIdAsync(id);

            if (clientInfo == null)
            {
                return NotFound();
            }

            return Ok(clientInfo);
        }

        [HttpPost]
        public async Task<ActionResult> CreateClientInfo([FromBody] ClientInfo clientInfo)
        {
            if (clientInfo == null)
            {
                return BadRequest();
            }

            await _clientInfoRepository.InsertAsync(clientInfo);

            return CreatedAtAction(nameof(GetClientInfoById), new { id = clientInfo.Id }, clientInfo);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateClientInfo(int id, [FromBody] ClientInfo clientInfo)
        {
            if (clientInfo == null || id != clientInfo.Id)
            {
                return BadRequest();
            }

            var existingClientInfo = await _clientInfoRepository.GetByIdAsync(id);
            if (existingClientInfo == null)
            {
                return NotFound();
            }

            await _clientInfoRepository.UpdateAsync(existingClientInfo);

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteClientInfo(int id)
        {
            var existingClientInfo = await _clientInfoRepository.GetByIdAsync(id);
            if (existingClientInfo == null)
            {
                return NotFound();
            }
            await _clientInfoRepository.DeleteAsync(id);

            return NoContent();
        }
    }
}

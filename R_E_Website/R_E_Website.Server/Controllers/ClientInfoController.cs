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
            try
            {
                var clientsInfo = await _clientInfoRepository.GetAllAsync();
                return Ok(clientsInfo);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult> GetClientInfoById(int id)
        {
            try
            {
                var clientInfo = await _clientInfoRepository.GetByIdAsync(id);

                if (clientInfo == null)
                {
                    return NotFound();
                }
                return Ok(clientInfo);
            }
            catch
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
            
        }

        [HttpPost]
        public async Task<ActionResult> CreateClientInfo([FromBody] ClientInfo clientInfo)
        {
            try
            {
                if (clientInfo == null)
                {
                    return BadRequest();
                }

                await _clientInfoRepository.InsertAsync(clientInfo);
                return CreatedAtAction(nameof(GetClientInfoById), new { id = clientInfo.Id }, clientInfo);
            }
            catch
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateClientInfo(int id, [FromBody] ClientInfo clientInfo)
        {
            try
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
            }
            catch 
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteClientInfo(int id)
        {
            try
            {
                var existingClientInfo = await _clientInfoRepository.GetByIdAsync(id);
                if (existingClientInfo == null)
                {
                    return NotFound();
                }
                await _clientInfoRepository.DeleteAsync(id);

            }
            catch
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
            return NoContent();
        }
    }
}

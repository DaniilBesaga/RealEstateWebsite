using Azure.Core;
using Microsoft.AspNetCore.Mvc;
using R_E_Website.Server.GenericRepository;
using R_E_Website.Server.Models;
using System.Text.Json;

namespace R_E_Website.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class OrderServiceController: ControllerBase
    {
        private IGenericRepository<OrderService> _orderServiceRepository;
        public OrderServiceController(IGenericRepository<OrderService> orderServiceRepository)
        {
            _orderServiceRepository = orderServiceRepository;
        }
        [HttpGet]
        public async Task<ActionResult> GetOrdersInfo()
        {
            try
            {
                var orders = await _orderServiceRepository.GetAllAsync();
                return Ok(orders);
            }
            catch 
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
            
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult> GetOrderById(int id)
        {
            try
            {
                var order = await _orderServiceRepository.GetByIdAsync(id);

                if (order == null)
                {
                    return NotFound();
                }

                return Ok(order);
            }
            catch 
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
           
        }

        [HttpPost]
        public async Task<ActionResult> CreateOrder([FromBody] JsonDocument order)
        {
            try
            {
                var options = new JsonSerializerOptions
                {
                    PropertyNameCaseInsensitive = true
                };
                OrderService? deserializedObject = JsonSerializer.Deserialize<OrderService>
                    (order.RootElement.GetRawText(), options);
                if (deserializedObject == null)
                {
                    return BadRequest();
                }

                await _orderServiceRepository.InsertAsync(deserializedObject);

                Utils.Utils.SendOrderServiceRequest(deserializedObject);

                return CreatedAtAction(nameof(GetOrderById), new { id = deserializedObject.Id }, order);

            }
            catch 
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateOrder(int id, [FromBody] OrderService order)
        {
            try
            {
                if (order == null || id != order.Id)
                {
                    return BadRequest();
                }

                var existingOrder = await _orderServiceRepository.GetByIdAsync(id);
                if (existingOrder == null)
                {
                    return NotFound();
                }

                await _orderServiceRepository.UpdateAsync(existingOrder);
            }
            catch
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
            
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteOrder(int id)
        {
            try
            {
                var existingOrder = await _orderServiceRepository.GetByIdAsync(id);
                if (existingOrder == null)
                {
                    return NotFound();
                }
                await _orderServiceRepository.DeleteAsync(id);

            }
            catch 
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
           
            return NoContent();
        }
    }
}

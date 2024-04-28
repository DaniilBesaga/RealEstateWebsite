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
            var orders = await _orderServiceRepository.GetAllAsync();
            return Ok(orders);
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult> GetOrderById(int id)
        {
            var order = await _orderServiceRepository.GetByIdAsync(id);

            if (order == null)
            {
                return NotFound();
            }

            return Ok(order);
        }

        [HttpPost]
        public async Task<ActionResult> CreateOrder([FromBody] JsonDocument order)
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

            return CreatedAtAction(nameof(GetOrderById), new { id = deserializedObject.Id }, order);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateOrder(int id, [FromBody] OrderService order)
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

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteOrder(int id)
        {
            var existingOrder = await _orderServiceRepository.GetByIdAsync(id);
            if (existingOrder == null)
            {
                return NotFound();
            }
            await _orderServiceRepository.DeleteAsync(id);

            return NoContent();
        }
    }
}

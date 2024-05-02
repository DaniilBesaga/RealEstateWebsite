using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using R_E_Website.Server.GenericRepository;
using R_E_Website.Server.Models;
using System.Numerics;

namespace R_E_Website.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ComplexController : ControllerBase
    {
        private IGenericRepository<Models.Complex> _complexRepository;
        public ComplexController(IGenericRepository<Models.Complex> complexRepository)
        {
            _complexRepository = complexRepository;
        }
        [HttpGet]
        public async Task<ActionResult> GetComplexes()
        {
            try
            {
                var complexes = await _complexRepository.GetAllAsync();
                return Ok(complexes);
            }
            catch
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult> GetComplexById(int id)
        {
            try
            {
                var complex = await _complexRepository.GetByIdAsync(id);

                if (complex == null)
                {
                    return NotFound();
                }
                return Ok(complex);
            }
            catch
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
            
        }

        [HttpPost]
        public async Task<ActionResult> CreateComplex([FromBody] Models.Complex complex)
        {
            try
            {
                if (complex == null)
                {
                    return BadRequest();
                }

                await _complexRepository.InsertAsync(complex);

                return CreatedAtAction(nameof(GetComplexById), new { id = complex.Id }, complex);
            }
            catch
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateComplex(int id, [FromBody] Models.Complex complex)
        {
            try
            {
                if (complex == null || id != complex.Id)
                {
                    return BadRequest();
                }

                var existingComplex = await _complexRepository.GetByIdAsync(id);
                if (existingComplex == null)
                {
                    return NotFound();
                }

                await _complexRepository.UpdateAsync(existingComplex);
            }
            catch
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
            
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteComplex(int id)
        {
            try
            {
                var existingComplex = await _complexRepository.GetByIdAsync(id);
                if (existingComplex == null)
                {
                    return NotFound();
                }
                await _complexRepository.DeleteAsync(id);
            }
            catch 
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }

            return NoContent();
        }
    }
}

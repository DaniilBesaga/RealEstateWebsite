using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using R_E_Website.Server.GenericRepository;
using R_E_Website.Server.Models;
using System.Numerics;

namespace R_E_Website.Server.Controllers
{
    public class ComplexController : ControllerBase
    {
        private IGenericRepository<Newsletter> _complexRepository;
        public ComplexController(IGenericRepository<Newsletter> complexRepository)
        {
            _complexRepository = complexRepository;
        }
        [HttpGet]
        public async Task<ActionResult> GetCategory()
        {
            var complexes = await _complexRepository.GetAllAsync();
            return Ok(complexes);
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult> GetCategoryById(Guid id)
        {
            var complex = await _complexRepository.GetByIdAsync(id);

            if (complex == null)
            {
                return NotFound();
            }

            return Ok(complex);
        }

        [HttpPost]
        public async Task<ActionResult> CreateCategory([FromBody] Newsletter complex)
        {
            if (complex == null)
            {
                return BadRequest();
            }

            await _complexRepository.InsertAsync(complex);

            return CreatedAtAction(nameof(GetCategoryById), new { id = complex.Id }, complex);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateCategory(int id, [FromBody] Newsletter complex)
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

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCategory(int id)
        {
            var existingComplex = await _complexRepository.GetByIdAsync(id);
            if (existingComplex == null)
            {
                return NotFound();
            }
            await _complexRepository.DeleteAsync(id);

            return NoContent();
        }
    }
}

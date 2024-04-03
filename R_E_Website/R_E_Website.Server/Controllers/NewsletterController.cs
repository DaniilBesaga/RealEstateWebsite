using Microsoft.AspNetCore.Mvc;
using R_E_Website.Server.GenericRepository;
using R_E_Website.Server.Models;

namespace R_E_Website.Server.Controllers
{
    public class NewsletterController : ControllerBase
    {
        private IGenericRepository<Newsletter> _newsletterRepository;
        public NewsletterController(IGenericRepository<Newsletter> newsletterRepository)
        {
            _newsletterRepository = newsletterRepository;
        }
        [HttpGet]
        public async Task<ActionResult> GetCategory()
        {
            var newsletters = await _newsletterRepository.GetAllAsync();
            return Ok(newsletters);
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult> GetCategoryById(Guid id)
        {
            var newsletter = await _newsletterRepository.GetByIdAsync(id);

            if (newsletter == null)
            {
                return NotFound();
            }

            return Ok(newsletter);
        }

        [HttpPost]
        public async Task<ActionResult> CreateCategory([FromBody] Newsletter newsletter)
        {
            if (newsletter == null)
            {
                return BadRequest();
            }

            await _newsletterRepository.InsertAsync(newsletter);

            return CreatedAtAction(nameof(GetCategoryById), new { id = newsletter.Id }, newsletter);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateCategory(int id, [FromBody] Newsletter entity)
        {
            if (entity == null || id != entity.Id)
            {
                return BadRequest();
            }

            var existingNewsletter = await _newsletterRepository.GetByIdAsync(id);
            if (existingNewsletter == null)
            {
                return NotFound();
            }

            await _newsletterRepository.UpdateAsync(existingNewsletter);

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCategory(int id)
        {
            var existingCategory = await _newsletterRepository.GetByIdAsync(id);
            if (existingCategory == null)
            {
                return NotFound();
            }
            await _newsletterRepository.DeleteAsync(id);

            return NoContent();
        }
    }
}

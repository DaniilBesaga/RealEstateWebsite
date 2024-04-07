using Microsoft.AspNetCore.Mvc;
using R_E_Website.Server.GenericRepository;
using R_E_Website.Server.Models;

namespace R_E_Website.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ReviewController : ControllerBase
    {
        private IGenericRepository<Review> _reviewsRepository;
        public ReviewController(IGenericRepository<Review> reviewsRepository)
        {
            _reviewsRepository = reviewsRepository;
        }
        [HttpGet]
        public async Task<ActionResult> GetReviews()
        {
            var reviews = await _reviewsRepository.GetAllAsync();
            return Ok(reviews.ToArray());
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult> GetReviewById(int id)
        {
            var review = await _reviewsRepository.GetByIdAsync(id);

            if (review == null)
            {
                return NotFound();
            }

            return Ok(review);
        }

        [HttpPost]
        public async Task<ActionResult> CreateReview([FromBody] Review review)
        {
            if (review == null)
            {
                return BadRequest();
            }

            await _reviewsRepository.InsertAsync(review);

            return CreatedAtAction(nameof(GetReviewById), new { id = review.Id }, review);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateReview(int id, [FromBody] Review review)
        {
            if (review == null || id != review.Id)
            {
                return BadRequest();
            }

            var existingReview = await _reviewsRepository.GetByIdAsync(id);
            if (existingReview == null)
            {
                return NotFound();
            }

            await _reviewsRepository.UpdateAsync(existingReview);

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteReview(int id)
        {
            var existingReview = await _reviewsRepository.GetByIdAsync(id);
            if (existingReview == null)
            {
                return NotFound();
            }
            await _reviewsRepository.DeleteAsync(id);

            return NoContent();
        }
    }
}

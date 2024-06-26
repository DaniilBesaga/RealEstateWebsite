﻿using Azure.Core;
using Microsoft.AspNetCore.Mvc;
using R_E_Website.Server.Enums;
using R_E_Website.Server.GenericRepository;
using R_E_Website.Server.Models;
using System.Text.Json;
using System.Text.Json.Nodes;

namespace R_E_Website.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class NewsletterController : ControllerBase
    {
        private IGenericRepository<Newsletter> _newsletterRepository;
        public NewsletterController(IGenericRepository<Newsletter> newsletterRepository)
        {
            _newsletterRepository = newsletterRepository;
        }
        [HttpGet]
        public async Task<ActionResult> GetNewsletters()
        {
            try
            {
                var newsletters = await _newsletterRepository.GetAllAsync();
                return Ok(newsletters);
            }
            catch
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
            
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult> GetNewsletterById(int id)
        {
            try
            {
                var newsletter = await _newsletterRepository.GetByIdAsync(id);

                if (newsletter == null)
                {
                    return NotFound();
                }

                return Ok(newsletter);
            }
            catch 
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
            
        }

        [HttpPost]
        public async Task<ActionResult> CreateNewsletter([FromBody] JsonDocument newsletter)
        {
            try
            {
                var options = new JsonSerializerOptions
                {
                    PropertyNameCaseInsensitive = true
                };
                Newsletter? deserializedObject = JsonSerializer.Deserialize<Newsletter>
                    (newsletter.RootElement.GetRawText(), options)!;

                List<EstateType> est = new List<EstateType>();
                string name = newsletter.RootElement.GetProperty("estateType").GetString()!;
                string[] values = name.Split(new char[] { ',' }, StringSplitOptions.RemoveEmptyEntries);

                foreach (var value in values)
                {
                    if (Enum.TryParse(value.Trim(), true, out EstateType parsedEstateType))
                    {
                        est.Add(parsedEstateType);
                    }
                    else
                    {
                    }
                }

                deserializedObject.EstateTypes = est.ToArray();

                if (newsletter == null)
                {
                    return BadRequest();
                }

                await _newsletterRepository.InsertAsync(deserializedObject);

                Utils.Utils.SendEmail(deserializedObject);

                return CreatedAtAction(nameof(GetNewsletterById), new { id = deserializedObject.Id }, deserializedObject);

            }
            catch 
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateNewsletter(int id, [FromBody] Newsletter newsletter)
        {
            try
            {
                if (newsletter == null || id != newsletter.Id)
                {
                    return BadRequest();
                }

                var existingNewsletter = await _newsletterRepository.GetByIdAsync(id);
                if (existingNewsletter == null)
                {
                    return NotFound();
                }

                await _newsletterRepository.UpdateAsync(existingNewsletter);
            }
            catch 
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
           
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteNewsletter(int id)
        {
            try
            {
                var existingCategory = await _newsletterRepository.GetByIdAsync(id);
                if (existingCategory == null)
                {
                    return NotFound();
                }
                await _newsletterRepository.DeleteAsync(id);
            }
            catch
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
            
            return NoContent();
        }
    }
}

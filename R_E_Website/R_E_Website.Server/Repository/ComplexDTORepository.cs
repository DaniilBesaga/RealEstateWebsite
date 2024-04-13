using Azure.Storage.Blobs;
using Microsoft.EntityFrameworkCore;
using R_E_Website.Server.Data;
using R_E_Website.Server.GenericRepository;
using R_E_Website.Server.Interfaces;
using R_E_Website.Server.Models;

namespace R_E_Website.Server.Repository
{
    public class ComplexDTORepository : IComplexDTORepository
    {
        private DatabaseContext _context = null;
        public IConfiguration Configuration { get; }
        public ComplexDTORepository(DatabaseContext context, IConfiguration configuration)
        {
            _context = context;
            Configuration = configuration;
        }
        public async Task<ComplexDTO> GetComplexShortcutByNameAsync(int name)
        {
            var complex = await _context.Complexes.FirstOrDefaultAsync
                (i => i.Id == name);
            return new ComplexDTO()
            {
                Id = complex.Id,
                ComplexName = complex.ComplexName,
                ImgUrl = complex.ImgsUrlFolder + "/1"
            };
        }
        public async Task<IEnumerable<ComplexDTO>> GetAllComplexesShortcutAsync()
        {
            var complexes = await _context.Complexes.ToListAsync();

            string connectionString = Configuration["ConnectionStrings:AzureConnection"];
            BlobContainerClient blobContainerClient =
                new BlobContainerClient(connectionString, "complexes");

            var bs = blobContainerClient.GetBlobs();
            var firstImages = bs
            .GroupBy(blob => blob.Name.Split('/')[0])
            .Select(group => group.First())
            .Select(x => x.Name.Split("/")[1])
            .ToList();

            var estateDTOs = complexes.OrderBy(c=>c.ComplexName).Select((complex, index) => new ComplexDTO
                {
                    Id = complex.Id,
                    ComplexName = complex.ComplexName,
                    ImgUrl = complex.ImgsUrlFolder + $"/{firstImages[index]}",
                }).ToList();

            return estateDTOs;
        }

    }
}

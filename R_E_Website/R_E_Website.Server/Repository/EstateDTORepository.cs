using Azure.Storage.Blobs;
using Microsoft.EntityFrameworkCore;
using R_E_Website.Server.Data;
using R_E_Website.Server.Enums;
using R_E_Website.Server.GenericRepository;
using R_E_Website.Server.Interfaces;
using R_E_Website.Server.Models;
using System.Collections.Generic;
using static System.Reflection.Metadata.BlobBuilder;

namespace R_E_Website.Server.Repository
{
    public class EstateDTORepository : IEstateDTORepository
    {
        private DatabaseContext _context = null;
        public EstateDTORepository()
        {
            _context = new DatabaseContext();
        }
        public EstateDTORepository(DatabaseContext context)
        {
            _context = context;
        }
        public async Task<EstateDTO> GetEstateShortcutByIdAsync(int id)
        {
            var estate = await _context.Estates.FirstOrDefaultAsync
                (i => i.Id == id);
            return new EstateDTO()
            {
                Id = estate.Id,
                EstateAddress = estate.EstateAddress,
                EstateFloor = estate.EstateFloor,
                EstateFloorCount = estate.NumberOfFloors,
                EstateSquare = estate.TotalSquare,
                ImgUrl = estate.ImgsUrlFolder + "/1",
                PriceUah = estate.PriceUah,
                PriceUsd = estate.PriceUsd
            };
        }

        public async Task<IEnumerable<EstateDTO>> GetAllEstatesShortcutAsync(string estateType, string sort)
        {
            var estates = await _context.Estates.ToListAsync();

            Enum.TryParse(estateType, true, out Enums.EstateType localEstateType);
            
            string connectionString = "DefaultEndpointsProtocol=https;AccountName=profirealt;AccountKey=tvTsQXf/+qyEuXBntsjOPQlEa7HakqgHaf7EJFPz9F52gGnc7LppbkUmNtGMH1JQzmtZ5v3ptDBN+ASt0hWoMA==;EndpointSuffix=core.windows.net";

            BlobContainerClient blobContainerClient = 
                new BlobContainerClient(connectionString,
                    $"{estateType}");

            var bs = blobContainerClient.GetBlobs();
            var firstImages = bs
            .GroupBy(blob => blob.Name.Split('/')[0])  
            .Select(group => group.First())
            .Select(x => x.Name.Split("/")[1])  
            .ToList();

            var estateDTOs = estates.Where(estate=>estate.EstateType ==
            localEstateType)
                .Select((estate, index) => new EstateDTO
            {
                Id = estate.Id,
                EstateAddress = estate.EstateAddress,
                EstateFloor = estate.EstateFloor,
                EstateFloorCount = estate.NumberOfFloors,
                EstateSquare = estate.TotalSquare,
                EstateRoomCount = estate.RoomCount,
                ImgUrl = estate.ImgsUrlFolder + $"/{firstImages[index]}",
                PriceUah = estate.PriceUah,
                PriceUsd = estate.PriceUsd
            }).ToList();

            switch (sort)
            {
                case "any":
                    break;
                case "descending":
                    estateDTOs.OrderByDescending(x => x.PriceUah);
                    break;
                case "ascending":
                    estateDTOs.OrderBy(x => x.PriceUah);
                    break;
                case "":
                    break;
            }

            return estateDTOs;
        }

        public async Task<IEnumerable<EstateDTO>> GetAllEstatesFilterAsync(FilterEstate filterEstate)
        {
            var estates = await _context.Estates.ToListAsync();

            string connectionString = "DefaultEndpointsProtocol=https;AccountName=profirealt;AccountKey=tvTsQXf/+qyEuXBntsjOPQlEa7HakqgHaf7EJFPz9F52gGnc7LppbkUmNtGMH1JQzmtZ5v3ptDBN+ASt0hWoMA==;EndpointSuffix=core.windows.net";

            BlobContainerClient blobContainerClient =
                new BlobContainerClient(connectionString,
                    $"{filterEstate.EstateType}");

            var bs = blobContainerClient.GetBlobs();
            var firstImages = bs
            .GroupBy(blob => blob.Name.Split('/')[0])
            .Select(group => group.First())
            .Select(x => x.Name.Split("/")[1])
            .ToList();

            var estateDTOs = estates.Where(estate => estate.EstateType ==
            filterEstate.EstateType && estate.EstateAddress.Contains(filterEstate.EstateLocation)
            && estate.TotalSquare >= filterEstate.TotalSquareFrom 
            && estate.TotalSquare <= filterEstate.TotalSquareTo
            && (estate.PriceUah >= filterEstate.PriceRangeFrom
            && estate.PriceUah <= filterEstate.PriceRangeTo)
            && estate.RoomCount >= filterEstate.RoomsCountFrom
            && estate.RoomCount <= filterEstate.RoomsCountTo)
                .Select((estate, index) => new EstateDTO
                {
                    Id = estate.Id,
                    EstateAddress = estate.EstateAddress,
                    EstateFloor = estate.EstateFloor,
                    EstateFloorCount = estate.NumberOfFloors,
                    EstateSquare = estate.TotalSquare,
                    EstateRoomCount = estate.RoomCount,
                    ImgUrl = estate.ImgsUrlFolder + $"/{firstImages[index]}",
                    PriceUah = estate.PriceUah,
                    PriceUsd = estate.PriceUsd
                }).ToList();

            return estateDTOs;
        }
    }
}

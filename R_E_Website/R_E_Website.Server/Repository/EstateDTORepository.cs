using Azure.Storage.Blobs;
using Microsoft.EntityFrameworkCore;
using R_E_Website.Server.Data;
using R_E_Website.Server.Enums;
using R_E_Website.Server.GenericRepository;
using R_E_Website.Server.Interfaces;
using R_E_Website.Server.Models;
using System.Collections.Generic;

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
            if(estate!= null)
            {
                return new EstateDTO()
                {
                    Id = estate.Id,
                    EstateAddress = estate.EstateAddress,
                    EstateFloor = estate.EstateFloor,
                    EstateFloorCount = estate.NumberOfFloors,
                    EstateSquare = estate.TotalSquare,
                    ImgUrl = estate.ImgsUrlFolder + $"/{Utils.Utils.AzureConnetionImages(estate.EstateType.ToString().ToLower()).First()}",
                    PriceUah = estate.PriceUah,
                    PriceUsd = estate.PriceUsd
                };
            }
            else
            {
                throw new Exception("Estate not found");
            }
        }

        public async Task<IEnumerable<EstateDTO>> GetAllEstatesShortcutAsync(string estateType, string sort)
        {
            var estates = await _context.Estates.ToListAsync();

            Enum.TryParse(estateType, true, out EstateType localEstateType);
            
            var firstImages = Utils.Utils.AzureConnetionImages(estateType);

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
                    estateDTOs.Sort((a, b) => b.PriceUah - a.PriceUah);
                    break;
                case "ascending":
                    estateDTOs.Sort((a, b) => a.PriceUah - b.PriceUah);
                    break;
                case "":
                    break;
            }

            return estateDTOs;
        }

        public async Task<IEnumerable<EstateDTO>> GetAllEstatesFilterAsync(FilterEstate filterEstate)
        {
            var estates = await _context.Estates.ToListAsync();

            var firstImages = Utils.Utils.AzureConnetionImages(filterEstate.EstateType.ToString().ToLower());
            
            var estateDTOs = estates.Where(estate => estate.EstateType ==
            filterEstate.EstateType).Where(estate =>
            TestRange(estate.TotalSquare, filterEstate.TotalSquareFrom, filterEstate.TotalSquareTo)

            && TestRange(estate.PriceUah, filterEstate.PriceRangeFrom, filterEstate.PriceRangeTo)

            && TestRange(estate.RoomCount, filterEstate.RoomsCountFrom, filterEstate.RoomsCountTo)
            )
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

        public async Task<int> GetObjectCount(int catalogType)
        {
            var estates = await _context.Estates.ToListAsync();

            EstateType localEstateType = (EstateType)catalogType;

            return estates.Count(e=>e.EstateType==localEstateType);

        }

        bool TestRange(int? numberToCheck, int? bottom, int? top)
        {
            return (numberToCheck >= bottom && numberToCheck <= top);
        }
    }
}

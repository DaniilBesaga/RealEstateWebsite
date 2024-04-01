using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using R_E_Website.Server.Enums;

namespace R_E_Website.Server.Converters
{
    public class EstateTypeArrayConverter : ValueConverter<EstateType[], string>
    {
        public EstateTypeArrayConverter(ConverterMappingHints mappingHints = null)
            : base(
                  v => ConvertToString(v),
                  v => ConvertToArray(v),
                  mappingHints)
        { }

        private static string ConvertToString(EstateType[] v) => string.Join(",", Array.ConvertAll(v, x => x.ToString()));
        private static EstateType[] ConvertToArray(string v) => Array.ConvertAll(v.Split(','), Enum.Parse<EstateType>);
    }

}

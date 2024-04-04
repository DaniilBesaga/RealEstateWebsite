using Microsoft.EntityFrameworkCore;
using R_E_Website.Server.Data;
using R_E_Website.Server.GenericRepository;
using R_E_Website.Server.Interfaces;
using R_E_Website.Server.Repository;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddScoped(typeof(IGenericRepository<>), typeof(GenericRepository<>));
builder.Services.AddScoped<IComplexDTORepository, ComplexDTORepository>();
builder.Services.AddScoped<IEstateDTORepository, EstateDTORepository>();

var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

builder.Services.AddDbContext<DatabaseContext>(options =>
{
    options.UseSqlServer(connectionString);
});
var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();

// Configure the HTTP request pipeline.

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.MapFallbackToFile("/index.html");

app.Run();

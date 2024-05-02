
using Azure.Storage.Blobs;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Azure;
using R_E_Website.Server.Data;
using R_E_Website.Server.Enums;
using R_E_Website.Server.Models;
using System.Collections.Generic;

namespace R_E_Website.Server.GenericRepository
{
    public class GenericRepository<T> : IGenericRepository<T> where T : class
    {
        private DatabaseContext _context = null;
        
        private DbSet<T> dbSet = null;
        public IConfiguration Configuration { get; }

        public GenericRepository()
        {
            _context = new DatabaseContext();
            dbSet = _context.Set<T>();
        }

        public GenericRepository(DatabaseContext context, IConfiguration configuration)
        {
            _context = context;
            dbSet = _context.Set<T>();
            Configuration = configuration;
        }

        public async Task DeleteAsync(object id)
        {
            var entity = await dbSet.FindAsync(id);
            if (_context.Entry(entity).State == EntityState.Detached)
            {
                dbSet.Attach(entity);
            }
            dbSet.Remove(entity);
            //await SaveAsync(); 
        }

        public async Task<IEnumerable<T>> GetAllAsync()
        {
            return await dbSet
                .ToListAsync();
        }

        public async Task<T> GetByIdAsync(object id)
        {
            var result = await dbSet.FindAsync(id);
            if(result is Complex || result is Estate)
            {
                string connectionString = Configuration["ConnectionStrings:AzureConnection"];
                switch (result)
                {
                    case Complex:
                        Complex c = result as Complex;
                        BlobContainerClient blobContainerClient =
                            new BlobContainerClient(connectionString, "complexes");

                        var bs = blobContainerClient.GetBlobs(prefix: $"{c.ComplexName}" + "/");
                        string url = c.ImgsUrlFolder.Split($"{c.ComplexName.ToLower()}")[0];
                        c.ImgsUrlFolder = "";
                        foreach (var image in bs)
                        {
                            c.ImgsUrlFolder += url + image.Name + ",";
                        }
                        break;
                    case Estate:
                        Estate e = result as Estate;
                        BlobContainerClient blobContainerClient2 =
                            new BlobContainerClient(connectionString, e.EstateType.ToString().ToLower()+"s");

                        var bs2 = blobContainerClient2.GetBlobs(prefix: $"{e.EstateAddressEng}" + "/");
                        string url2 = e.ImgsUrlFolder.Split($"{e.EstateAddressEng.ToLower()}")[0] + "/";
                        e.ImgsUrlFolder = "";
                        foreach (var image in bs2)
                        {
                            e.ImgsUrlFolder += url2 + image.Name.Split("/")[1] + ",";
                        }
                        break;
                }
                
            }
            return result;
        }

        public async Task InsertAsync(T entity)
        {
            dbSet.Add(entity);
            //await SaveAsync();
        }

        public async Task SaveAsync()
        {
            await _context.SaveChangesAsync();
        }

        public async Task UpdateAsync(T entity)
        {
            dbSet.Attach(entity);
            _context.Entry(entity).State = EntityState.Modified;
            //await SaveAsync();
        }
    }
}

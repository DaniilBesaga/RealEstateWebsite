
using Microsoft.EntityFrameworkCore;
using R_E_Website.Server.Data;
using R_E_Website.Server.Models;
using System.Collections.Generic;

namespace R_E_Website.Server.GenericRepository
{
    public class GenericRepository<T> : IGenericRepository<T> where T : class
    {
        private DatabaseContext _context = null;
        
        private DbSet<T> dbSet = null;
        
        public GenericRepository()
        {
            _context = new DatabaseContext();
            dbSet = _context.Set<T>();
        }

        public GenericRepository(DatabaseContext context)
        {
            _context = context;
            dbSet = _context.Set<T>();
        }

        public async Task DeleteAsync(object id)
        {
            try
            {
                var entity = await dbSet.FindAsync(id);
                if (_context.Entry(entity).State == EntityState.Detached)
                {
                    dbSet.Attach(entity);
                }
                dbSet.Remove(entity);
                //await SaveAsync();
            }
            catch (Exception ex)
            {
                string errmsg = ex.Message + "\n" + ex.StackTrace;
            }

            return;
        }

        public async Task<IEnumerable<T>> GetAllAsync()
        {
            return await dbSet
                .ToListAsync();
        }

        public async Task<T> GetByIdAsync(object id)
        {
            var result = await dbSet.FindAsync(id);
            return result;
        }

        public async Task InsertAsync(T entity)
        {
            try
            {
                dbSet.Add(entity);
                await SaveAsync();
            }
            catch (Exception ex)
            {
                string errmsg = ex.Message + "\n" + ex.StackTrace;
            }

            return;
        }

        public async Task SaveAsync()
        {
            await _context.SaveChangesAsync();
        }

        public async Task UpdateAsync(T entity)
        {
            try
            {
                dbSet.Attach(entity);
                _context.Entry(entity).State = EntityState.Modified;
                await SaveAsync();
            }
            catch (Exception ex)
            {
                string errmsg = ex.Message + "\n" + ex.StackTrace;
            }

            return;
        }
    }
}

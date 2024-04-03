using Microsoft.EntityFrameworkCore;
using R_E_Website.Server.Models;

namespace R_E_Website.Server.Data
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext()
        {
        }
        public DatabaseContext(DbContextOptions dbContextOptions) : base(dbContextOptions)
        { }

        public DbSet<ClientInfo> ClientsInfo { get; set; }
        public DbSet<Complex> Complexes { get; set; }
        public DbSet<Estate> Estates { get; set; }
        public DbSet<Newsletter> Newsletters { get; set; }
        public DbSet<Request> Requests { get; set; }
        public DbSet<RequestEstate> RequestsEstate { get; set; }
        public DbSet<Review> Reviews { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //modelBuilder.Entity<Attribute>()
            //        .Property(a => a.Type)
            //        .HasConversion<string>();

            //modelBuilder.Entity<CartItem>()
            //    .HasOne(ci => ci.User)
            //    .WithMany(u => u.CartItems)
            //    .HasForeignKey(ci => ci.UserId)
            //    .OnDelete(DeleteBehavior.ClientCascade);

            //modelBuilder.Entity<CartItem>()
            //    .HasOne(ci => ci.Product)
            //    .WithMany(p => p.CartItems)
            //    .HasForeignKey(ci => ci.ProductId)
            //    .OnDelete(DeleteBehavior.ClientCascade);

            //modelBuilder.Entity<User>()
            //    .HasOne(u => u.UserRole)
            //    .WithOne(r => r.User);

            modelBuilder.Entity<Request>()
                    .HasOne(r => r.ClientInfo)
                    .WithOne(c=>c.Request)
                    .HasForeignKey<ClientInfo>(c=>c.RequestId);
            modelBuilder.Entity<Request>()
                    .HasOne(r => r.EstateInfo)
                    .WithOne(e => e.Request)
                    .HasForeignKey<RequestEstate>(e => e.RequestId);
            modelBuilder.Entity<Request>()
                    .HasOne(r => r.EstateInfo)
                    .WithOne(i => i.Request)
                    .HasForeignKey<RequestEstate>(e => e.RequestId)
                    .OnDelete(DeleteBehavior.Cascade);
            modelBuilder.Entity<Request>()
                    .HasOne(r => r.ClientInfo)
                    .WithOne(c => c.Request)
                    .HasForeignKey<ClientInfo>(c => c.RequestId)
                    .OnDelete(DeleteBehavior.Cascade);
        }
    }
}

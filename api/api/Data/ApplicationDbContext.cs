using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Data
{
  public class ApplicationDbContext : DbContext
  {
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> opts) : base(opts)
    {
    }
    public DbSet<Cinema> Cinemas { get; set; }
  }
}

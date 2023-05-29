using Microsoft.EntityFrameworkCore;
using server.Domain;

namespace server.Models
{
  public class InvoiceContext : DbContext
  {
    public InvoiceContext(DbContextOptions<InvoiceContext> options) : base(options)
    { }

    public DbSet<Invoice> Invoice { get; set; } = null!;
  }
}
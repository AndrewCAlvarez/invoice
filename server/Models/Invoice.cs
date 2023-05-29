using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Domain
{
  public class Invoice
  {
    public long Id { get; set; }
    public string? Name { get; set; }
    public int Amount { get; set; }
    public bool Status { get; set; }
  }
}
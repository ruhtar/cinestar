using System.ComponentModel.DataAnnotations;

namespace api.Models
{

  public class Cinema
  {
    public int Id { get; set; }
    [Required]
    public string OwnerName { get; set; }
    [Required]
    public string CPF { get; set; }
    [Required]
    public string CinemaName { get; set; }
    [Required]
    public string Street { get; set; }
    public string? Description { get; set; }
  }
}

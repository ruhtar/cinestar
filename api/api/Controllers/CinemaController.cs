using api.Data;
using api.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
  [AllowAnonymous]
  [ApiController]
  [Route("cinemas")]
  public class CinemaController : ControllerBase
  {
    private readonly ApplicationDbContext _context;
    public CinemaController(ApplicationDbContext context)
    {
      _context = context;
    }

    [HttpGet]
    public ActionResult<List<Cinema>> GetCinemas()
    {
      return _context.Cinemas.ToList();
    }
    [HttpPost]
    public ActionResult AddCinemas([FromBody] Cinema cinema)
    {
      _context.Cinemas.Add(cinema);
      _context.SaveChanges();
      return Ok(cinema);
    }
  }
}

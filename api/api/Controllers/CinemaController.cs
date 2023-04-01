using api.Data;
using api.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

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
    [Route("/new")]
    [HttpPost]
    public ActionResult AddCinemas([FromBody] Cinema cinema)
    {
      //var cinemaExists = this.GetCinemaByName(cinema.CinemaName);
      //if (cinemaExists.Result() == 404) return BadRequest("Esse cinema já foi registrado.");
      _context.Cinemas.Add(cinema);
      _context.SaveChanges();
      return Ok(cinema);
    }
    [HttpGet("{nomeCinema}/{nomeCliente}")]
    public ActionResult<Cinema> GetCinemaByName(string CinemaName)
    {
      var entidade = _context.Cinemas
          .FromSqlInterpolated($"SELECT * FROM Cinemas WHERE CinemaName = {CinemaName}")
          .FirstOrDefault();

      if (entidade == null) return NotFound();
      
      return Ok(entidade);
    }
  }
}

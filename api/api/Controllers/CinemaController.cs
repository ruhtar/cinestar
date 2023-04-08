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

    [HttpGet("{id}")]
    public ActionResult<Cinema> GetCinemaById(int id)
    {
      var cinema = _context.Cinemas.Find(id);

      if (cinema == null)
      {
        return NotFound();
      }

      return Ok(cinema);
    }


    [Route("register")]
    [HttpPost]
    public ActionResult AddCinemas([FromBody] Cinema cinema)
    {
      _context.Cinemas.Add(cinema);
      _context.SaveChanges();
      return Ok(cinema);
    }
    [HttpGet]
    [Route("/filter")]

    public ActionResult<Cinema> GetCinemaByName(string CinemaName)
    {
      var entidade = _context.Cinemas
          .FromSqlInterpolated($"SELECT * FROM Cinemas WHERE CinemaName = {CinemaName}")
          .FirstOrDefault();

      if (entidade == null) return NotFound();
      
      return Ok(entidade);
    }

    [Route("{id}")]
    [HttpPut]
    public ActionResult UpdateCinema(int id, [FromBody] Cinema updatedCinema)
    {
      var cinemaToUpdate = _context.Cinemas.FirstOrDefault(c => c.Id == id);
      if (cinemaToUpdate == null)
      {
        return NotFound();
      }

        cinemaToUpdate.OwnerName = updatedCinema.OwnerName;
        cinemaToUpdate.CPF = updatedCinema.CPF;
        cinemaToUpdate.CinemaName = updatedCinema.CinemaName;
        cinemaToUpdate.Street = updatedCinema.Street;
        cinemaToUpdate.Description = updatedCinema.Description;
      _context.Update(cinemaToUpdate);
      _context.SaveChanges();

      return Ok(cinemaToUpdate);
    }

    [Route("{id}")]
    [HttpDelete]
    public ActionResult DeleteCinema(int id)
    {
      var cinemaToDelete = _context.Cinemas.FirstOrDefault(c => c.Id == id);
      if (cinemaToDelete == null)
      {
        return NotFound();
      }

      _context.Cinemas.Remove(cinemaToDelete);
      _context.SaveChanges();

      return Ok();
    }

  }
}

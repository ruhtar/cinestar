using api.Data;
using Microsoft.EntityFrameworkCore;

namespace api
{
  public class Program
  {
    public static void Main(string[] args)
    {
      var builder = WebApplication.CreateBuilder(args);


      var connectionString = builder.Configuration.GetConnectionString("CineConnection");

      builder.Services.AddDbContext<ApplicationDbContext>(opts =>
          opts.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString)));

      builder.Services.AddCors(p => p.AddPolicy("corsapp", builder =>
      {
        builder.WithOrigins("*").AllowAnyMethod().AllowAnyHeader();
      }));
      // Add services to the container.

      builder.Services.AddControllers();
      // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
      builder.Services.AddEndpointsApiExplorer();
      builder.Services.AddSwaggerGen();

      var app = builder.Build();

      // Configure the HTTP request pipeline.
      if (app.Environment.IsDevelopment())
      {
        app.UseSwagger();
        app.UseSwaggerUI();
      }
      app.UseCors("corsapp");

      app.UseHttpsRedirection();

      app.UseAuthorization();


      app.MapControllers();

      app.Run();
    }
  }
}

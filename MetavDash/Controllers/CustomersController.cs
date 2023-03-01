using MetavDash.Models;
using Microsoft.AspNetCore.Mvc;
using DAL;
using System.Globalization;
using System;
using System.Collections;
using System.Linq;

namespace MetavDash.Controllers
{
    public class CustomersController : Controller
    {
        private readonly MetavDashContext _metavDashContext;

        public CustomersController(MetavDashContext metavDashContext)
        {
            _metavDashContext = metavDashContext;
        }

        [HttpGet]
        public ActionResult GetAllCustomers()
        {
            return Created("", _metavDashContext.Customers.Select(c => new { FullName = c.FullName, BirthDate = c.BirthDate.ToString("dd/M/yyyy"), IdNum = c.IdNum}).ToArray());
        }

        [HttpPost]
        public ActionResult AddCustomer(CustomrModel customrModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                _metavDashContext.Customers.Add(new Customers { FullName = customrModel.FullName, BirthDate = DateTime.ParseExact(customrModel.BirthDate, "dd/MM/yyyy", CultureInfo.InvariantCulture), IdNum = customrModel.IdNum });
                _metavDashContext.SaveChanges();
            }
            catch (Exception ex)
            {
                return BadRequest("Error: " + ex.Message);
            }
            
            return Created("", new { success = true });
        }

    }
}

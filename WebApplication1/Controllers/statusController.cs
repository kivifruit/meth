using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using WebApplication1.Models;
namespace WebApplication1.Controllers
{
    [EnableCors(origins: "*", methods: "*", headers: "*")]
    [RoutePrefix("status")]
    public class statusController : ApiController
    {
        [HttpGet]
        [Route("all")]
        public List<status> getallcategories()
        { 
      
            return db.statuslist;
        }
        [HttpPost]
        [Route("add")]
        public IHttpActionResult addtransition(status t)
        {
           status r = db.statuslist.FirstOrDefault(b => b.name == t.name);
            if (r != null)
            {
                return Conflict();
            }
            else db.statuslist.Add(t);
            return Ok(t);
        }
        [HttpGet]
        [Route("deleteall")]
        public void deleteall()
        {
            db.statuslist.Clear();
        }

        [HttpPost]
        [Route("delete")]
        public IHttpActionResult deletestatuses(status t)
        {
            status r = db.statuslist.FirstOrDefault(b => b.name == t.name);
            if (r == null)
            {
                return null;
            }
            else db.statuslist.Remove(t);
            return Ok(t);
        }

    }

}

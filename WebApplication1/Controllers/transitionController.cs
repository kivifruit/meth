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
    [RoutePrefix("transition")]
    public class transitionController : ApiController
    {


        [HttpGet]
        [Route("all")]
        //public Array getalltransitions()
        //{ 
        //    return db.transitionlist.ToArray();
        //}
        public List<transition> getalltansition()
        {

            return db.transitionlist;
        }
        [HttpPost]
        [Route("add")]
        public IHttpActionResult addtransition(transition t)
        {
            transition r = db.transitionlist.FirstOrDefault(b => b.name == t.name);
            if (r != null)
            {
                return Conflict();
            }
            else db.transitionlist.Add(t);
            return Ok(t);
        }

        [HttpGet]
        [Route("deleteall")]
        public void deleteall()
        {
            db.transitionlist.Clear();

        }
        [HttpGet]
        [Route("delete")]
        public IHttpActionResult deletetransitions(string name)
        {
            transition r = db.transitionlist.FirstOrDefault(b => b.name == name);
            if (r == null)
            {
                return Conflict();
            }
            else db.transitionlist.Remove(r);
            return Ok(name);
        }




    }
}
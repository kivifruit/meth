using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
namespace WebApplication1.Models
{
    public class transition
    {
        [Key]
       
        public string name { get; set; }
        public status from { get; set; }
        public status to { get; set; }

    }
}

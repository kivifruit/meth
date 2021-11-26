using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class db
    {
        public static List<status> statuslist { get; set; }
        public static List<transition> transitionlist { get; set; } 
  
        static db()
        {
            //    using (var c = new db1())
            //    {
            //        var s1 = new user() { usercode = 111, username = "yossi", useraddress = "mincatshlomo", usermail = "bbb@qq", userpassword = 1234 };
            //        var s2 = new user() { usercode = 333, username = "meni", useraddress = "ganeihadar", usermail = "aaa@qq", userpassword = 5678 };
            //        c.userlist.Add(s1);
            //        c.userlist.Add(s2);
            //        c.SaveChanges();
            //    } 
           status s1 = new status() { name = "start" };
            status s2 = new status() { name = "cancle" };
            status s3 = new status() { name = "review" };
            statuslist = new List<status>()
            {
               s2,s3, s1
               //,new status() { name = "review" },new status() { name = "cancle" }
              };
            transitionlist = new List<transition>()
            {
                new transition() { name="a",from=s1,to=s2},
                 new transition() { name="b",from=s2,to=s3},
                  new transition() { name="c",from=s3,to=s2}
              };
        }
}
}
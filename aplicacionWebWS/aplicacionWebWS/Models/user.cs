using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace aplicacionWebWS.Models
{
    public class user
    {
        public int idUser { get; set; }
        public String userName { get; set; }
        public String password { get; set; }
        public String email { get; set; }
        public String photo { get; set; }
    }
}

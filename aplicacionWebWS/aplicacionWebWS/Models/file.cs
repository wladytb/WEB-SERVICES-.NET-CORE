using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace aplicacionWebWS.Models
{
    public class file
    {
        public int idFile { get; set; }
        public string name { get; set; }
        public string fileA { get; set; }
        public string description { get; set; }
        public string type { get; set; }
        public int idUser { get; set; }
    }
}

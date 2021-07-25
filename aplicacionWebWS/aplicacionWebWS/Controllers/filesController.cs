using aplicacionWebWS.accesoDatos;
using aplicacionWebWS.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace aplicacionWebWS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class filesController : ControllerBase
    {
        fileDAO fileDao;
        [HttpPost("register")]
        public bool registrar(file fl)
        {
            fileDao = new fileDAO();
            return fileDao.insertFile(fl.name, fl.fileA, fl.description, fl.type, fl.idUser);
        }

        [HttpGet("getFile/{idFile}")]
        public List<file> getFile(int idFile) {
            fileDao = new fileDAO();
            return fileDao.getFile(idFile);
        }
        [HttpGet("getFileUser/{idUser}")]
        public List<file> getFileUser(int idUser)
        {
            fileDao = new fileDAO();
            return fileDao.getFileUser(idUser);
        }
    }
}

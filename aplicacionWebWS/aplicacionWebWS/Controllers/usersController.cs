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
    public class usersController : ControllerBase
    {
        userDAO userDao;
        [HttpPost("validateUser")]
        public List<user> validateUser(user usr)
        {
            userDao = new userDAO();
            return userDao.validarUser(usr.userName, usr.password);
        }
        [HttpPost("register")]
        public bool registrar(user usr) {
            userDao = new userDAO();
            return userDao.insertUser(usr.userName, usr.password,usr.email,usr.photo);
        }

    }
}

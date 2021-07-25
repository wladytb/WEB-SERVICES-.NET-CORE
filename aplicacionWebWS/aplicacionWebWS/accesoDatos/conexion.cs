using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data;
using System.Data.SqlClient;

namespace aplicacionWebWS.accesoDatos
{
    public class conexion
    {
        public SqlConnection getConexion()
        {
            try
            {
                SqlConnection cnn = new SqlConnection(@"Data Source=DESKTOP-OGSI3JS\SQLEXPRESS;Initial Catalog=miNube;Integrated Security=True");
                cnn.Open();
                return cnn;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return null;
            }
        }
        
    }
}

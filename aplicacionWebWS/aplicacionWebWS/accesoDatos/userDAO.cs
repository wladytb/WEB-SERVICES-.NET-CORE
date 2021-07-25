using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data.SqlClient;
using System.Data;
using aplicacionWebWS.Models;

namespace aplicacionWebWS.accesoDatos
{
    public class userDAO
    {
        conexion cnn;
        List<user> listaUser;
        user usr;
        public bool insertUser(String userName, String password, String email, String photo)
        {
            try
            {
                cnn = new conexion();
                SqlCommand cmd = new SqlCommand();
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.CommandText = "proc_InsertUser";
                cmd.Parameters.Add("@userName", SqlDbType.NVarChar).Value = userName;
                cmd.Parameters.Add("@password", SqlDbType.NVarChar).Value = password;
                cmd.Parameters.Add("@email", SqlDbType.Text).Value = email;
                cmd.Parameters.Add("@photo", SqlDbType.Text).Value = photo;
                cmd.Connection = cnn.getConexion();
                int filas = cmd.ExecuteNonQuery();
                if (filas > 0)
                    return true;
                else
                    return false;

            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return false;
            }
        }
        public List<user> validarUser(String userName, string password)
        {
            listaUser = new List<user>();
            try
            {
                cnn = new conexion();
                SqlCommand cmd = new SqlCommand();
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.CommandText = "proc_ValidateUser";
                cmd.Parameters.Add("@userName", SqlDbType.NVarChar).Value = userName;
                cmd.Parameters.Add("@password", SqlDbType.NVarChar).Value = password;
                cmd.Connection = cnn.getConexion();
                SqlDataReader datos = cmd.ExecuteReader();
                while (datos.Read())
                {
                    usr = new user()
                    {
                        idUser = int.Parse(datos["idUser"].ToString()),
                        userName = datos["userName"].ToString(),
                        password = datos["password"].ToString(),
                        email = datos["email"].ToString(),
                        photo = datos["photo"].ToString()
                    };
                    listaUser.Add(usr);
                }
                return listaUser;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return listaUser;
            }
        }
    }
}

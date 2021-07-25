using aplicacionWebWS.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data.SqlClient;
using System.Data;

namespace aplicacionWebWS.accesoDatos
{
    public class fileDAO
    {
        conexion cnn;
        List<file> listaFiles;
        file fl;
        public bool insertFile(String name, String fileA, String description, String type,int idUser)
        {
            try
            {
                cnn = new conexion();
                SqlCommand cmd = new SqlCommand();
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.CommandText = "proc_InsertFile";
                cmd.Parameters.Add("@name", SqlDbType.NVarChar).Value = name;
                cmd.Parameters.Add("@file", SqlDbType.NVarChar).Value = fileA;
                cmd.Parameters.Add("@type", SqlDbType.Text).Value = type;
                cmd.Parameters.Add("@description", SqlDbType.Text).Value = description;
                cmd.Parameters.Add("@idUser", SqlDbType.Int).Value = idUser;
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
        public List<file> getFileUser(int idUser)
        {
            listaFiles = new List<file>();
            try
            {
                cnn = new conexion();
                SqlCommand cmd = new SqlCommand();
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.CommandText = "proc_viewFileUser";
                cmd.Parameters.Add("@idUser", SqlDbType.Int).Value = idUser;
                cmd.Connection = cnn.getConexion();
                SqlDataReader datos = cmd.ExecuteReader();
                while (datos.Read())
                {
                    fl = new file()
                    {
                        name = datos["name"].ToString(),
                        fileA = datos["fileA"].ToString(),
                        description = datos["description"].ToString(),
                        type = datos["type"].ToString(),
                        idUser = int.Parse(datos["idUser"].ToString())
                    };
                    listaFiles.Add(fl);
                }
                return listaFiles;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return listaFiles;
            }
        }
        public List<file> getFile(int idFile)
        {
            listaFiles = new List<file>();
            try
            {
                cnn = new conexion();
                SqlCommand cmd = new SqlCommand();
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.CommandText = "proc_viewFile";
                cmd.Parameters.Add("@idFile", SqlDbType.Int).Value = idFile;
                cmd.Connection = cnn.getConexion();
                SqlDataReader datos = cmd.ExecuteReader();
                while (datos.Read())
                {
                    fl = new file()
                    {
                        name = datos["name"].ToString(),
                        fileA = datos["fileA"].ToString(),
                        description = datos["description"].ToString(),
                        type = datos["type"].ToString(),
                        idUser = int.Parse(datos["idUser"].ToString())
                    };
                    listaFiles.Add(fl);
                }
                return listaFiles;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return listaFiles;
            }
        }
    }
}

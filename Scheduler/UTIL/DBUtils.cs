using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Scheduler.UTIL
{
    internal class DBUtils 
    {
        public static SqlConnection GetDBConnection()
        {
            string datasource = @"SE140690\MINHTT";
            string database = "FLS_Database";
            string username = "sa";
            string password = "minhlk123";
            return DBSQLServerUtils.GetDBConnection(datasource, database, username, password);
        }
    }
}

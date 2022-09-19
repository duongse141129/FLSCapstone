using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Scheduler.DTO
{
    internal class DepartmentDTO
    {
        public string DepartmentID { set; get; }
        public string DepartmentName { set; get; }
        public int status { set; get; }

        public DepartmentDTO()
        {
        }

        public DepartmentDTO(string departmentID, string departmentName, int status)
        {
            DepartmentID = departmentID;
            DepartmentName = departmentName;
            this.status = status;
        }
    }
}

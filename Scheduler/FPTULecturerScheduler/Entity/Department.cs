using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FPTULecturerScheduler.Entity
{
    public class Department
    {
        public string ID { set; get; }
        public string DepartmentName { set; get; }
        public int status { set; get; }

        public Department()
        {
        }

        public Department(string Id, string departmentName, int status)
        {
            ID = Id;
            DepartmentName = departmentName;
            this.status = status;
        }
    }
}

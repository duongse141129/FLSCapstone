using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FPTULecturerScheduler.Entity
{
    public class Subject
    {
        public string ID { get; set; }
        public string SubjectName { get; set; }
        public string Description { get; set; }
        public int status { get; set; }
        public string DepartmentID { set; get; }

        public Subject()
        {
        }

        public Subject(string Id, string subjectName, string description, int status, string departmentID)
        {
            ID = Id;
            SubjectName = subjectName;
            Description = description;
            this.status = status;
            DepartmentID = departmentID;
        }
    }
}

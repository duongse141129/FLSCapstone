using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Scheduler.DTO
{
    internal class SubjectDTO
    {
        public string SubjectID { get; set; }
        public string SubjectName { get; set; }
        public string Description { get; set; }
        public int status { get; set; }
        public string DepartmentID { set; get; }

        public SubjectDTO()
        {
        }

        public SubjectDTO(string subjectID, string subjectName, string description, int status, string departmentID)
        {
            SubjectID = subjectID;
            SubjectName = subjectName;
            Description = description;
            this.status = status;
            DepartmentID = departmentID;
        }
    }
}

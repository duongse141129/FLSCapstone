using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Scheduler.DTO
{
    internal class CourseAssignDTO
    {
        public string CourseAssignID { get; set; }
        public string LecturerID { get; set; }
        public string CourseID { get; set; }
        public int status { get; set; }

        public CourseAssignDTO()
        {
        }

        public CourseAssignDTO(string courseAssignID, string lecturerID, string courseID, int status)
        {
            CourseAssignID = courseAssignID;
            LecturerID = lecturerID;
            CourseID = courseID;
            this.status = status;
        }
    }
}

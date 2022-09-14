using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Scheduler.DTO
{
    internal class CourseGroupItemDTO
    {
        public string CourseGroupItemID { get; set; }
        public string LecturerCourseGroupID { get; set; }
        public string CourseID { get; set; }
        public int status { get; set; }

        public CourseGroupItemDTO()
        {
        }

        public CourseGroupItemDTO(string courseGroupItemID, string lecturerCourseGroupID, string courseID, int status)
        {
            CourseGroupItemID = courseGroupItemID;
            LecturerCourseGroupID = lecturerCourseGroupID;
            CourseID = courseID;
            this.status = status;
        }
    }
}

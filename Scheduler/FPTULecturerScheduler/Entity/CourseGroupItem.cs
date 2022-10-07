using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FPTULecturerScheduler.Entity
{
    public class CourseGroupItem
    {
        public string CourseGroupItemID { get; set; }
        public string LecturerCourseGroupID { get; set; }
        public string CourseID { get; set; }
        public int Priority { get; set; }
        public int status { get; set; }

        public CourseGroupItem()
        {
        }

        public CourseGroupItem(string courseGroupItemID, string lecturerCourseGroupID, string courseID, int priority, int status)
        {
            CourseGroupItemID = courseGroupItemID;
            LecturerCourseGroupID = lecturerCourseGroupID;
            CourseID = courseID;
            Priority = priority;
            this.status = status;
        }
    }
}

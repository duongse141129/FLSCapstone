using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FPTULecturerScheduler.Entity
{
    public class LecturerCourseGroup
    {
        public string ID { get; set; }
        public string LecturerID { get; set; }
        public string SemesterID { get; set; }
        public string GroupName { get; set; }
        public int MinCourse { get; set; }
        public int MaxCourse { get; set; }
        public int status { get; set; }

        public LecturerCourseGroup()
        {
        }

        public LecturerCourseGroup(string Id, string lecturerID, string semesterID, string groupName, int minCourse, int maxCourse, int status)
        {
            ID = Id;
            LecturerID = lecturerID;
            SemesterID = semesterID;
            GroupName = groupName;
            MinCourse = minCourse;
            MaxCourse = maxCourse;
            this.status = status;
        }
    }
}

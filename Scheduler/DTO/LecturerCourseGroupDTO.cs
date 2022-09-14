using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Scheduler.DTO
{
    internal class LecturerCourseGroupDTO
    {
        public string LecturerCourseGroupID { get; set; }
        public string LecturerID { get; set; }
        public string SemesterID { get; set; }
        public string GroupName { get; set; }
        public int Priority { get; set; }
        public int MinCourse { get; set; }
        public int MaxCourse { get; set; }
        public int status { get; set; }

        public LecturerCourseGroupDTO()
        {
        }

        public LecturerCourseGroupDTO(string lecturerCourseGroupID, string lecturerID, string semesterID, string groupName, int priority, int minCourse, int maxCourse, int status)
        {
            LecturerCourseGroupID = lecturerCourseGroupID;
            LecturerID = lecturerID;
            SemesterID = semesterID;
            GroupName = groupName;
            Priority = priority;
            MinCourse = minCourse;
            MaxCourse = maxCourse;
            this.status = status;
        }
    }
}

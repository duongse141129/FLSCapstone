using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FPTULecturerScheduler.Entity
{
    public class LecturerCourseGroup
    {
        [JsonProperty("LecturerCourseGroupID")]
        public string ID { get; set; }
        [JsonProperty("LecturerID")]
        public string LecturerID { get; set; }
        [JsonProperty("SemesterID")]
        public string SemesterID { get; set; }
        [JsonProperty("GroupName")]
        public string GroupName { get; set; }
        [JsonProperty("MinCourse")]
        public int MinCourse { get; set; }
        [JsonProperty("MaxCourse")]
        public int MaxCourse { get; set; }
        [JsonProperty("Status")]
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

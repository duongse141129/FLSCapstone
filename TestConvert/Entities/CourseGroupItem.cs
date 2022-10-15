using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestConvert.Entities
{
    [Serializable]
    public class CourseGroupItem
    {
        [JsonProperty("CourseGroupItemID")]
        public string ID { get; set; }

        [JsonProperty("LecturerCourseGroupID")]
        public string LecturerCourseGroupID { get; set; }

        [JsonProperty("CourseID")]
        public string CourseID { get; set; }

        [JsonProperty("Prioriry")]
        public int Priority { get; set; }

        [JsonProperty("Status")]
        public int status { get; set; }

        public CourseGroupItem()
        {
        }

        public CourseGroupItem(string courseGroupItemID, string lecturerCourseGroupID, string courseID, int priority, int status)
        {
            ID = courseGroupItemID;
            LecturerCourseGroupID = lecturerCourseGroupID;
            CourseID = courseID;
            Priority = priority;
            this.status = status;
        }

        public override string ToString()
        {
            return "CourseGroupItem:" + ID + "_" + LecturerCourseGroupID + "_" + CourseID + "_" + Priority + "_" + status;
        }
    }
}

using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReadFileJson.Entities
{
    [Serializable]
    class LecturerCourseGroup
    {
        [JsonProperty("LecturerCourseGroupID")]
        public String ID { get; set; }
        [JsonProperty("LecturerID")]
        public String LecturerID { get; set; }
        [JsonProperty("SemesterID")]
        public String SemesterID { get; set; }
        [JsonProperty("GroupName")]
        public String GroupName { get; set; }
        [JsonProperty("MinCourse")]
        public int Min { get; set; }
        [JsonProperty("MaxCourse")]
        public int Max { get; set; }
        [JsonProperty("Status")]
        public bool Status { get; set; }
        public override string ToString()
        {
            return "LecturerCourseGroup:" + ID + "_" + GroupName + "_" + LecturerID;
        }
    }
}

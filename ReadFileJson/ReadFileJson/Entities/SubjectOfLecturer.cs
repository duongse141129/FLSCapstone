using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReadFileJson.Entities
{
    [Serializable]
    class SubjectOfLecturer
    {
        [JsonProperty("SubjectOfLecturerID")]
        public String ID { get; set; }
        [JsonProperty("SemesterID")]
        public String SemesterID { get; set; }
        [JsonProperty("SubjectID")]
        public String SubjectID { get; set; }
        [JsonProperty("LecturerID")]
        public String LecturerID { get; set; }
        [JsonProperty("Favorite point")]
        public String FavoritePoint { get; set; }
        [JsonProperty("Feedback point")]
        public String FeedBackPoint { get; set; }
        [JsonProperty("MaxCourseSubject")]
        public String MaxCourseSubject { get; set; }
        [JsonProperty("Status")]
        public bool Status { get; set; }

        public override string ToString()
        {
            return "SubjectOfLecturer:" + ID + "_" + SubjectID + "_" + LecturerID;
        }
    }
}

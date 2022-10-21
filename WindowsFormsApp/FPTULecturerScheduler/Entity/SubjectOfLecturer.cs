using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FPTULecturerScheduler.Entity
{
    public class SubjectOfLecturer
    {
        [JsonProperty("SubjectOfLecturerID")]
        public string ID { get; set; }
        [JsonProperty("SemesterID")]
        public string SemesterID { get; set; }
        [JsonProperty("SubjectID")]
        public string SubjectID { get; set; }
        [JsonProperty("LecturerID")]
        public string LecturerID { get; set; }
        [JsonProperty("Favorite point")]
        public int FavoritePoint { get; set; }
        [JsonProperty("Feedback point")]
        public int FeedbackPoint { get; set; }
        [JsonProperty("MaxCourseSubject")]
        public int MaxCourseSubject { get; set; }
        [JsonProperty("Status")]
        public int status { get; set; }

        public SubjectOfLecturer()
        {
        }

        public SubjectOfLecturer(string Id, string semesterID, string subjectID, string lecturerID, int favoritePoint, int feedbackPoint,int maxCourseSubject, int status)
        {
            ID = Id;
            SemesterID = semesterID;
            SubjectID = subjectID;
            LecturerID = lecturerID;
            FavoritePoint = favoritePoint;
            FeedbackPoint = feedbackPoint;
            MaxCourseSubject = maxCourseSubject;
            this.status = status;
        }


    }
}

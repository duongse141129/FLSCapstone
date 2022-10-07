using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FPTULecturerScheduler.Entity
{
    public class SubjectOfLecturer
    {
        public string ID { get; set; }
        public string SemesterID { get; set; }
        public string SubjectID { get; set; }
        public string LecturerID { get; set; }
        public int FavoritePoint { get; set; }
        public int FeedbackPoint { get; set; }
        public int MaxCourseSubject { get; set; }
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

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Scheduler.DTO
{
    internal class SubjectOfLecturerDTO
    {
        public string SubjectOfLecturerID { get; set; }
        public string SemesterID { get; set; }
        public string SubjectID { get; set; }
        public string LecturerID { get; set; }
        public int FavoritePoint { get; set; }
        public int FeedbackPoint { get; set; }
        public int status { get; set; }

        public SubjectOfLecturerDTO()
        {
        }

        public SubjectOfLecturerDTO(string subjectOfLecturerID, string semesterID, string subjectID, string lecturerID, int favoritePoint, int feedbackPoint, int status)
        {
            SubjectOfLecturerID = subjectOfLecturerID;
            SemesterID = semesterID;
            SubjectID = subjectID;
            LecturerID = lecturerID;
            FavoritePoint = favoritePoint;
            FeedbackPoint = feedbackPoint;
            this.status = status;
        }


    }
}

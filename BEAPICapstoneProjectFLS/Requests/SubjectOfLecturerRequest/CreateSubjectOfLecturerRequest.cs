namespace BEAPICapstoneProjectFLS.Requests.SubjectOfLecturerRequest
{
    public class CreateSubjectOfLecturerRequest
    {
        public string DepartmentManagerId { get; set; }
        public string SemesterId { get; set; }
        public string SubjectId { get; set; }
        public string LecturerId { get; set; }
        public int? FavoritePoint { get; set; }
        public int? FeedbackPoint { get; set; }
        public int? MaxCourseSubject { get; set; }
    }
}

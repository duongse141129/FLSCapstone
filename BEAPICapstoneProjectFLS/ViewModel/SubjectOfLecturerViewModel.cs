namespace BEAPICapstoneProjectFLS.ViewModel
{
    public class SubjectOfLecturerViewModel
    {
        public string Id { get; set; }
        public string DepartmentManagerId { get; set; }
        public string DepartmentManagerName { get; set; }
        public string SemesterId { get; set; }
        public string Term { get; set; }
        public string SubjectId { get; set; }
        public string SubjectName { get; set; }
        public string LecturerId { get; set; }
        public string LecturerName { get; set; }
        public int? FavoritePoint { get; set; }
        public int? FeedbackPoint { get; set; }
        public int? MaxCourseSubject { get; set; }
        public int? Status { get; set; }
    }
}

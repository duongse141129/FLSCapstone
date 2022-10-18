namespace BEAPICapstoneProjectFLS.ViewModel
{
    public class LecturerCourseGroupViewModel
    {
        public string Id { get; set; }
        public string LecturerId { get; set; }
        public string LecturerName { get; set; }
        public string SemesterId { get; set; }
        public string Term { get; set; }
        public string GroupName { get; set; }
        public int? MinCourse { get; set; }
        public int? MaxCourse { get; set; }
        public int? Status { get; set; }
    }
}

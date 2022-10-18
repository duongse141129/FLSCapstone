namespace BEAPICapstoneProjectFLS.Requests.CourseGroupItemRequest
{
    public class CreateCourseGroupItemRequest
    {
        public string LecturerCourseGroupId { get; set; }
        public string CourseId { get; set; }
        public int? PriorityCourse { get; set; }
    }
}

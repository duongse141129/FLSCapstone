namespace BEAPICapstoneProjectFLS.Requests.CourseGroupItemRequest
{
    public class UpdateCourseGroupItemRequest
    {
        public string LecturerCourseGroupId { get; set; }
        public string CourseId { get; set; }
        public int? PriorityCourse { get; set; }
    }
}

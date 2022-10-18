namespace BEAPICapstoneProjectFLS.Requests.CourseRequest
{
    public class UpdateCourseRequest
    {
        public string SubjectId { get; set; }
        public string SemesterId { get; set; }
        public string SlotTypeId { get; set; }
        public string Description { get; set; }
        public int? SlotAmount { get; set; }
    }
}

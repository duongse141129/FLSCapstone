namespace BEAPICapstoneProjectFLS.ViewModel
{
    public class CourseViewModel
    {
        public string Id { get; set; }
        public string SubjectId { get; set; }
        public string SubjectName { get; set; }
        public string SemesterId { get; set; }
        public string Term { get; set; }
        public string SlotTypeId { get; set; }
        public string Description { get; set; }
        public int? SlotAmount { get; set; }
        public int? Status { get; set; }
    }
}

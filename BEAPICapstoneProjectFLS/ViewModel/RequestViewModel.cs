using System;

namespace BEAPICapstoneProjectFLS.ViewModel
{
    public class RequestViewModel
    {
        public string Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime? DateCreate { get; set; }
        public string LecturerId { get; set; }
        public string LecturerName { get; set; }
        public string DepartmentManagerId { get; set; }
        public string DepartmentManagerName { get; set; }
        public int? Status { get; set; }
    }
}

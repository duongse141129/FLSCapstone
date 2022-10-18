using System;

namespace BEAPICapstoneProjectFLS.Requests.Request
{
    public class UpdateRequest
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime? DateCreate { get; set; }
        public string LecturerId { get; set; }
        public string DepartmentManagerId { get; set; }
    }
}

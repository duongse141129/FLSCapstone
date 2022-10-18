using System;

namespace BEAPICapstoneProjectFLS.Requests.LecturerRequest
{
    public class CreateLecturerRequest
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public DateTime? Dob { get; set; }
        public int? Gender { get; set; }
        public string Idcard { get; set; }
        public string Address { get; set; }
        public string Phone { get; set; }
        public int? PriorityLecturer { get; set; }
        public int? IsFullTime { get; set; }
        public string DepartmentId { get; set; }
    }
}

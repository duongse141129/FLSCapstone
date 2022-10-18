using System;

namespace BEAPICapstoneProjectFLS.ViewModel
{
    public class DepartmentManagerViewModel
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public DateTime? Dob { get; set; }
        public int? Gender { get; set; }
        public string Idcard { get; set; }
        public string Address { get; set; }
        public string Phone { get; set; }
        public int? Status { get; set; }
        public string DepartmentId { get; set; }
        public string DepartmentName { get; set; }

        public string? DateOfBirthFormatted { get; set; }
    }
}

using System;
using System.Collections.Generic;

#nullable disable

namespace BEAPICapstoneProjectFLS.Entities
{
    public partial class Lecturer
    {
        public Lecturer()
        {
            CourseAssigns = new HashSet<CourseAssign>();
            LecturerCourseGroups = new HashSet<LecturerCourseGroup>();
            LecturerSlotConfigs = new HashSet<LecturerSlotConfig>();
            Requests = new HashSet<Request>();
            SubjectOfLecturers = new HashSet<SubjectOfLecturer>();
        }

        public string Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public DateTime? Dob { get; set; }
        public int? Gender { get; set; }
        public string Idcard { get; set; }
        public string Address { get; set; }
        public string Phone { get; set; }
        public int? PriorityLecturer { get; set; }
        public int? IsFullTime { get; set; }
        public int Status { get; set; }
        public string DepartmentId { get; set; }

        public virtual Department Department { get; set; }
        public virtual ICollection<CourseAssign> CourseAssigns { get; set; }
        public virtual ICollection<LecturerCourseGroup> LecturerCourseGroups { get; set; }
        public virtual ICollection<LecturerSlotConfig> LecturerSlotConfigs { get; set; }
        public virtual ICollection<Request> Requests { get; set; }
        public virtual ICollection<SubjectOfLecturer> SubjectOfLecturers { get; set; }
    }
}

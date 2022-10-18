using System;
using System.Collections.Generic;

#nullable disable

namespace BEAPICapstoneProjectFLS.Entities
{
    public partial class Department
    {
        public Department()
        {
            DepartmentManagers = new HashSet<DepartmentManager>();
            Lecturers = new HashSet<Lecturer>();
            Subjects = new HashSet<Subject>();
        }

        public string Id { get; set; }
        public string DepartmentName { get; set; }
        public string DepartmentGroupId { get; set; }
        public int Status { get; set; }

        public virtual DepartmentGroup DepartmentGroup { get; set; }
        public virtual ICollection<DepartmentManager> DepartmentManagers { get; set; }
        public virtual ICollection<Lecturer> Lecturers { get; set; }
        public virtual ICollection<Subject> Subjects { get; set; }
    }
}

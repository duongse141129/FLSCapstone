using System;
using System.Collections.Generic;

#nullable disable

namespace BEAPICapstoneProjectFLS.Entities
{
    public partial class Request
    {
        public string Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime? DateCreate { get; set; }
        public string LecturerId { get; set; }
        public string DepartmentManagerId { get; set; }
        public int Status { get; set; }

        public virtual DepartmentManager DepartmentManager { get; set; }
        public virtual Lecturer Lecturer { get; set; }
    }
}

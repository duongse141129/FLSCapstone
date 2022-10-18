using System;
using System.Collections.Generic;

#nullable disable

namespace BEAPICapstoneProjectFLS.Entities
{
    public partial class CourseAssign
    {
        public string Id { get; set; }
        public string LecturerId { get; set; }
        public string CourseId { get; set; }
        public int Status { get; set; }

        public virtual Course Course { get; set; }
        public virtual Lecturer Lecturer { get; set; }
    }
}

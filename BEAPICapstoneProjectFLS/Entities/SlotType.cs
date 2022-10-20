using System;
using System.Collections.Generic;

#nullable disable

namespace BEAPICapstoneProjectFLS.Entities
{
    public partial class SlotType
    {
        public SlotType()
        {
            Courses = new HashSet<Course>();
            LecturerSlotConfigs = new HashSet<LecturerSlotConfig>();
        }

        public string Id { get; set; }
        public TimeSpan? TimeStart { get; set; }
        public TimeSpan? TimeEnd { get; set; }
        public int? SlotNumber { get; set; }
        public int? DateOfWeek { get; set; }
        public int Status { get; set; }

        public virtual ICollection<Course> Courses { get; set; }
        public virtual ICollection<LecturerSlotConfig> LecturerSlotConfigs { get; set; }
    }
}

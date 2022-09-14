using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Scheduler.DTO
{
    internal class CourseDTO
    {
        public string CourseID { get; set; }
        public string SubjectID { get; set; }
        public string SemesterID { get; set; }
        public string SlotTypeID { get; set; }
        public string Description { get; set; }
        public int SlotAmount { get; set; }
        public int status { get; set; }

        public CourseDTO()
        {
        }

        public CourseDTO(string courseID, string subjectID, string semesterID, string slotTypeID, string description, int slotAmount, int status)
        {
            CourseID = courseID;
            SubjectID = subjectID;
            SemesterID = semesterID;
            SlotTypeID = slotTypeID;
            Description = description;
            SlotAmount = slotAmount;
            this.status = status;
        }
    }
}

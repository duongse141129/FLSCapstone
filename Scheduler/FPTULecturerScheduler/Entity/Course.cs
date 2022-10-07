using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FPTULecturerScheduler.Entity
{
    public class Course
    {
        public string ID { get; set; }
        public string SubjectID { get; set; }
        public string SemesterID { get; set; }
        public string SlotTypeID { get; set; }
        public string Description { get; set; }
        public int SlotAmount { get; set; }
        public int Priority { get; set; }
        public int status { get; set; }
        public Course()
        {
        }

        public Course(string Id, string subjectID, string semesterID, string slotTypeID, string description, int slotAmount, int priority, int status)
        {
            ID = Id;
            SubjectID = subjectID;
            SemesterID = semesterID;
            SlotTypeID = slotTypeID;
            Description = description;
            SlotAmount = slotAmount;
            Priority = priority;
            this.status = status;
        }

        public Course(string Id, string subjectID, string semesterID, string slotTypeID, string description, int slotAmount, int status)
        {
            ID = Id;
            SubjectID = subjectID;
            SemesterID = semesterID;
            SlotTypeID = slotTypeID;
            Description = description;
            SlotAmount = slotAmount;
            Priority = 0;
            this.status = status;
        }

        public override string ToString()
        {
            return ID+"-------"+SubjectID;
        }
    }
}

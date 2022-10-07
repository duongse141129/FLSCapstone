using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FPTULecturerScheduler.Entity
{
    public class CourseAssign
    {
        public string ID { get; set; }
        public string LecturerID { get; set; }
        public string CourseID { get; set; }
        public string SlotTypeID { get; set; }
        public int status { get; set; }

        public CourseAssign()
        {
        }

        public CourseAssign(string Id, string lecturerID, string courseID, string slotTypeID, int status)
        {
            ID = Id;
            LecturerID = lecturerID;
            CourseID = courseID;
            SlotTypeID = slotTypeID;
            this.status = status;
        }

        public override string ToString()
        {
            return "CourseAssign: " + ID+"------"+LecturerID+"-------"+ CourseID+"--------"+ SlotTypeID;
        }
    }
}

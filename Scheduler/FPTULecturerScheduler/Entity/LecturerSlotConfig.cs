using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FPTULecturerScheduler.Entity
{
    public class LecturerSlotConfig
    {
        public string ID { get; set; }
        public string SemesterID { get; set; }
        public string LecturerID { get; set; }
        public string SlotTypeID { get; set; }
        public int status { get; set; }

        public LecturerSlotConfig()
        {
        }

        public LecturerSlotConfig(string Id, string semesterID, string lecturerID, string slotTypeID, int status)
        {
            ID = Id;
            SemesterID = semesterID;
            LecturerID = lecturerID;
            SlotTypeID = slotTypeID;
            this.status = status;
        }
    }
}

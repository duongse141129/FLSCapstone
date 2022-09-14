using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Scheduler.DTO
{
    internal class LecturerSlotConfigDTO
    {
        public string LecturerSlotConfigID { get; set; }
        public string SemesterID { get; set; }
        public string LecturerID { get; set; }
        public string SlotTypeID { get; set; }
        public int IsEnable { get; set; }
        public int status { get; set; }

        public LecturerSlotConfigDTO()
        {
        }

        public LecturerSlotConfigDTO(string lecturerSlotConfigID, string semesterID, string lecturerID, string slotTypeID, int isEnable, int status)
        {
            LecturerSlotConfigID = lecturerSlotConfigID;
            SemesterID = semesterID;
            LecturerID = lecturerID;
            SlotTypeID = slotTypeID;
            IsEnable = isEnable;
            this.status = status;
        }
    }
}

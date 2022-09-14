using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Scheduler.DTO
{
    internal class SlotTypeDTO
    {
        public string SlotTypeID { get; set; }
        public string TimeStart { get; set; }
        public string TimeEnd { get; set; }
        public int SlotNumber { get; set; }
        public int status { get; set; }

        public SlotTypeDTO()
        {
        }

        public SlotTypeDTO(string slotTypeID, string timeStart, string timeEnd, int slotNumber, int status)
        {
            SlotTypeID = slotTypeID;
            TimeStart = timeStart;
            TimeEnd = timeEnd;
            SlotNumber = slotNumber;
            this.status = status;
        }
    }
}

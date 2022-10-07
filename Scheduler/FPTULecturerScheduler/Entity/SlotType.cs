using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FPTULecturerScheduler.Entity
{
    public class SlotType
    {
        public string ID { get; set; }
        public string TimeStart { get; set; }
        public string TimeEnd { get; set; }
        public int SlotNumber { get; set; }
        public int status { get; set; }

        public SlotType()
        {
        }

        public SlotType(string Id, string timeStart, string timeEnd, int slotNumber, int status)
        {
            ID = Id;
            TimeStart = timeStart;
            TimeEnd = timeEnd;
            SlotNumber = slotNumber;
            this.status = status;
        }
    }
}

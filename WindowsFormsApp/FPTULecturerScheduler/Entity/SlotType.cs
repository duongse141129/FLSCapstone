using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FPTULecturerScheduler.Entity
{
    public class SlotType
    {
        [JsonProperty("SlotTypeID")]
        public string ID { get; set; }
        [JsonProperty("TimeStart")]
        public string TimeStart { get; set; }
        [JsonProperty("TimeEnd")]
        public string TimeEnd { get; set; }
        [JsonProperty("SlotNumber")]
        public int SlotNumber { get; set; }
        [JsonProperty("Status")]
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

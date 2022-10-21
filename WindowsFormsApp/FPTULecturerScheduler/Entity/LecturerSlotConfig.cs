using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FPTULecturerScheduler.Entity
{
    public class LecturerSlotConfig
    {
        [JsonProperty("LecturerSlotConfigID")]
        public string ID { get; set; }
        [JsonProperty("SesmeterID")]
        public string SemesterID { get; set; }
        [JsonProperty("LecturerID")]
        public string LecturerID { get; set; }
        [JsonProperty("SlotTypeID")]
        public string SlotTypeID { get; set; }
        [JsonProperty("Status")]
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

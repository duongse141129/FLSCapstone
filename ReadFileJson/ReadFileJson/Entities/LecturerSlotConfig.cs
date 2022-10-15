using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReadFileJson.Entities
{
    [Serializable]
    class LecturerSlotConfig
    {
        [JsonProperty("LecturerSlotConfigID")]
        public String ID { get; set; }
        [JsonProperty("SlotTypeID")]
        public String SlotTypeID { get; set; }
        [JsonProperty("LecturerID")]
        public String LecturerID { get; set; }
        [JsonProperty("SesmeterID")]
        public String SemesterID { get; set; }
        [JsonProperty("Status")]
        public bool Status { get; set; }

        public override string ToString()
        {
            return "LecturerSlotConfig:" + ID + "_" + SlotTypeID + "_" + LecturerID;
        }
    }
}

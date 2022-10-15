using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReadFileJson.Entities
{
    [Serializable]
    class SlotType
    {
        [JsonProperty("SlotTypeID")]
        public String SlotTypeID { get; set; }
        [JsonProperty("TimeStart")]
        public String TimeStart { get; set; }
        [JsonProperty("TimeEnd")]
        public String TimeEnd { get; set; }
        [JsonProperty("SlotNumber")]
        public String SlotNumber { get; set; }
        [JsonProperty("Status")]
        public bool Status { get; set; }

        public override string ToString()
        {
            return "SlotType:" + SlotTypeID + "_" + SlotNumber;
        }
    }
}

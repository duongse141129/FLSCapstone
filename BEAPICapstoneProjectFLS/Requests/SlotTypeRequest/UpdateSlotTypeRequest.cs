using System;
using Newtonsoft.Json;

namespace BEAPICapstoneProjectFLS.Requests.SlotTypeRequest
{
    [Serializable]
    public class UpdateSlotTypeRequest
    {
        [JsonProperty("TimeStart")]
        public TimeSpan? TimeStart { get; set; }
        [JsonProperty("TimeEnd")]
        public TimeSpan? TimeEnd { get; set; }
        [JsonProperty("SlotNumber")]
        public int? SlotNumber { get; set; }
        [JsonProperty("DateOfWeek")]
        public int? DateOfWeek { get; set; }
    }
}

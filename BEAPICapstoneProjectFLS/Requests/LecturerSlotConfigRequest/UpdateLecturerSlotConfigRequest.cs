﻿using System;
using Newtonsoft.Json;
namespace BEAPICapstoneProjectFLS.Requests.LecturerSlotConfigRequest
{
    [Serializable]
    public class UpdateLecturerSlotConfigRequest
    {
        [JsonProperty("SlotTypeId")]
        public string SlotTypeId { get; set; }
        [JsonProperty("LecturerId")]
        public string LecturerId { get; set; }
        [JsonProperty("SemesterId")]
        public string SemesterId { get; set; }
    }
}

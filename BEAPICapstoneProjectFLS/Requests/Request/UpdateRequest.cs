using System;
using Newtonsoft.Json;

namespace BEAPICapstoneProjectFLS.Requests.Request
{
    [Serializable]
    public class UpdateRequest
    {
        [JsonProperty("Title")]
        public string Title { get; set; }
        [JsonProperty("Description")]
        public string Description { get; set; }
        [JsonProperty("DateCreate")]
        public DateTime? DateCreate { get; set; }
        [JsonProperty("LecturerId")]
        public string LecturerId { get; set; }
        [JsonProperty("DepartmentManagerId")]
        public string DepartmentManagerId { get; set; }
    }
}

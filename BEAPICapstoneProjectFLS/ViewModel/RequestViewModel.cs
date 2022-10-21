using System;
using Newtonsoft.Json;

namespace BEAPICapstoneProjectFLS.ViewModel
{
    [Serializable]
    public class RequestViewModel
    {
        [JsonProperty("Id")]
        public string Id { get; set; }
        [JsonProperty("Title")]
        public string Title { get; set; }
        [JsonProperty("Description")]
        public string Description { get; set; }
        [JsonProperty("DateCreate")]
        public DateTime? DateCreate { get; set; }
        [JsonProperty("LecturerId")]
        public string LecturerId { get; set; }
        [JsonProperty("LecturerName")]
        public string LecturerName { get; set; }
        [JsonProperty("DepartmentManagerId")]
        public string DepartmentManagerId { get; set; }
        [JsonProperty("DepartmentManagerName")]
        public string DepartmentManagerName { get; set; }
        [JsonProperty("Status")]
        public int? Status { get; set; }
    }
}

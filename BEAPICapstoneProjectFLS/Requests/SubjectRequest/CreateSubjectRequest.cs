using System;
using Newtonsoft.Json;
namespace BEAPICapstoneProjectFLS.Requests.SubjectRequest
{
    [Serializable]
    public class CreateSubjectRequest
    {
        [JsonProperty("SubjectName")]
        public string SubjectName { get; set; }
        [JsonProperty("Description")]
        public string Description { get; set; }
        [JsonProperty("DepartmentId")]
        public string DepartmentId { get; set; }
    }
}

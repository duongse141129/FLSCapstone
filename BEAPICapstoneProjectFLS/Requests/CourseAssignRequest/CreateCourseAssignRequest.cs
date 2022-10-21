using System;
using Newtonsoft.Json;
namespace BEAPICapstoneProjectFLS.Requests.CourseAssignRequest
{
    [Serializable]
    public class CreateCourseAssignRequest
    {
        [JsonProperty("LecturerId")]
        public string LecturerId { get; set; }
        [JsonProperty("CourseId")]
        public string CourseId { get; set; }
    }
}

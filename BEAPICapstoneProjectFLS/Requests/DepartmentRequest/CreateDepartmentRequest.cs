using System;
using Newtonsoft.Json;
namespace BEAPICapstoneProjectFLS.Requests.DepartmentRequest
{
    [Serializable]
    public class CreateDepartmentRequest
    {
        [JsonProperty("DepartmentName")]
        public string DepartmentName { get; set; }
        [JsonProperty("DepartmentGroupId")]
        public string DepartmentGroupId { get; set; }
    }
}

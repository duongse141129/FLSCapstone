using System;
using System;
using Newtonsoft.Json;
namespace BEAPICapstoneProjectFLS.ViewModel
{
    [Serializable]
    public class DepartmentManagerViewModel
    {
        [JsonProperty("Id")]
        public string Id { get; set; }
        [JsonProperty("Name")]
        public string Name { get; set; }
        [JsonProperty("Email")]
        public string Email { get; set; }
        [JsonProperty("Dob")]
        public DateTime? Dob { get; set; }
        [JsonProperty("Gender")]
        public int? Gender { get; set; }
        [JsonProperty("Idcard")]
        public string Idcard { get; set; }
        [JsonProperty("Address")]
        public string Address { get; set; }
        [JsonProperty("Phone")]
        public string Phone { get; set; }
        [JsonProperty("Status")]
        public int? Status { get; set; }
        [JsonProperty("DepartmentId")]
        public string DepartmentId { get; set; }
        [JsonProperty("DepartmentName")]
        public string DepartmentName { get; set; }

        [JsonProperty("DateOfBirthFormatted")]
        public string? DateOfBirthFormatted { get; set; }
    }
}

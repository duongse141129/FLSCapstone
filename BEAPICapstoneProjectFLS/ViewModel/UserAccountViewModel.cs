using System;
using Newtonsoft.Json;
namespace BEAPICapstoneProjectFLS.ViewModel
{
    [Serializable]
    public class UserAccountViewModel
    {
        [JsonProperty("Id")]
        public string Id { get; set; }
        [JsonProperty("Name")]
        public string Name { get; set; }
        [JsonProperty("Email")]
        public string Email { get; set; }
        [JsonProperty("Role")]
        public string Role { get; set; }
    }
}

using System;
using Newtonsoft.Json;
namespace BEAPICapstoneProjectFLS.Requests.UserRequest
{
    public class UpdateEmailOfUserRequest
    {
        [JsonProperty("Id")]
        public string Id { get; set; }
        [JsonProperty("Email")]
        public string Email { get; set; }

    }
}

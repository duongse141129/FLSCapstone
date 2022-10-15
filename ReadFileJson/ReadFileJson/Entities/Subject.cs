using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReadFileJson.Entities
{
    [Serializable]
    class Subject
    {
        [JsonProperty("SubjectID")]
        public String SubjectID { get; set; }
        [JsonProperty("SubjectName")]
        public String Name { get; set; }
        [JsonProperty("DepartmentID")]
        public String DepartmentID { get; set; }
        [JsonProperty("Description")]
        public String Description { get; set; }
        [JsonProperty("Status")]
        public bool Status { get; set; }

        public override string ToString()
        {
            return "Subject:" + SubjectID + "_" + Name + "_" + DepartmentID;
        }
    }
}

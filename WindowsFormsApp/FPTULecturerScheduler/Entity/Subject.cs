using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FPTULecturerScheduler.Entity
{
    public class Subject
    {
        [JsonProperty("SubjectID")]
        public string ID { get; set; }
        [JsonProperty("SubjectName")]
        public string SubjectName { get; set; }
        [JsonProperty("Description")]
        public string Description { get; set; }
        [JsonProperty("Status")]
        public int status { get; set; }
        [JsonProperty("DepartmentID")]
        public string DepartmentID { set; get; }

        public Subject()
        {
        }

        public Subject(string Id, string subjectName, string description, int status, string departmentID)
        {
            ID = Id;
            SubjectName = subjectName;
            Description = description;
            this.status = status;
            DepartmentID = departmentID;
        }
    }
}

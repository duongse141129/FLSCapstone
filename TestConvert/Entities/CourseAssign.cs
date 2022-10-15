using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestConvert.Entities
{
    [Serializable]
    public class CourseAssign
    {
        [JsonProperty("ID")]
        public string ID { get; set; }

        [JsonProperty("LecturerID")]
        public string LecturerID { get; set; }

        [JsonProperty("CourseID")]
        public string CourseID { get; set; }

        [JsonProperty("SlotTypeID")]
        public string SlotTypeID { get; set; }

        [JsonProperty("Status")]
        public int status { get; set; }

        public CourseAssign()
        {
        }

        public CourseAssign(string Id, string lecturerID, string courseID, string slotTypeID, int status)
        {
            ID = Id;
            LecturerID = lecturerID;
            CourseID = courseID;
            SlotTypeID = slotTypeID;
            this.status = status;
        }

        public override string ToString()
        {
            return "CourseAssign: " + ID + "------" + LecturerID + "-------" + CourseID + "--------" + SlotTypeID;
        }
    }
}

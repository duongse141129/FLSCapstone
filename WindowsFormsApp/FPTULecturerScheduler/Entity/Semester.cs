using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FPTULecturerScheduler.Entity
{
    public class Semester
    {
        [JsonProperty("Id")]
        public string ID { get; set; }
        [JsonProperty("Term")]
        public string Term { get; set; }
        [JsonProperty("DateStartFormat")]
        public string DateStart { get; set; }
        [JsonProperty("DateEndFormat")]
        public string DateEnd { get; set; }
        [JsonProperty("State")]
        public int state { get; set; }
        [JsonProperty("Status")]
        public int status { get; set; }

        public Semester()
        {
        }

        public Semester(string iD, string term, string dateStart, string dateEnd, int state, int status)
        {
            ID = iD;
            Term = term;
            DateStart = dateStart;
            DateEnd = dateEnd;
            this.state = state;
            this.status = status;
        }
    }
}

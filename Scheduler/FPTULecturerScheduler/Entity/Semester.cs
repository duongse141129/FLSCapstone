using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FPTULecturerScheduler.Entity
{
    public class Semester
    {
        public string ID { get; set; }
        public string Term { get; set; }
        public string DateStart { get; set; }
        public string DateEnd { get; set; }
        public int status { get; set; }

        public Semester()
        {
        }
        public Semester(string Id, string term, string dateStart, string dateEnd, int status)
        {
            ID = Id;
            Term = term;
            DateStart = dateStart;
            DateEnd = dateEnd;
            this.status = status;
        }
    }
}

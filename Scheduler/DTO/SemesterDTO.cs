using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Scheduler.DTO
{
    internal class SemesterDTO
    {
        public string SemesterID { get; set; }
        public string Term { get; set; }
        public string DateStart { get; set; }
        public string DateEnd { get; set; }
        public int status { get; set; }

        public SemesterDTO()
        {
        }
        public SemesterDTO(string semesterID, string term, string dateStart, string dateEnd, int status)
        {
            SemesterID = semesterID;
            Term = term;
            DateStart = dateStart;
            DateEnd = dateEnd;
            this.status = status;
        }
    }
}

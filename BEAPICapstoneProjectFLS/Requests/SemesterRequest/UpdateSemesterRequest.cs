using System;

namespace BEAPICapstoneProjectFLS.Requests.SemesterRequest
{
    public class UpdateSemesterRequest
    {
        public string Term { get; set; }
        public DateTime? DateStart { get; set; }
        public DateTime? DateEnd { get; set; }
    }
}

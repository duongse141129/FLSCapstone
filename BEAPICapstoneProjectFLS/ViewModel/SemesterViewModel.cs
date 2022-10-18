using System;

namespace BEAPICapstoneProjectFLS.ViewModel
{
    public class SemesterViewModel
    {
        public string Id { get; set; }
        public string Term { get; set; }
        public DateTime? DateStart { get; set; }
        public string? DateStartFormat { get; set; }

        public DateTime? DateEnd { get; set; }
        public string? DateEndFormat { get; set; }
        public int? Status { get; set; }
    }
}

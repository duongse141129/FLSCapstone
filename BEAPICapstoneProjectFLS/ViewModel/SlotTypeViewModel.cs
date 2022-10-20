using System;

namespace BEAPICapstoneProjectFLS.ViewModel
{
    public class SlotTypeViewModel
    {
        public string Id { get; set; }
        public TimeSpan? TimeStart { get; set; }
        public TimeSpan? TimeEnd { get; set; }
        public int? SlotNumber { get; set; }
        public int? DateOfWeek { get; set; }
        public string? Duration { get; set; }
        public string? ConvertDateOfWeek { get; set; }
        public int? Status { get; set; }
    }
}

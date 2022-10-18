using System;

namespace BEAPICapstoneProjectFLS.ViewModel
{
    public class SlotTypeViewModel
    {
        public string Id { get; set; }
        public TimeSpan? TimeStart { get; set; }
        public TimeSpan? TimeEnd { get; set; }
        public int? SlotNumber { get; set; }
        public int? Status { get; set; }
    }
}

using System;

namespace BEAPICapstoneProjectFLS.Requests.SlotTypeRequest
{
    public class UpdateSlotTypeRequest
    {
        public TimeSpan? TimeStart { get; set; }
        public TimeSpan? TimeEnd { get; set; }
        public int? SlotNumber { get; set; }
    }
}

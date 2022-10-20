namespace BEAPICapstoneProjectFLS.Requests.RoomSemesterRequest
{
    public class UpdateRoomSemesterRequest
    {
        public string SemesterId { get; set; }
        public string RoomTypeId { get; set; }
        public int? Quantity { get; set; }
    }
}

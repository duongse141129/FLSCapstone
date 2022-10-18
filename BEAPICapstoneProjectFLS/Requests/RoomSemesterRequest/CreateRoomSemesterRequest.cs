namespace BEAPICapstoneProjectFLS.Requests.RoomSemesterRequest
{
    public class CreateRoomSemesterRequest
    {
        public string RoomTypeName { get; set; }
        public string SemesterId { get; set; }
        public string RoomTypeId { get; set; }
        public int? Quantity { get; set; }
    }
}

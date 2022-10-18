﻿namespace BEAPICapstoneProjectFLS.Requests.LecturerCourseGroupRequest
{
    public class UpdateLecturerCourseGroupRequest
    {
        public string LecturerId { get; set; }
        public string SemesterId { get; set; }
        public string GroupName { get; set; }
        public int? MinCourse { get; set; }
        public int? MaxCourse { get; set; }
    }
}

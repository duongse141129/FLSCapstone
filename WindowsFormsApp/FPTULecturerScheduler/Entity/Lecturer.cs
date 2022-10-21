using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FPTULecturerScheduler.Entity
{
    public class Lecturer
    {
        [JsonProperty("LecturerID")]
        public string ID { get; set; }
        [JsonProperty("Name")]
        public string LecturerName { get; set; }
        [JsonProperty("Email")]
        public string Email { get; set; }
        [JsonProperty("DOB")]
        public string DOB { get; set; }
        [JsonProperty("Gender")]
        public string Gender { get; set; }
        [JsonProperty("ID Card")]
        public string IDCard { get; set; }
        [JsonProperty("Address")]
        public string Address { get; set; }
        [JsonProperty("PhoneNumber")]
        public string Phone { get; set; }
        [JsonProperty("Status")]
        public int status { get; set; }
        [JsonProperty("PriorityLecturer")]
        public int PriorityLecturer { get; set; }
        [JsonProperty("DepartmentID")]
        public string DepartmentID { set; get; }
        public Lecturer()
        {
        }

        public Lecturer(string Id, string lecturerName, string email, string dOB, string gender, string iDCard, string address, string phone, int status, int priorityLecturer, string departmentID)
        {
            ID = Id;
            LecturerName = lecturerName;
            Email = email;
            DOB = dOB;
            Gender = gender;
            IDCard = iDCard;
            Address = address;
            Phone = phone;
            this.status = status;
            PriorityLecturer = priorityLecturer;
            DepartmentID = departmentID;
        }


    }
}

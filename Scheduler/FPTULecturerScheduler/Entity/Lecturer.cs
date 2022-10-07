using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FPTULecturerScheduler.Entity
{
    public class Lecturer
    {
        public string ID { get; set; }
        public string LecturerName { get; set; }
        public string Email { get; set; }
        public string DOB { get; set; }
        public string Gender { get; set; }
        public string IDCard { get; set; }
        public string Address { get; set; }
        public string Phone { get; set; }
        public int status { get; set; }
        public int PriorityLecturer { get; set; }
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

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Scheduler.DTO
{
    internal class LecturerDTO
    {
        public string LecturerID { get; set; }
        public string LecturerName { get; set; }
        public string Email { get; set; }
        public string DOB { get; set; }
        public int Gender { get; set; }
        public string IDCard { get; set; }
        public string Address { get; set; }
        public string Phone { get; set; }
        public int status { get; set; }
        public string DepartmentID { set; get; }

        public LecturerDTO()
        {
        }

        public LecturerDTO(string lecturerID, string lecturerName, string email, string dOB, int gender, string iDCard, string address, string phone, int status, string departmentID)
        {
            LecturerID = lecturerID;
            LecturerName = lecturerName;
            Email = email;
            DOB = dOB;
            Gender = gender;
            IDCard = iDCard;
            Address = address;
            Phone = phone;
            this.status = status;
            DepartmentID = departmentID;
        }
    }
}

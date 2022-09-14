using Scheduler.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace Scheduler
{
    public class Program
    {
        List<SemesterDTO> semesters = new List<SemesterDTO>()
            {
                //SemesterDTO(string semesterID, string term, string dateStart, string dateEnd, int status)
                new SemesterDTO("semesterID_1", "SPRING2021", "ngay bat dau", "ngay ket thuc", 1),
                new SemesterDTO("semesterID_2", "SUMMER2021", "ngay bat dau", "ngay ket thuc", 1),
            };
        List<DepartmentDTO> departments = new List<DepartmentDTO>()
            {
                //DepartmentDTO(string departmentID, string departmentName, int status)
                new DepartmentDTO("departmentID_1", "LAB", 1),
                new DepartmentDTO("departmentID_2", "SE", 1),
                new DepartmentDTO("departmentID_3", "TOAN", 1),
            };
        List<SubjectDTO> subjects = new List<SubjectDTO>()
            {
                //SubjectDTO(string subjectID, string subjectName, string description, int status, string departmentID)
                new SubjectDTO("subjectID_1", "SWD201",  "description", 1, "departmentID_2"),
                new SubjectDTO("subjectID_2", "PMG201",  "description", 1, "departmentID_2"),
                new SubjectDTO("subjectID_3", "LAB201",  "description", 1, "departmentID_1"),
                new SubjectDTO("subjectID_4", "MAD201",  "description", 1, "departmentID_3"),
                new SubjectDTO("subjectID_5", "ITE302c",  "description", 1, "departmentID_2"),
            };

        List<LecturerDTO> lecturers = new List<LecturerDTO>()
            {
                //LecturerDTO(string lecturerID, string lecturerName, string email, string dOB, int gender, string iDCard, string address, string phone, int status, string departmentID)
                new LecturerDTO("lecturerID_1", "MinhTT1", "email", "DOB", 1, "IDCard", "address", "phone", 1, "departmentID_2"),
                new LecturerDTO("lecturerID_2", "MinhTT2", "email", "DOB", 1, "IDCard", "address", "phone", 1, "departmentID_2"),
                new LecturerDTO("lecturerID_3", "MinhTT3", "email", "DOB", 1, "IDCard", "address", "phone", 1, "departmentID_2"),
                new LecturerDTO("lecturerID_4", "MinhTT4", "email", "DOB", 1, "IDCard", "address", "phone", 1, "departmentID_2"),
                new LecturerDTO("lecturerID_5", "MinhTT5", "email", "DOB", 1, "IDCard", "address", "phone", 1, "departmentID_2"),
            };

        List<SlotTypeDTO> slotTypes = new List<SlotTypeDTO>()
            {
                //SlotTypeDTO(string slotTypeID, string timeStart, string timeEnd, int slotNumber, int status)
                new SlotTypeDTO("slotTypeID_1", "7:00", "9:15", 1, 1),
                new SlotTypeDTO("slotTypeID_2", "9:45", "12:00", 2, 1),
                new SlotTypeDTO("slotTypeID_3", "12:30", "14:45", 3, 1),
                new SlotTypeDTO("slotTypeID_4", "15:15", "17:30", 4, 1),
                new SlotTypeDTO("slotTypeID_5", "18:00", "20:15", 5, 1),
                new SlotTypeDTO("slotTypeID_6", "20:45", "23:00", 6, 1),

                new SlotTypeDTO("slotTypeID_7", "7:00", "9:15", 1, 1),
                new SlotTypeDTO("slotTypeID_8", "9:45", "12:00", 2, 1),
                new SlotTypeDTO("slotTypeID_9", "12:30", "14:45", 3, 1),
                new SlotTypeDTO("slotTypeID_10", "15:15", "17:30", 4, 1),
                new SlotTypeDTO("slotTypeID_11", "18:00", "20:15", 5, 1),
                new SlotTypeDTO("slotTypeID_12", "20:45", "23:00", 6, 1),

                new SlotTypeDTO("slotTypeID_13", "7:00", "9:15", 1, 1),
                new SlotTypeDTO("slotTypeID_14", "9:45", "12:00", 2, 1),
                new SlotTypeDTO("slotTypeID_15", "12:30", "14:45", 3, 1),
                new SlotTypeDTO("slotTypeID_16", "15:15", "17:30", 4, 1),
                new SlotTypeDTO("slotTypeID_17", "18:00", "20:15", 5, 1),
                new SlotTypeDTO("slotTypeID_18", "20:45", "23:00", 6, 1),

            };

        List<CourseDTO> courses = new List<CourseDTO>()
            {
                //CourseDTO(string courseID, string subjectID, string semesterID, string slotTypeID, string description, int slotAmount, int status)
                new CourseDTO("courseID_1", "subjectID_1", "semesterID_2", "slotTypeID_1", "description", 30, 1),
                new CourseDTO("courseID_2", "subjectID_1", "semesterID_2", "slotTypeID_2", "description", 30, 1),
                new CourseDTO("courseID_3", "subjectID_1", "semesterID_2", "slotTypeID_3", "description", 30, 1),
                new CourseDTO("courseID_4", "subjectID_1", "semesterID_2", "slotTypeID_4", "description", 30, 1),

                new CourseDTO("courseID_5", "subjectID_2", "semesterID_2", "slotTypeID_1", "description", 30, 1),
                new CourseDTO("courseID_6", "subjectID_2", "semesterID_2", "slotTypeID_2", "description", 30, 1),
                new CourseDTO("courseID_7", "subjectID_2", "semesterID_2", "slotTypeID_3", "description", 30, 1),
                new CourseDTO("courseID_8", "subjectID_2", "semesterID_2", "slotTypeID_4", "description", 30, 1),

                new CourseDTO("courseID_9", "subjectID_3", "semesterID_2", "slotTypeID_1", "description", 30, 1),
                new CourseDTO("courseID_10", "subjectID_3", "semesterID_2", "slotTypeID_2", "description", 30, 1),
                new CourseDTO("courseID_11", "subjectID_3", "semesterID_2", "slotTypeID_3", "description", 30, 1),
                new CourseDTO("courseID_12", "subjectID_3", "semesterID_2", "slotTypeID_4", "description", 30, 1),

                new CourseDTO("courseID_13", "subjectID_4", "semesterID_2", "slotTypeID_1", "description", 30, 1),
                new CourseDTO("courseID_14", "subjectID_4", "semesterID_2", "slotTypeID_2", "description", 30, 1),
                new CourseDTO("courseID_15", "subjectID_4", "semesterID_2", "slotTypeID_3", "description", 30, 1),
                new CourseDTO("courseID_16", "subjectID_4", "semesterID_2", "slotTypeID_4", "description", 30, 1),

                new CourseDTO("courseID_17", "subjectID_1", "semesterID_2", "slotTypeID_7", "description", 30, 1),
                new CourseDTO("courseID_18", "subjectID_1", "semesterID_2", "slotTypeID_8", "description", 30, 1),
                new CourseDTO("courseID_19", "subjectID_1", "semesterID_2", "slotTypeID_9", "description", 30, 1),
                new CourseDTO("courseID_20", "subjectID_1", "semesterID_2", "slotTypeID_10", "description", 30, 1),

                new CourseDTO("courseID_21", "subjectID_5", "semesterID_2", "slotTypeID_7", "description", 30, 1),
                new CourseDTO("courseID_22", "subjectID_5", "semesterID_2", "slotTypeID_9", "description", 30, 1),
            };

        List<SubjectOfLecturerDTO> subjectOfLecturers = new List<SubjectOfLecturerDTO>()
            {
                //SubjectOfLecturerDTO(string subjectOfLecturerID, string semesterID, string subjectID, string lecturerID, int favoritePoint, int feedbackPoint, int status)
                //thich SE
                new SubjectOfLecturerDTO( "subjectOfLecturerID_1", "semesterID_2","subjectID_1", "lecturerID_1", 5, 3, 1),
                new SubjectOfLecturerDTO( "subjectOfLecturerID_2", "semesterID_2","subjectID_2", "lecturerID_1", 5, 3, 1),
                new SubjectOfLecturerDTO( "subjectOfLecturerID_3", "semesterID_2","subjectID_3", "lecturerID_1", 4, 3, 1),
                new SubjectOfLecturerDTO( "subjectOfLecturerID_4", "semesterID_2","subjectID_4", "lecturerID_1", 1, 3, 1),
                new SubjectOfLecturerDTO( "subjectOfLecturerID_5", "semesterID_2","subjectID_5", "lecturerID_1", 5, 3, 1),

                //thich SE
                new SubjectOfLecturerDTO( "subjectOfLecturerID_6", "semesterID_2","subjectID_1", "lecturerID_2", 5, 3, 1),
                new SubjectOfLecturerDTO( "subjectOfLecturerID_7", "semesterID_2","subjectID_2", "lecturerID_2", 5, 3, 1),
                new SubjectOfLecturerDTO( "subjectOfLecturerID_8", "semesterID_2","subjectID_3", "lecturerID_2", 3, 3, 1),
                new SubjectOfLecturerDTO( "subjectOfLecturerID_9", "semesterID_2","subjectID_4", "lecturerID_2", 1, 3, 1),
                new SubjectOfLecturerDTO( "subjectOfLecturerID_10", "semesterID_2","subjectID_5", "lecturerID_2", 5, 3, 1),

                //thich toan
                new SubjectOfLecturerDTO( "subjectOfLecturerID_11", "semesterID_2","subjectID_1", "lecturerID_3", 1, 3, 1),
                new SubjectOfLecturerDTO( "subjectOfLecturerID_12", "semesterID_2","subjectID_2", "lecturerID_3", 1, 3, 1),
                new SubjectOfLecturerDTO( "subjectOfLecturerID_13", "semesterID_2","subjectID_3", "lecturerID_3", 2, 3, 1),
                new SubjectOfLecturerDTO( "subjectOfLecturerID_14", "semesterID_2","subjectID_4", "lecturerID_3", 5, 3, 1),
                new SubjectOfLecturerDTO( "subjectOfLecturerID_15", "semesterID_2","subjectID_5", "lecturerID_3", 2, 3, 1),

                //thich LAB
                new SubjectOfLecturerDTO( "subjectOfLecturerID_16", "semesterID_2","subjectID_1", "lecturerID_4", 3, 3, 1),
                new SubjectOfLecturerDTO( "subjectOfLecturerID_17", "semesterID_2","subjectID_2", "lecturerID_4", 3, 3, 1),
                new SubjectOfLecturerDTO( "subjectOfLecturerID_18", "semesterID_2","subjectID_3", "lecturerID_4", 5, 3, 1),
                new SubjectOfLecturerDTO( "subjectOfLecturerID_19", "semesterID_2","subjectID_4", "lecturerID_4", 1, 3, 1),
                new SubjectOfLecturerDTO( "subjectOfLecturerID_20", "semesterID_2","subjectID_5", "lecturerID_3", 3, 3, 1),

                //thich toan
                new SubjectOfLecturerDTO( "subjectOfLecturerID_21", "semesterID_2","subjectID_1", "lecturerID_5", 1, 3, 1),
                new SubjectOfLecturerDTO( "subjectOfLecturerID_22", "semesterID_2","subjectID_2", "lecturerID_5", 1, 3, 1),
                new SubjectOfLecturerDTO( "subjectOfLecturerID_23", "semesterID_2","subjectID_3", "lecturerID_5", 2, 3, 1),
                new SubjectOfLecturerDTO( "subjectOfLecturerID_24", "semesterID_2","subjectID_4", "lecturerID_5", 5, 3, 1),
                new SubjectOfLecturerDTO( "subjectOfLecturerID_25", "semesterID_2","subjectID_5", "lecturerID_3", 2, 3, 1),
            };

        List<LecturerSlotConfigDTO> lecturerSlotConfigs = new List<LecturerSlotConfigDTO>()
            {
                //LecturerSlotConfigDTO(string lecturerSlotConfigID, string semesterID, string lecturerID, string slotTypeID, int isEnable, int status)
                new LecturerSlotConfigDTO("lecturerSlotConfigID_1", "semesterID_2", "lecturerID_1", "slotTypeID_1", 1, 1),
                new LecturerSlotConfigDTO("lecturerSlotConfigID_2", "semesterID_2", "lecturerID_1", "slotTypeID_7", 1, 1),
                new LecturerSlotConfigDTO("lecturerSlotConfigID_3", "semesterID_2", "lecturerID_1", "slotTypeID_13", 1, 1),

                new LecturerSlotConfigDTO("lecturerSlotConfigID_4", "semesterID_2", "lecturerID_2", "slotTypeID_2", 1, 1),
                new LecturerSlotConfigDTO("lecturerSlotConfigID_5", "semesterID_2", "lecturerID_2", "slotTypeID_8", 1, 1),
                new LecturerSlotConfigDTO("lecturerSlotConfigID_6", "semesterID_2", "lecturerID_2", "slotTypeID_14", 1, 1),

                new LecturerSlotConfigDTO("lecturerSlotConfigID_7", "semesterID_2", "lecturerID_3", "slotTypeID_3", 1, 1),
                new LecturerSlotConfigDTO("lecturerSlotConfigID_8", "semesterID_2", "lecturerID_3", "slotTypeID_9", 1, 1),
                new LecturerSlotConfigDTO("lecturerSlotConfigID_9", "semesterID_2", "lecturerID_3", "slotTypeID_15", 1, 1),

                new LecturerSlotConfigDTO("lecturerSlotConfigID_10", "semesterID_2", "lecturerID_4", "slotTypeID_1", 1, 1),
                new LecturerSlotConfigDTO("lecturerSlotConfigID_10", "semesterID_2", "lecturerID_4", "slotTypeID_7", 1, 1),
                new LecturerSlotConfigDTO("lecturerSlotConfigID_10", "semesterID_2", "lecturerID_4", "slotTypeID_13", 1, 1),

                new LecturerSlotConfigDTO("lecturerSlotConfigID_11", "semesterID_2", "lecturerID_5", "slotTypeID_1", 1, 1),
                new LecturerSlotConfigDTO("lecturerSlotConfigID_12", "semesterID_2", "lecturerID_5", "slotTypeID_7", 1, 1),
                new LecturerSlotConfigDTO("lecturerSlotConfigID_12", "semesterID_2", "lecturerID_5", "slotTypeID_13", 1, 1),
            };

        List<LecturerCourseGroupDTO> lecturerCourseGroups = new List<LecturerCourseGroupDTO>()
            {
                //LecturerCourseGroupDTO(string lecturerCourseGroupID, string lecturerID, string semesterID, string groupName, int priority, int minCourse, int maxCourse, int status)
                new LecturerCourseGroupDTO("lecturerCourseGroupID_1", "lecturerID_1", "semesterID_2", "groupName_1", 3, 1, 2, 1),
                new LecturerCourseGroupDTO("lecturerCourseGroupID_2", "lecturerID_2", "semesterID_2", "groupName_1", 3, 1, 2, 1),
                new LecturerCourseGroupDTO("lecturerCourseGroupID_3", "lecturerID_3", "semesterID_2", "groupName_1", 3, 1, 2, 1),
                new LecturerCourseGroupDTO("lecturerCourseGroupID_4", "lecturerID_4", "semesterID_2", "groupName_1", 3, 1, 2, 1),
                new LecturerCourseGroupDTO("lecturerCourseGroupID_5", "lecturerID_5", "semesterID_2", "groupName_1", 3, 1, 2, 1),
            };

        List<CourseGroupItemDTO> courseGroupItems = new List<CourseGroupItemDTO>();

        List<CourseAssignDTO> courseAssigns = new List<CourseAssignDTO>();

        static List<CourseAssignDTO> ThuatToanXepLich(List<CourseDTO> courseDTOs, List<CourseGroupItemDTO> courseGroupItemDTOs, List<DepartmentDTO> departmentDTOs, List<CourseAssignDTO> courseAssignDTOs,
            List<LecturerCourseGroupDTO> lecturerCourseGroupDTOs, List<LecturerDTO> lecturerDTOs, List<LecturerSlotConfigDTO> lecturerSlotConfigDTOs, List<SemesterDTO> semesterDTOs, List<SlotTypeDTO> slotTypeDTOs,
            List<SubjectDTO> subjectDTOs, List<SubjectOfLecturerDTO> subjectOfLecturerDTOs)
        {
            return courseAssignDTOs;
        }


        static void Main(string[] args)
        {
            //ThuatToanXepLich           
        }

        


    }
}

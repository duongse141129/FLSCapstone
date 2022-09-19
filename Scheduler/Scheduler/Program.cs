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
        static List<SemesterDTO> semesters = new List<SemesterDTO>()
            {
                //SemesterDTO(string semesterID, string term, string dateStart, string dateEnd, int status)
                new SemesterDTO("semesterID_1", "SPRING2021", "ngay bat dau", "ngay ket thuc", 1),
                new SemesterDTO("semesterID_2", "SUMMER2021", "ngay bat dau", "ngay ket thuc", 1),
            };
        static List<DepartmentDTO> departments = new List<DepartmentDTO>()
            {
                //DepartmentDTO(string departmentID, string departmentName, int status)
                new DepartmentDTO("departmentID_1", "LAB", 1),
                new DepartmentDTO("departmentID_2", "SE", 1),
                new DepartmentDTO("departmentID_3", "TOAN", 1),
            };
        static List<SubjectDTO> subjects = new List<SubjectDTO>()
            {
                //SubjectDTO(string subjectID, string subjectName, string description, int status, string departmentID)
                new SubjectDTO("subjectID_1", "SWD201",  "description", 1, "departmentID_2"),
                new SubjectDTO("subjectID_2", "PMG201",  "description", 1, "departmentID_2"),
                new SubjectDTO("subjectID_3", "LAB201",  "description", 1, "departmentID_1"),
                new SubjectDTO("subjectID_4", "MAD201",  "description", 1, "departmentID_3"),
                new SubjectDTO("subjectID_5", "ITE302c",  "description", 1, "departmentID_2"),
            };// all subject
        static List<LecturerDTO> lecturers = new List<LecturerDTO>()
            {
                //LecturerDTO(string lecturerID, string lecturerName, string email, string dOB, int gender, string iDCard, string address, string phone, int status, string departmentID)
                new LecturerDTO("lecturerID_1", "MinhTT1", "email", "DOB", 1, "IDCard", "address", "phone", 1, "departmentID_2"),
                new LecturerDTO("lecturerID_2", "MinhTT2", "email", "DOB", 1, "IDCard", "address", "phone", 1, "departmentID_2"),
                new LecturerDTO("lecturerID_3", "MinhTT3", "email", "DOB", 1, "IDCard", "address", "phone", 1, "departmentID_2"),
                new LecturerDTO("lecturerID_4", "MinhTT4", "email", "DOB", 1, "IDCard", "address", "phone", 1, "departmentID_2"),
                new LecturerDTO("lecturerID_5", "MinhTT5", "email", "DOB", 1, "IDCard", "address", "phone", 1, "departmentID_2"),
            };// chua cac lecturer thuoc department dang xep lich
        static List<SlotTypeDTO> slotTypes = new List<SlotTypeDTO>()
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
        static List<CourseDTO> courses = new List<CourseDTO>()
            {
                //CourseDTO(string courseID, string subjectID, string semesterID, string slotTypeID, string description, int slotAmount, int status)
                new CourseDTO("courseID_1", "subjectID_1", "semesterID_2", "slotTypeID_3", "description", 30, 1),
                new CourseDTO("courseID_2", "subjectID_1", "semesterID_2", "slotTypeID_2", "description", 30, 1),
                new CourseDTO("courseID_3", "subjectID_1", "semesterID_2", "slotTypeID_3", "description", 30, 1),
                new CourseDTO("courseID_4", "subjectID_1", "semesterID_2", "slotTypeID_4", "description", 30, 1),

                new CourseDTO("courseID_5", "subjectID_2", "semesterID_2", "slotTypeID_5", "description", 30, 1),
                new CourseDTO("courseID_6", "subjectID_2", "semesterID_2", "slotTypeID_6", "description", 30, 1),
                new CourseDTO("courseID_7", "subjectID_2", "semesterID_2", "slotTypeID_7", "description", 30, 1),
                new CourseDTO("courseID_8", "subjectID_2", "semesterID_2", "slotTypeID_8", "description", 30, 1),

                new CourseDTO("courseID_9", "subjectID_3", "semesterID_2", "slotTypeID_1", "description", 30, 1),
                new CourseDTO("courseID_10", "subjectID_3", "semesterID_2", "slotTypeID_2", "description", 30, 1),
                new CourseDTO("courseID_11", "subjectID_3", "semesterID_2", "slotTypeID_3", "description", 30, 1),
                new CourseDTO("courseID_12", "subjectID_3", "semesterID_2", "slotTypeID_4", "description", 30, 1),

                new CourseDTO("courseID_13", "subjectID_4", "semesterID_2", "slotTypeID_1", "description", 30, 1),
                new CourseDTO("courseID_14", "subjectID_4", "semesterID_2", "slotTypeID_2", "description", 30, 1),
                new CourseDTO("courseID_15", "subjectID_4", "semesterID_2", "slotTypeID_3", "description", 30, 1),
                new CourseDTO("courseID_16", "subjectID_4", "semesterID_2", "slotTypeID_4", "description", 30, 1),

                new CourseDTO("courseID_17", "subjectID_1", "semesterID_2", "slotTypeID_9", "description", 30, 1),
                new CourseDTO("courseID_18", "subjectID_1", "semesterID_2", "slotTypeID_10", "description", 30, 1),
                new CourseDTO("courseID_19", "subjectID_1", "semesterID_2", "slotTypeID_3", "description", 30, 1),
                new CourseDTO("courseID_20", "subjectID_1", "semesterID_2", "slotTypeID_4", "description", 30, 1),

                new CourseDTO("courseID_21", "subjectID_5", "semesterID_2", "slotTypeID_7", "description", 30, 1),
                new CourseDTO("courseID_22", "subjectID_5", "semesterID_2", "slotTypeID_9", "description", 30, 1),
            };// all course trong semester se xep lich
        static List<SubjectOfLecturerDTO> subjectOfLecturers = new List<SubjectOfLecturerDTO>()
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
                new SubjectOfLecturerDTO( "subjectOfLecturerID_20", "semesterID_2","subjectID_5", "lecturerID_4", 3, 3, 1),

                //thich toan
                new SubjectOfLecturerDTO( "subjectOfLecturerID_21", "semesterID_2","subjectID_1", "lecturerID_5", 1, 3, 1),
                new SubjectOfLecturerDTO( "subjectOfLecturerID_22", "semesterID_2","subjectID_2", "lecturerID_5", 1, 3, 1),
                new SubjectOfLecturerDTO( "subjectOfLecturerID_23", "semesterID_2","subjectID_3", "lecturerID_5", 2, 3, 1),
                new SubjectOfLecturerDTO( "subjectOfLecturerID_24", "semesterID_2","subjectID_4", "lecturerID_5", 5, 3, 1),
                new SubjectOfLecturerDTO( "subjectOfLecturerID_25", "semesterID_2","subjectID_5", "lecturerID_5", 2, 3, 1),
            };
        static List<LecturerSlotConfigDTO> lecturerSlotConfigs = new List<LecturerSlotConfigDTO>()
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
        static List<LecturerCourseGroupDTO> lecturerCourseGroups = new List<LecturerCourseGroupDTO>()
            {
                //LecturerCourseGroupDTO(string lecturerCourseGroupID, string lecturerID, string semesterID, string groupName, int priority, int minCourse, int maxCourse, int status)
                new LecturerCourseGroupDTO("lecturerCourseGroupID_1", "lecturerID_1", "semesterID_2", "groupName_1", 3, 2, 3, 1),
                new LecturerCourseGroupDTO("lecturerCourseGroupID_2", "lecturerID_2", "semesterID_2", "groupName_1", 3, 2, 4, 1),
                new LecturerCourseGroupDTO("lecturerCourseGroupID_3", "lecturerID_3", "semesterID_2", "groupName_1", 3, 2, 4, 1),
                new LecturerCourseGroupDTO("lecturerCourseGroupID_4", "lecturerID_4", "semesterID_2", "groupName_1", 3, 2, 4, 1),
                new LecturerCourseGroupDTO("lecturerCourseGroupID_5", "lecturerID_5", "semesterID_2", "groupName_1", 3, 2, 3, 1),
            };
        static List<CourseGroupItemDTO> courseGroupItems = new List<CourseGroupItemDTO>();

        static DepartmentDTO department = new DepartmentDTO("departmentID_2", "SE", 1);
        static SemesterDTO semester = new SemesterDTO("semesterID_2", "SUMMER2021", "ngay bat dau", "ngay ket thuc", 1);
        static Random rd = new Random();
        static List<CourseAssignDTO> ThuatToanXepLich(List<CourseDTO> courseDTOs, List<CourseGroupItemDTO> courseGroupItemDTOs, DepartmentDTO departmentDTOs,
            List<LecturerCourseGroupDTO> lecturerCourseGroupDTOs, List<LecturerDTO> lecturerDTOs, List<LecturerSlotConfigDTO> lecturerSlotConfigDTOs, SemesterDTO semesterDTO, List<SlotTypeDTO> slotTypeDTOs,
            List<SubjectDTO> subjectDTOs, List<SubjectOfLecturerDTO> subjectOfLecturerDTOs)
        {

            //schedule dau tien = null , schedule'point  =0
            //500 con kien (500 vong for)
                //for n giang vien trong department
                    //random bat ky 1 giang vien de xep lich dau tien (uu tien part time lecturer)
                    //for n lan (random n nam trong minCourse < n < maxCourse) (1)
                        //random 1 mon de xep lich, tinh so diem phu hop cua giang vien do voi course
                    //dong vong lap, co duoc lich cua giang vien (1) va so diem phu hop cua giang vien do voi lich cua giang vien do
                //dong vong lap
                //co lich cua tat ca cac giang vien va diem phu hop cua moi giang vien voi lich cua minh
                //=> tu do tinh ra diem cua schedule nay, cap nhat diem va schedule neu diem lon hon schedule cu 
            //tim ra duoc schedule co diem cao nhat     

            List<CourseAssignDTO> courseAssignDTOs = new List<CourseAssignDTO>(); //scheduler phu hop nhat
            int schedulerPoint_Max = 0; // schedule'point max      
           
            

            for (int i=0; i<= 500; i++)
            {
                List<CourseAssignDTO> courseAssignDTOsTemp = new List<CourseAssignDTO>(); //scheduler temp
                int schedulerPoint_Temp = 0; // schedule'point temp

                int courseAssignID_Temp = 0;
                List<int> listLecturersPoint_Scheduler = new List<int>();

                List<LecturerDTO> listLecturerRandom = new List<LecturerDTO>(); 
                for(int index=0; index < lecturerDTOs.Count; index++)
                {
                    listLecturerRandom.Add(lecturerDTOs[index]);
                }

                
                foreach (var lecturer in lecturerDTOs)
                {
                    

                    int lecturerPoint_Scheduler = 0; //diem phu hop cua giang vien do voi scheduler cua ban than

                    LecturerDTO lecturerRandom = RandomLecturer(listLecturerRandom);//random giang vien, khong chon giang vien da random roi
                                        
                    int courseAmountOfLecturer = RandomCourseAmountOfLecturer(lecturerCourseGroupDTOs, lecturerRandom, semesterDTO);// random so luong course giang vien do se day
               
                   
                    for (int k =0; k < courseAmountOfLecturer; k++)
                    {
                        int lecturerPoint_Course = 0;
                        
                        CourseDTO courseRandom = new CourseDTO();
                        
                        courseRandom = RandomCourse(courseDTOs, courseAssignDTOsTemp, lecturerRandom, courseRandom, semesterDTO.SemesterID);
                        
                        if (courseRandom != null)
                        {
    
                            courseAssignDTOsTemp.Add(new CourseAssignDTO("CA" + courseAssignID_Temp, lecturerRandom.LecturerID, courseRandom.CourseID, 1));
                            courseAssignID_Temp++;         
                            
                            // tinh diem cua lecturer + course
                            var favoritePoint = from subjectOfLecturerDTO in subjectOfLecturerDTOs
                                                where subjectOfLecturerDTO.LecturerID == lecturerRandom.LecturerID
                                                && subjectOfLecturerDTO.SemesterID == semesterDTO.SemesterID && subjectOfLecturerDTO.SubjectID == courseRandom.SubjectID
                                                select subjectOfLecturerDTO.FavoritePoint;

                            var feedbackPoint = from subjectOfLecturerDTO in subjectOfLecturerDTOs
                                                where subjectOfLecturerDTO.LecturerID == lecturerRandom.LecturerID
                                                && subjectOfLecturerDTO.SemesterID == semesterDTO.SemesterID && subjectOfLecturerDTO.SubjectID == courseRandom.SubjectID
                                                select subjectOfLecturerDTO.FeedbackPoint;

                            var likeSlotTime = from lecturerSlotConfigDTO in lecturerSlotConfigDTOs
                                               where lecturerSlotConfigDTO.LecturerID == lecturerRandom.LecturerID
                                               && lecturerSlotConfigDTO.SemesterID == semesterDTO.SemesterID && lecturerSlotConfigDTO.SlotTypeID == courseRandom.SlotTypeID
                                               select lecturerSlotConfigDTO.IsEnable;
                            int pointSlot = 0;
                            if (Convert.ToInt32(likeSlotTime.ElementAtOrDefault(0)) == 1)
                            {
                                pointSlot = 2;
                            }
                            //tinh Lecturer-Course point    9  + 5 + 2 
                            lecturerPoint_Course = (Convert.ToInt32(feedbackPoint.ElementAt(0)) * 3 + Convert.ToInt32(favoritePoint.ElementAt(0)) + pointSlot);
                            lecturerPoint_Scheduler += lecturerPoint_Course;
                            
                        }                      
                    }                    
                    // tinh Lecturer-theirScheduler point 
                    listLecturersPoint_Scheduler.Add(lecturerPoint_Scheduler) ;
                }
                //tinh scheduler-department point, cap nhat scheduler moi neu diem cao hon
                schedulerPoint_Temp = listLecturersPoint_Scheduler.Sum();
                if (schedulerPoint_Max < schedulerPoint_Temp)
                {
                    courseAssignDTOs = courseAssignDTOsTemp;
                    schedulerPoint_Max = schedulerPoint_Temp;
                }
                      
            }

            Console.WriteLine(schedulerPoint_Max);
            return courseAssignDTOs;
        }

        static LecturerDTO RandomLecturer(List<LecturerDTO> listLecturerRandom)//random lecturer, xoa lecturer da random duoc khoi danh sach
        {
 
            int lecturerRandomIndex = rd.Next(0, listLecturerRandom.Count);
            LecturerDTO lecturerRandom = listLecturerRandom[lecturerRandomIndex];

            listLecturerRandom.RemoveAt(lecturerRandomIndex);
            return lecturerRandom;
        }

        static int RandomCourseAmountOfLecturer(List<LecturerCourseGroupDTO> lecturerCourseGroupDTOs, LecturerDTO lecturerRandom, SemesterDTO semesterDTO)//// random so luong course giang vien do se day
        {

            var min = from LecturerCourseGroup in lecturerCourseGroupDTOs
                      where LecturerCourseGroup.LecturerID == lecturerRandom.LecturerID && LecturerCourseGroup.SemesterID == semesterDTO.SemesterID
                      select LecturerCourseGroup.MinCourse;

            var max = from LecturerCourseGroup in lecturerCourseGroupDTOs
                      where LecturerCourseGroup.LecturerID == lecturerRandom.LecturerID && LecturerCourseGroup.SemesterID == semesterDTO.SemesterID
                      select LecturerCourseGroup.MaxCourse;

            int minCourseOfLecturer = Convert.ToInt32(min.ElementAt(0));
            int maxCourseOfLecturer = Convert.ToInt32(max.ElementAt(0));

            int courseAmountOfLecturer = rd.Next(minCourseOfLecturer, maxCourseOfLecturer +1);// random so luong course giang vien do se day           
            return courseAmountOfLecturer;
        }

        static CourseDTO RandomCourse( List<CourseDTO> courseDTOs, List<CourseAssignDTO> courseAssignDTOsTemp, LecturerDTO lecturerRandom, CourseDTO courseRandom, string semesterID)
        {           
            if (courseAssignDTOsTemp.Count > 0)                
            {
                var slotTypePicked = from course in courseDTOs
                                     join courseAssign in courseAssignDTOsTemp on course.CourseID equals courseAssign.CourseID
                                     where courseAssign.LecturerID == lecturerRandom.LecturerID && course.SemesterID == semesterID
                                     select (course.SlotTypeID);
                if (slotTypePicked.ElementAtOrDefault(0) !=null)
                {
                    List<CourseDTO> listCourseRandom = new List<CourseDTO>();
                    foreach (var course in courseDTOs)
                    {
                        int checkDuplication = 0;
                        foreach (var courseAssignDTO in courseAssignDTOsTemp)
                        {
                            if (course.CourseID == courseAssignDTO.CourseID)
                            {
                                checkDuplication = 1;
                                break;
                            };
                        }
                        foreach (var slotType in slotTypePicked)
                        {
                            if (course.SlotTypeID == slotType.ToString())
                            {
                                checkDuplication = 1;
                                break;
                            };
                        }
                        if (checkDuplication == 0 && !listCourseRandom.Contains(course))
                        {
                            listCourseRandom.Add(course);
                        }

                    }
                    int CourseRandomIndex = rd.Next(0, listCourseRandom.Count);
                    courseRandom = listCourseRandom[CourseRandomIndex];
                }
                else
                {
                    List<CourseDTO> listCourseRandom = new List<CourseDTO>();
                    foreach (var course in courseDTOs)
                    {
                        int checkDuplication = 0;
                        foreach (var courseAssignDTO in courseAssignDTOsTemp)
                        {
                            if (course.CourseID == courseAssignDTO.CourseID)
                            {
                                checkDuplication = 1;
                                break;
                            };
                        }                       
                        if (checkDuplication == 0 && !listCourseRandom.Contains(course))
                        {
                            listCourseRandom.Add(course);
                        }

                    }
                    int CourseRandomIndex = rd.Next(0, listCourseRandom.Count);
                    courseRandom = listCourseRandom[CourseRandomIndex];
                }
                

            }
            else
            {
                int CourseRandomIndex = rd.Next(0, courseDTOs.Count);
                courseRandom = courseDTOs[CourseRandomIndex];
            }
                          
            return courseRandom;
        }

        
     

        static void Main(string[] args)
        {
            List<CourseAssignDTO> courseAssignDTOs = ThuatToanXepLich(courses, courseGroupItems, department, lecturerCourseGroups, lecturers,
                lecturerSlotConfigs, semester, slotTypes, subjects, subjectOfLecturers);

            foreach (var scheduler in courseAssignDTOs)
            {
                var SlotType = from courseAssign in courseAssignDTOs
                               join course in courses on courseAssign.CourseID equals course.CourseID
                               where scheduler.CourseID == course.CourseID
                               select course.SlotTypeID;

                Console.WriteLine(scheduler.ToString() + "--------" + SlotType.ElementAt(0));
            }


            
        }



    }
}

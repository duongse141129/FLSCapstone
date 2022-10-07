using FPTULecturerScheduler.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FPTULecturerScheduler
{

    public class LecturerScheduler
    {
        public static int HESO_FEEDBACKPOINT = 3;
        public static int HESO_FAVORITEPOINT = 1;
        public static int SLOTPOINT = 2;
        public static int MaxCourseSubjectDiff = 3;
        public static int MaxCourseSlot = 70;

        static Random rd = new Random();

        public static List<Course> Courses { get; set; }
        public static List<CourseAssign> CourseAssigns { get; set; }
        public static List<CourseGroupItem> CourseGroupItems { get; set; }
        public static List<Department> Departments { get; set; }
        public static List<Lecturer> Lecturers { get; set; }
        public static List<LecturerCourseGroup> LecturerCourseGroups { get; set; }
        public static List<LecturerSlotConfig> LecturerSlotConfigs { get; set; }
        public static Semester Semester { get; set; }
        public static List<SlotType> SlotTypes { get; set; }
        public static List<Subject> Subjects { get; set; }
        public static List<SubjectOfLecturer> SubjectOfLecturers { get; set; }
        public static List<CourseAssign> Run()
        {
            List<CourseAssign> courseAssign = ThuatToanXepLich(Courses, CourseGroupItems, LecturerCourseGroups, Lecturers,
                LecturerSlotConfigs, Semester, SlotTypes, Subjects, SubjectOfLecturers, MaxCourseSlot);
            return courseAssign;
        }


        static int RandomCourseAmountOfLecturer(List<LecturerCourseGroup> lecturerCourseGroupDTOs, Lecturer lecturerRandom, Semester semesterDTO)//// random so luong course giang vien do se day
        {

            var min = from LecturerCourseGroup in lecturerCourseGroupDTOs
                      where LecturerCourseGroup.LecturerID == lecturerRandom.ID && LecturerCourseGroup.SemesterID == semesterDTO.ID
                      select LecturerCourseGroup.MinCourse;

            var max = from LecturerCourseGroup in lecturerCourseGroupDTOs
                      where LecturerCourseGroup.LecturerID == lecturerRandom.ID && LecturerCourseGroup.SemesterID == semesterDTO.ID
                      select LecturerCourseGroup.MaxCourse;

            int minCourseOfLecturer = Convert.ToInt32(min.ElementAt(0));
            int maxCourseOfLecturer = Convert.ToInt32(max.ElementAt(0));

            int courseAmountOfLecturer = rd.Next(minCourseOfLecturer, maxCourseOfLecturer + 1);// random so luong course giang vien do se day           
            return courseAmountOfLecturer;
        }
        static int TinhDiemLecturer_Course(List<SubjectOfLecturer> subjectOfLecturerDTOs, List<LecturerSlotConfig> lecturerSlotConfigDTOs, string lecturerID, string semesterID, Course courseRandom)// ham dung de tinh diem toi uu cua lecturer voi course
        {
            var favoritePoint = from subjectOfLecturerDTO in subjectOfLecturerDTOs
                                where subjectOfLecturerDTO.LecturerID == lecturerID
                                && subjectOfLecturerDTO.SemesterID == semesterID && subjectOfLecturerDTO.SubjectID == courseRandom.SubjectID
                                select subjectOfLecturerDTO.FavoritePoint;

            var feedbackPoint = from subjectOfLecturerDTO in subjectOfLecturerDTOs
                                where subjectOfLecturerDTO.LecturerID == lecturerID
                                && subjectOfLecturerDTO.SemesterID == semesterID && subjectOfLecturerDTO.SubjectID == courseRandom.SubjectID
                                select subjectOfLecturerDTO.FeedbackPoint;


            int lecturerPoint_Course = (Convert.ToInt32(feedbackPoint.ElementAtOrDefault(0)) * HESO_FEEDBACKPOINT + Convert.ToInt32(favoritePoint.ElementAtOrDefault(0)) * HESO_FAVORITEPOINT);
            return lecturerPoint_Course;
        }
        static List<CourseLecturerPoint> GetHighCoursesOfLecturer(List<Subject> subjectDTOs, List<LecturerCourseGroup> lecturerCourseGroups, List<CourseGroupItem> courseGroupItems, List<SubjectOfLecturer> subjectOfLecturerDTOs, List<LecturerSlotConfig> lecturerSlotConfigDTOs, List<Course> courseDTOs, List<CourseAssign> courseAssignDTOsTemp, Lecturer lecturer, string semesterID)// lay course cao diem nhat cua giang vien 
        {
            //lay cac course cua lecturer
            List<Course> courseOfLecturer = new List<Course>();

            var priorityCourses = from course in courseDTOs
                                  join courseGroupItem in courseGroupItems on course.ID equals courseGroupItem.CourseID
                                  join lecturerCourseGroup in lecturerCourseGroups on courseGroupItem.LecturerCourseGroupID equals lecturerCourseGroup.ID
                                  where course.SemesterID == semesterID && course.status == 1 && lecturerCourseGroup.LecturerID == lecturer.ID
                                  select new Course(course.ID, course.SubjectID, course.SemesterID, course.SlotTypeID, course.Description, course.SlotAmount, courseGroupItem.Priority, course.status);

            var departmentCourses = from course in courseDTOs
                                    join subject in subjectDTOs on course.SubjectID equals subject.ID
                                    where subject.DepartmentID == lecturer.DepartmentID
                                    select new Course(course.ID, course.SubjectID, course.SemesterID, course.SlotTypeID, course.Description, course.SlotAmount, course.status);

            foreach (var course in priorityCourses)
            {
                courseOfLecturer.Add(course);
            }

            foreach (var course in departmentCourses)
            {
                int checkDuplicate = 0;
                foreach (Course course1 in courseOfLecturer)
                {
                    if (course.ID == course1.ID)
                    {
                        checkDuplicate = 1;
                    }
                }

                if (checkDuplicate == 0)
                {
                    courseOfLecturer.Add(course);
                }
            }


            List<CourseLecturerPoint> listCourseOfLecturer = new List<CourseLecturerPoint>();
            if (courseAssignDTOsTemp.Count > 0)//vong lap sau
            {
                foreach (Course course in courseOfLecturer)
                {
                    int check = 0;
                    foreach (var courseAssignDTO in courseAssignDTOsTemp) //kiem tra Course chua duoc giang vien khac pick 
                    {
                        if (course.ID == courseAssignDTO.CourseID)
                        {
                            check = 1;
                            break;
                        };
                    }

                    //danh sach cac subject da dat so luong maxCourse 
                    List<string> subjectMax = CheckMaxCourseSubject(subjectOfLecturerDTOs, listCourseOfLecturer, lecturer, semesterID);
                    if (subjectMax.Count > 0)
                    {
                        foreach (string subjectid in subjectMax)
                        {
                            if (course.SubjectID == subjectid)
                            {
                                check = 1;
                            }
                        }
                    }

                    if (check == 0) //them course vao danh sach 
                    {
                        int lecturerCoursePoint = TinhDiemLecturer_Course(subjectOfLecturerDTOs, lecturerSlotConfigDTOs, lecturer.ID, semesterID, course);
                        listCourseOfLecturer.Add(new CourseLecturerPoint(course, lecturerCoursePoint, course.Priority));

                    }
                }
                if (listCourseOfLecturer.Count == 0)
                {
                    return null;
                }
                else
                {
                    List<CourseLecturerPoint> sortedListCourseOfLecturer = listCourseOfLecturer.OrderByDescending(courseLecturer => courseLecturer.Priority).ThenByDescending(courseLecturer => courseLecturer.Score).ToList();
                    return sortedListCourseOfLecturer;

                }
            }
            else//vong dau tien, chua co giang vien nao pick course
            {
                foreach (Course course in courseOfLecturer)
                {

                    //danh sach cac subject da dat so luong maxCourse 
                    List<string> subjectMax = CheckMaxCourseSubject(subjectOfLecturerDTOs, listCourseOfLecturer, lecturer, semesterID);
                    if (subjectMax.Count > 0)
                    {
                        int checkMaxCourse = 0;
                        foreach (string subjectid in subjectMax)
                        {
                            if (course.SubjectID == subjectid)
                            {
                                checkMaxCourse = 1;
                            }
                        }
                        if (checkMaxCourse == 0)
                        {
                            int lecturerCoursePoint = TinhDiemLecturer_Course(subjectOfLecturerDTOs, lecturerSlotConfigDTOs, lecturer.ID, semesterID, course);
                            listCourseOfLecturer.Add(new CourseLecturerPoint(course, lecturerCoursePoint, course.Priority));
                        }

                    }
                    else
                    {
                        int lecturerCoursePoint = TinhDiemLecturer_Course(subjectOfLecturerDTOs, lecturerSlotConfigDTOs, lecturer.ID, semesterID, course);
                        listCourseOfLecturer.Add(new CourseLecturerPoint(course, lecturerCoursePoint, course.Priority));
                    }

                }

                if (listCourseOfLecturer.Count == 0)
                {
                    return null;
                }
                else
                {
                    List<CourseLecturerPoint> sortedListCourseOfLecturer = listCourseOfLecturer.OrderByDescending(courseLecturer => courseLecturer.Priority).ThenByDescending(courseLecturer => courseLecturer.Score).ToList();
                    return sortedListCourseOfLecturer;
                }
            }
        }
        static List<string> CheckMaxCourseSubject(List<SubjectOfLecturer> subjectOfLecturerDTOs, List<CourseLecturerPoint> listCourseOfLecturer, Lecturer lecturerRandom, string semesterID)//ham nay de check subject da co so luong maxCourse 
        {
            List<SubjectOfLecturer> subjectIDCheck = new List<SubjectOfLecturer>();
            List<string> subjectMax = new List<string>();//list cac subject khong the them course
            foreach (var coursePoint in listCourseOfLecturer)
            {
                if (subjectIDCheck.Count == 0)
                {
                    subjectIDCheck.Add(new SubjectOfLecturer("temp", semesterID, coursePoint.Course.SubjectID, lecturerRandom.ID, 0, 0, 1, 1));
                }
                else
                {
                    int checkUpdate = 0;
                    foreach (var subject in subjectIDCheck)
                    {
                        if (coursePoint.Course.SubjectID == subject.SubjectID)
                        {

                            subject.MaxCourseSubject = subject.MaxCourseSubject + 1;
                            checkUpdate = 1;

                        }
                    }
                    if (checkUpdate == 0)
                    {
                        subjectIDCheck.Add(new SubjectOfLecturer("temp", semesterID, coursePoint.Course.SubjectID, lecturerRandom.ID, 0, 0, 1, 1));

                    }
                }

            }

            var maxCourseSubject = from subjectOfLecturer in subjectOfLecturerDTOs
                                   where subjectOfLecturer.SemesterID == semesterID && subjectOfLecturer.LecturerID == lecturerRandom.ID
                                   select (subjectOfLecturer.SubjectID, subjectOfLecturer.MaxCourseSubject);

            foreach (var subject in subjectIDCheck)
            {
                int subjectKhacBoMon = 1;
                int check = 0;
                foreach (var maxCourse in maxCourseSubject)
                {
                    if (subject.SubjectID == maxCourse.SubjectID && subject.MaxCourseSubject >= Convert.ToInt32(maxCourse.MaxCourseSubject))
                    {
                        check = 1;
                        break;
                    }
                    if (subject.SubjectID == maxCourse.SubjectID)
                    {
                        subjectKhacBoMon = 0;
                    }
                }

                if (subjectKhacBoMon == 1)
                {
                    if (subject.MaxCourseSubject >= MaxCourseSubjectDiff)
                    {
                        check = 1;
                    }
                }

                if (check == 1)
                {
                    subjectMax.Add(subject.SubjectID);
                }



            }


            return subjectMax;
        }
        static List<CourseLecturerPoint> FillCourseSlot(List<CourseAssign> courseAssignDTOsTemp, List<LecturerSlotConfig> lecturerSlotConfigs, List<CourseLecturerPoint> listCourseOfLecturer, Lecturer lecturer, List<Course> courses, string semesterID, List<SlotType> slotTypes, int Max)
        {
            if (listCourseOfLecturer == null)
            {
                return null;
            }

            //return danh sach course theo slot
            List<CourseLecturerPoint> temp = new List<CourseLecturerPoint>();

            //cac slot giang vien do ua thich
            var favoriteSlot = from lecturerSlotConfig in lecturerSlotConfigs
                               where lecturerSlotConfig.LecturerID == lecturer.ID && lecturerSlotConfig.SemesterID == semesterID
                               select lecturerSlotConfig.SlotTypeID;


            if (courseAssignDTOsTemp.Count > 0)
            {
                //kiem tra course cua 1 lop khong the duoc day cung 1 thoi diem
                var conflictSlotTime = from courseAssign in courseAssignDTOsTemp
                                       join course in courses on courseAssign.CourseID equals course.ID
                                       select (courseAssign.CourseID, courseAssign.SlotTypeID);


                //them course vo slot ua thich truoc
                foreach (var favoriteSlotType in favoriteSlot)
                {
                    //kiem tra so luong course 1 slot co the day toi da (so luong phong hoc)
                    var slotMaxCourse = from courseAssign in courseAssignDTOsTemp
                                        where courseAssign.SlotTypeID == favoriteSlotType
                                        group courseAssign by courseAssign.SlotTypeID into gr
                                        let count = gr.Count()
                                        select count;

                    foreach (var course in listCourseOfLecturer)
                    {
                        int check = 0;
                        foreach (var conflict in conflictSlotTime)
                        {
                            string[] group1 = course.Course.ID.Split('_');
                            string[] group2 = conflict.CourseID.Split('_');
                            if (group1[1] == group2[1] && favoriteSlotType == conflict.SlotTypeID)
                            {
                                check = 1;
                                break;
                            }
                        }
                        if (Convert.ToInt32(slotMaxCourse.ElementAtOrDefault(0)) >= Max)
                        {
                            check = 1;
                            break;
                        }

                        foreach (var coursePoint in temp)
                        {
                            if (coursePoint.Course.ID == course.Course.ID)
                            {
                                check = 1;
                                break;
                            }
                        }

                        if (check == 0)
                        {
                            course.Course.SlotTypeID = favoriteSlotType;
                            course.Score = course.Score + SLOTPOINT;
                            temp.Add(course);
                            break;
                        }
                    }

                }

                //them course vo cac slot khac
                foreach (var slotType in slotTypes)
                {
                    //kiem tra so luong course 1 slot co the day toi da (so luong phong hoc)
                    var slotMaxCourse = from courseAssign in courseAssignDTOsTemp
                                        where courseAssign.SlotTypeID == slotType.ID
                                        group courseAssign by courseAssign.SlotTypeID into gr
                                        let count = gr.Count()
                                        select count;

                    int check = 0;
                    foreach (var favoriteSlotType in favoriteSlot)
                    {
                        if (slotType.ID == favoriteSlotType)
                        {
                            check = 1;
                            break;
                        }
                    }

                    if (check == 0)
                    {
                        foreach (var course in listCourseOfLecturer)
                        {
                            int check1 = 0;
                            foreach (var conflict in conflictSlotTime)
                            {
                                string[] group1 = course.Course.ID.Split('_');
                                string[] group2 = conflict.CourseID.Split('_');
                                if (group1[1] == group2[1] && slotType.ID == conflict.SlotTypeID)
                                {
                                    check1 = 1;
                                    break;
                                }
                            }

                            if (Convert.ToInt32(slotMaxCourse.ElementAtOrDefault(0)) >= Max)
                            {
                                check1 = 1;
                                break;
                            }

                            foreach (var coursePoint in temp)
                            {
                                if (coursePoint.Course.ID == course.Course.ID)
                                {
                                    check1 = 1;
                                    break;
                                }
                            }

                            if (check1 == 0)
                            {
                                course.Course.SlotTypeID = slotType.ID;
                                temp.Add(course);
                                break;
                            }
                        }
                    }
                }
            }
            else
            {
                //them course vo slot ua thich truoc
                foreach (var favoriteSlotType in favoriteSlot)
                {

                    foreach (var course in listCourseOfLecturer)
                    {
                        int check1 = 0;
                        foreach (var coursePoint in temp)
                        {
                            if (coursePoint.Course.ID == course.Course.ID)
                            {
                                check1 = 1;
                                break;
                            }
                        }
                        if (check1 == 0)
                        {
                            course.Course.SlotTypeID = favoriteSlotType;
                            course.Score = course.Score + SLOTPOINT;
                            temp.Add(course);
                            break;
                        }
                    }

                }

                //them course vo cac slot khac
                foreach (var slotType in slotTypes)
                {
                    int check = 0;
                    foreach (var favoriteSlotType in favoriteSlot)
                    {
                        if (slotType.ID == favoriteSlotType)
                        {
                            check = 1;
                            break;
                        }
                    }
                    if (check == 0)
                    {
                        foreach (var course in listCourseOfLecturer)
                        {
                            int check1 = 0;
                            foreach (var coursePoint in temp)
                            {
                                if (coursePoint.Course.ID == course.Course.ID)
                                {
                                    check1 = 1;
                                    break;
                                }
                            }
                            if (check1 == 0)
                            {
                                course.Course.SlotTypeID = slotType.ID;
                                temp.Add(course);
                                break;
                            }
                        }
                    }
                }
            }


            listCourseOfLecturer = temp.OrderByDescending(course => course.Priority).ThenByDescending(course => course.Score).ToList();
            return listCourseOfLecturer;
        }

        static List<CourseAssign> ThuatToanXepLich(List<Course> courseDTOs, List<CourseGroupItem> courseGroupItemDTOs,
            List<LecturerCourseGroup> lecturerCourseGroupDTOs, List<Lecturer> lecturerDTOs, List<LecturerSlotConfig> lecturerSlotConfigDTOs, Semester semesterDTO, List<SlotType> slotTypeDTOs,
            List<Subject> subjectDTOs, List<SubjectOfLecturer> subjectOfLecturerDTOs, int Max)
        {
            //200 con kien (200 vong for)
            //for n giang vien trong department
            //Xep lich cho tung giang vien (uu tien part time lecturer)
            //for n lan (random n nam trong minCourse < n < maxCourse) (1)
            //chon cac mon co diem toi uu nhat voi giang vien
            //dong vong lap, co duoc lich cua giang vien (1) va so diem phu hop cua giang vien do voi lich cua giang vien do
            //dong vong lap
            //co lich cua tat ca cac giang vien va diem phu hop cua moi giang vien voi lich cua minh
            //=> tu do tinh ra diem cua schedule nay, cap nhat diem va schedule neu diem lon hon schedule cu 
            //tim ra duoc schedule co diem cao nhat     

            List<CourseAssign> courseAssignDTOs = new List<CourseAssign>(); //scheduler toi uu nhat
            int schedulerPoint_Max = 0; // schedule'point max      

            for (int i = 0; i <= 200; i++)//200 con kien
            {
                List<CourseAssign> courseAssignDTOsTemp = new List<CourseAssign>(); //scheduler temp
                int schedulerPoint_Temp = 0; // schedule'point temp

                int courseAssignID_Temp = 0;
                List<int> listLecturersPoint_Scheduler = new List<int>();

                List<Lecturer> sortedListLecturers = lecturerDTOs.OrderByDescending(lecturer => lecturer.PriorityLecturer).ToList();

                foreach (var lecturer in sortedListLecturers)
                {
                    int lecturerPoint_Scheduler = 0; //diem phu hop cua giang vien do voi scheduler cua ban than

                    int courseAmountOfLecturer = RandomCourseAmountOfLecturer(lecturerCourseGroupDTOs, lecturer, semesterDTO);// random so luong course giang vien do se day                   
                    //int courseAmountOfLecturer = 11;

                    // lay cac course cao diem , course se khong duoc lay neu da duoc pick HOAC so luong maxCourseSuject dat toi da
                    List<CourseLecturerPoint> SortlistlecturerCoursePoint = GetHighCoursesOfLecturer(subjectDTOs, lecturerCourseGroupDTOs, courseGroupItemDTOs, subjectOfLecturerDTOs, lecturerSlotConfigDTOs, courseDTOs, courseAssignDTOsTemp, lecturer, semesterDTO.ID);

                    SortlistlecturerCoursePoint = FillCourseSlot(courseAssignDTOsTemp, lecturerSlotConfigDTOs, SortlistlecturerCoursePoint, lecturer, courseDTOs, semesterDTO.ID, slotTypeDTOs, Max);


                    if (SortlistlecturerCoursePoint != null)
                    {
                        if (SortlistlecturerCoursePoint.Count() < courseAmountOfLecturer)
                        {
                            courseAmountOfLecturer = SortlistlecturerCoursePoint.Count();
                        }
                        for (int j = 0; j < courseAmountOfLecturer; j++)
                        {
                            lecturerPoint_Scheduler += SortlistlecturerCoursePoint[j].Score;// tinh diem phu hop cua giang vien do voi scheduler cua ban than
                            courseAssignDTOsTemp.Add(new CourseAssign("CA" + courseAssignID_Temp, lecturer.ID, SortlistlecturerCoursePoint[j].Course.ID, SortlistlecturerCoursePoint[j].Course.SlotTypeID, 1));
                            courseAssignID_Temp++;

                        }

                        listLecturersPoint_Scheduler.Add(lecturerPoint_Scheduler);
                    }



                }
                if (listLecturersPoint_Scheduler.Count() > 0)
                {
                    //tinh scheduler-department point, cap nhat scheduler moi neu diem cao hon
                    schedulerPoint_Temp = listLecturersPoint_Scheduler.Sum();
                    if (schedulerPoint_Max < schedulerPoint_Temp)
                    {
                        courseAssignDTOs = courseAssignDTOsTemp;
                        schedulerPoint_Max = schedulerPoint_Temp;
                    }
                }


            }
            Console.WriteLine(schedulerPoint_Max);
            return courseAssignDTOs;
        }

    }

    public class CourseLecturerPoint
    {
        public Course Course;
        public int Priority { get; set; }
        public int Score { get; set; }
        public CourseLecturerPoint()
        {
        }

        public CourseLecturerPoint(Course course, int score, int priority)
        {
            Course = course;
            Score = score;
            Priority = priority;
        }


    }
}

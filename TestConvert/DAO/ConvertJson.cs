using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TestConvert.Entities;

namespace TestConvert.DAO
{
    public class ConvertJson
    {
        public string fileNameDepartment = "Department.json";
        public string fileNameCourse = "Course.json";
        public string fileNameCourseAssign = "CourseAssign.json";
        public string fileNameCourseGroupItems = "CourseGroupItem.json";
        public string fileNameLecturer = "Lecturer.json";
        public string filePath = @"C:\Users\Admin\Desktop\dataFromFap\driver\";
        public string filePathOut = @"C:\Users\Admin\Desktop\dataFromFap\driver\out\";
        public List<Department> ReadDataJsonDepartment()
        {
            List<Department> departments = new List<Department>();
            //using (StreamReader sr = File.OpenText(@"C:\Users\Admin\Desktop\dataFromFap\driver\Department.json"))
            using (StreamReader sr = File.OpenText(filePath + fileNameDepartment))
            {
                var obj = sr.ReadToEnd();
                departments = JsonConvert.DeserializeObject<List<Department>>(obj);

            }

            foreach (Department department in departments)
            {
                Console.WriteLine(department.ToString()  );
            }
            return departments;
        }

        public void WriteDataJsonDepartment(List<Department> departments)
        {
            try
            {
                if (departments != null)
                {
                    using (StreamWriter sw = File.CreateText(filePathOut + fileNameDepartment))
                    {
                        var departmentsJson = JsonConvert.SerializeObject(departments);
                        sw.WriteLine(departmentsJson);
                    }
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e.ToString());
            }
        }

        public List<Course> ReadDataJsonCourse()
        {
            List<Course> courses = new List<Course>();
            using (StreamReader sr = File.OpenText(filePath + fileNameCourse))
            {
                var obj = sr.ReadToEnd();
                courses = JsonConvert.DeserializeObject<List<Course>>(obj);

            }

            foreach (Course cr in courses)
            {
                Console.WriteLine(cr.ToString());
            }
            return courses;
        }

        public void WriteDataJsonCourse(List<Course> courses)
        {
            try
            {
                if (courses != null)
                {
                    using (StreamWriter sw = File.CreateText(filePathOut + fileNameCourse))
                    {
                        var coursesJson = JsonConvert.SerializeObject(courses);
                        sw.WriteLine(coursesJson);
                    }

                   
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e.ToString());
            }
        }

        public List<CourseAssign> ReadDataJsonCourseAssign()
        {
            List<CourseAssign> courseAssigns = new List<CourseAssign>();
            using (StreamReader sr = File.OpenText(filePath + fileNameCourseAssign))
            {
                var obj = sr.ReadToEnd();
                courseAssigns = JsonConvert.DeserializeObject<List<CourseAssign>>(obj);

            }

            foreach (CourseAssign cra in courseAssigns)
            {
                Console.WriteLine(cra.ToString());
            }
            return courseAssigns;
        }

        public void WriteDataJsonCourseAssign(List<CourseAssign> courseAssigns)
        {
            try
            {
                if (courseAssigns != null)
                {
                    using (StreamWriter sw = File.CreateText(filePathOut + fileNameCourseAssign))
                    {
                        var courseAssignsJson = JsonConvert.SerializeObject(courseAssigns);
                        sw.WriteLine(courseAssignsJson);
                    }
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e.ToString());
            }
        }

        public List<CourseGroupItem> ReadDataJsonCourseGroupItem()
        {
            List<CourseGroupItem> courseGroupItems = new List<CourseGroupItem>();
            using (StreamReader sr = File.OpenText(filePath + fileNameCourseGroupItems))
            {
                var obj = sr.ReadToEnd();
                courseGroupItems = JsonConvert.DeserializeObject<List<CourseGroupItem>>(obj);

            }

            foreach (CourseGroupItem crgi in courseGroupItems)
            {
                Console.WriteLine(crgi.ToString());
            }
            return courseGroupItems;
        }

        public void WriteDataJsonCourseGroupItem(List<CourseGroupItem> courseGroupItems)
        {
            try
            {
                if (courseGroupItems != null)
                {
                    using (StreamWriter sw = File.CreateText(filePathOut + fileNameCourseGroupItems))
                    {
                        var courseGroupItemsJson = JsonConvert.SerializeObject(courseGroupItems);
                        sw.WriteLine(courseGroupItemsJson);
                    }
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e.ToString());
            }
        }

        public List<Lecturer> ReadDataJsonLecturer()
        {
            List<Lecturer> lecturers = new List<Lecturer>();
            using (StreamReader sr = File.OpenText(filePath + fileNameLecturer))
            {
                var obj = sr.ReadToEnd();
                lecturers = JsonConvert.DeserializeObject<List<Lecturer>>(obj);

            }

            foreach (Lecturer lec in lecturers)
            {
                Console.WriteLine(lec.ToString());
            }
            return lecturers;
        }

        public void WriteDataJsonLecturer(List<Lecturer> lecturers)
        {
            try
            {
                if (lecturers != null)
                {
                    using (StreamWriter sw = File.CreateText(filePathOut + fileNameLecturer))
                    {
                        var lecturersJson = JsonConvert.SerializeObject(lecturers);
                        sw.WriteLine(lecturersJson);
                    }
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e.ToString());
            }
        }
    }
}

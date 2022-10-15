using System;
using System.Collections.Generic;
using TestConvert.DAO;
using TestConvert.Entities;

namespace TestConvert
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            ConvertJson cj=new ConvertJson();

            List<Department> departments = cj.ReadDataJsonDepartment();
            cj.WriteDataJsonDepartment(departments);

            List<Course> courses = cj.ReadDataJsonCourse();
            cj.WriteDataJsonCourse(courses);

            List<CourseAssign> courseAssigns = cj.ReadDataJsonCourseAssign();
            cj.WriteDataJsonCourseAssign(courseAssigns);

            List<CourseGroupItem> courseGroupItems = cj.ReadDataJsonCourseGroupItem();
            cj.WriteDataJsonCourseGroupItem(courseGroupItems);

            List<Lecturer> lecturers = cj.ReadDataJsonLecturer();
            cj.WriteDataJsonLecturer(lecturers);
        }
    }
}

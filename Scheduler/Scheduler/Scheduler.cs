using FPTULecturerScheduler;
using FPTULecturerScheduler.Entity;
using OfficeOpenXml;
using Scheduler.DAO;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace Scheduler
{
    public class Scheduler
    {
        static void Main(string[] args)
        {
            LecturerScheduler lecturerScheduler = new LecturerScheduler();

            LecturerScheduler.Courses = CourseDAO.getListCourseFromExcel("Course.xlsx");

            LecturerScheduler.Lecturers = LecturerDAO.getListLecturerFromExcel("Lecturer.xlsx");

            LecturerScheduler.LecturerSlotConfigs = LecturerSlotConfigDAO.getSlotConfigFromExcel("LecturerSlotConfig.xlsx");

            LecturerScheduler.Semester = SemesterDAO.getSemesterFromExcel("Semester.xlsx");

            LecturerScheduler.SlotTypes = SlotTypeDAO.getListSlotTypeFromExcel("SlotType.xlsx");

            LecturerScheduler.Subjects = SubjectDAO.getListSubjectFromExcel("Subject.xlsx");

            LecturerScheduler.SubjectOfLecturers = SubjectOfLecturerDAO.getListSubjectOfLecturerFromExcel("SubjectOfLecturer.xlsx");

            LecturerScheduler.LecturerCourseGroups = LecturerCourseGroupDAO.getLecturerCourseGroupFromExcel("LecturerCourseGroup.xlsx");

            LecturerScheduler.CourseGroupItems = CourseGroupItemDAO.getListCourseGroupItemFromExcel("CourseGroupItem.xlsx");


            LecturerScheduler.CourseAssigns = LecturerScheduler.Run();

            //Xuat file Excel
            btnExport_Click("C:/Users/84393/Desktop/Scheduler/Scheduler/bin/Debug/CourseAssign.xlsx", LecturerScheduler.CourseAssigns);


        }




        private static void btnExport_Click(string filePath, List<CourseAssign> listCourseAssign)
        {
            // tạo SaveFileDialog để lưu file excel

            // nếu đường dẫn null hoặc rỗng thì báo không hợp lệ và return hàm
            if (string.IsNullOrEmpty(filePath))
            {
                Console.WriteLine("Đường dẫn báo cáo không hợp lệ");
                return;
            }

            try
            {
                using (ExcelPackage p = new ExcelPackage())
                {


                    // đặt tiêu đề cho file
                    p.Workbook.Properties.Title = "CourseAssign";

                    //Tạo một sheet để làm việc trên đó
                    p.Workbook.Worksheets.Add("sheet1");

                    // lấy sheet vừa add ra để thao tác
                    ExcelWorksheet ws = p.Workbook.Worksheets[0];

                    // đặt tên cho sheet
                    ws.Name = "sheet1";

                    // Tạo danh sách các column header
                    string[] arrColumnHeader = { "ID", "LecturerID", "CourseID", "SlotTypeID" };

                    // lấy ra số lượng cột cần dùng dựa vào số lượng header
                    var countColHeader = arrColumnHeader.Count();

                    // merge các column lại từ column 1 đến số column header
                    // gán giá trị cho cell vừa merge là Thống kê thông tni User Kteam

                    int colIndex = 1;
                    int rowIndex = 1;

                    //tạo các header từ column header đã tạo từ bên trên
                    foreach (var item in arrColumnHeader)
                    {
                        var cell = ws.Cells[rowIndex, colIndex];

                        //căn chỉnh các border

                        //gán giá trị
                        cell.Value = item;

                        colIndex++;
                    }

                    // lấy ra danh sách UserInfo từ ItemSource của DataGrid

                    // với mỗi item trong danh sách sẽ ghi trên 1 dòng
                    foreach (var item in listCourseAssign)
                    {
                        // bắt đầu ghi từ cột 1. Excel bắt đầu từ 1 không phải từ 0
                        colIndex = 1;

                        // rowIndex tương ứng từng dòng dữ liệu
                        rowIndex++;

                        //gán giá trị cho từng cell                      
                        ws.Cells[rowIndex, colIndex++].Value = item.ID;
                        ws.Cells[rowIndex, colIndex++].Value = item.LecturerID;
                        ws.Cells[rowIndex, colIndex++].Value = item.CourseID;
                        ws.Cells[rowIndex, colIndex++].Value = item.SlotTypeID;

                        // lưu ý phải .ToShortDateString để dữ liệu khi in ra Excel là ngày như ta vẫn thấy.Nếu không sẽ ra tổng số :v
                        //ws.Cells[rowIndex, colIndex++].Value = item.Birthday.ToShortDateString();

                    }

                    //Lưu file lại
                    Byte[] bin = p.GetAsByteArray();
                    File.WriteAllBytes(filePath, bin);
                }
                Console.WriteLine("Xuất excel thành công!");
            }
            catch (Exception EE)
            {
                Console.WriteLine("Có lỗi khi lưu file!");
            }
        }



    }

}

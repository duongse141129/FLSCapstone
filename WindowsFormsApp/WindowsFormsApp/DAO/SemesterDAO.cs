﻿using FPTULecturerScheduler.Entity;
using OfficeOpenXml;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WindowsFormsApp.DAO
{
    public class SemesterDAO
    {
        //public static Semester getSemesterFromExcel(string fileName)
        //{
        //    Semester semester = new Semester();
        //    try
        //    {
        //        FileInfo file = new FileInfo(fileName);

        //        // mở file excel
        //        var package = new ExcelPackage(new FileInfo(fileName));
        //        // lấy ra sheet đầu tiên để thao tác
        //        ExcelWorksheet workSheet = package.Workbook.Worksheets[0];

        //        // duyệt tuần tự từ dòng thứ 2 đến dòng cuối cùng của file. lưu ý file excel bắt đầu từ số 1 không phải số 0
        //        for (int i = workSheet.Dimension.Start.Row + 1; i <= workSheet.Dimension.End.Row; i++)
        //        {
        //            try
        //            {
        //                // biến j biểu thị cho một column trong file
        //                int j = 1;

        //                // lấy ra cột họ tên tương ứng giá trị tại vị trí [i, 1]. i lần đầu là 2
        //                // tăng j lên 1 đơn vị sau khi thực hiện xong câu lệnh
        //                string SemesterID = workSheet.Cells[i, j++].Value.ToString();
        //                string Term = workSheet.Cells[i, j++].Value.ToString();
        //                string DateStart = workSheet.Cells[i, j++].Value.ToString();
        //                string DateEnd = workSheet.Cells[i, j++].Value.ToString();
        //                string status = workSheet.Cells[i, j++].Value.ToString();

        //                // lấy ra cột ngày sinh tương ứng giá trị tại vị trí [i, 2]. i lần đầu là 2
        //                // tăng j lên 1 đơn vị sau khi thực hiện xong câu lệnh
        //                // lấy ra giá trị ngày tháng và ép kiểu thành DateTime                      
        //                //var birthdayTemp = workSheet.Cells[i, j++].Value;

        //                semester = new Semester(SemesterID, Term, DateStart, DateEnd, Int32.Parse(status));
        //                /*                         

        //                Đừng lười biến mà dùng đoạn code này sẽ gây ra lỗi nếu giá trị value không thỏa kiểu DateTime

        //                DateTime birthday = (DateTime)workSheet.Cells[i, j++].Value;

        //                 */




        //                // add course vào danh sách courseList       
        //            }
        //            catch (Exception exe)
        //            {
        //                Console.WriteLine(exe.Message);
        //            }
        //        }
        //    }
        //    catch (Exception ee)
        //    {
        //        Console.WriteLine(ee.Message);
        //    }

        //    return semester;

        //}
    }
}

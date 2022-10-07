using FPTULecturerScheduler.Entity;
using OfficeOpenXml;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace Scheduler.DAO
{
    public class SubjectOfLecturerDAO
    {
        public static List<SubjectOfLecturer> getListSubjectOfLecturerFromExcel(string fileName)
        {
            List<SubjectOfLecturer> SubjectOfLecturerList = new List<SubjectOfLecturer>();
            try
            {
                FileInfo file = new FileInfo(fileName);

                // mở file excel
                var package = new ExcelPackage(new FileInfo(fileName));
                // lấy ra sheet đầu tiên để thao tác
                ExcelWorksheet workSheet = package.Workbook.Worksheets[0];

                // duyệt tuần tự từ dòng thứ 2 đến dòng cuối cùng của file. lưu ý file excel bắt đầu từ số 1 không phải số 0
                for (int i = workSheet.Dimension.Start.Row + 1; i <= workSheet.Dimension.End.Row; i++)
                {
                    try
                    {
                        // biến j biểu thị cho một column trong file
                        int j = 1;

                        // lấy ra cột họ tên tương ứng giá trị tại vị trí [i, 1]. i lần đầu là 2
                        // tăng j lên 1 đơn vị sau khi thực hiện xong câu lệnh
                        string subjectOfLecturerID = workSheet.Cells[i, j++].Value.ToString();
                        string semesterID = workSheet.Cells[i, j++].Value.ToString();
                        string subjectID = workSheet.Cells[i, j++].Value.ToString();
                        string lecturerID = workSheet.Cells[i, j++].Value.ToString();
                        string favoritePoint = workSheet.Cells[i, j++].Value.ToString();
                        string feedbackPoint = workSheet.Cells[i, j++].Value.ToString();
                        string maxCourseSubject = workSheet.Cells[i, j++].Value.ToString();
                        string status = workSheet.Cells[i, j++].Value.ToString();
                        // lấy ra cột ngày sinh tương ứng giá trị tại vị trí [i, 2]. i lần đầu là 2
                        // tăng j lên 1 đơn vị sau khi thực hiện xong câu lệnh
                        // lấy ra giá trị ngày tháng và ép kiểu thành DateTime                      
                        //var birthdayTemp = workSheet.Cells[i, j++].Value;

                        SubjectOfLecturer subjectOfLecturer = new SubjectOfLecturer(subjectOfLecturerID, semesterID, subjectID, lecturerID, Int32.Parse(favoritePoint), Int32.Parse(feedbackPoint), Int32.Parse(maxCourseSubject), Int32.Parse(status));
                        /*                         

                        Đừng lười biến mà dùng đoạn code này sẽ gây ra lỗi nếu giá trị value không thỏa kiểu DateTime

                        DateTime birthday = (DateTime)workSheet.Cells[i, j++].Value;

                         */


                        // add course vào danh sách courseList
                        SubjectOfLecturerList.Add(subjectOfLecturer);

                    }
                    catch (Exception exe)
                    {
                        Console.WriteLine(exe.Message);

                    }
                }
            }
            catch (Exception ee)
            {
                Console.WriteLine(ee.Message);
            }

            return SubjectOfLecturerList;

        }
    }
}

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
    public class LecturerDAO
    {
        public static List<Lecturer> getListLecturerFromExcel(string fileName)
        {
            List<Lecturer> lecturerList = new List<Lecturer>();
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
                        string LecturerID = workSheet.Cells[i, j++].Value.ToString();
                        string DepartmentID = workSheet.Cells[i, j++].Value.ToString();
                        string LecturerName = workSheet.Cells[i, j++].Value.ToString();
                        string Email = workSheet.Cells[i, j++].Value.ToString();
                        string DOB = workSheet.Cells[i, j++].Value.ToString();
                        string Gender = workSheet.Cells[i, j++].Value.ToString();
                        string IDCard = workSheet.Cells[i, j++].Value.ToString();
                        string Address = workSheet.Cells[i, j++].Value.ToString();
                        string Phone = workSheet.Cells[i, j++].Value.ToString();
                        string PriorityLecturer = workSheet.Cells[i, j++].Value.ToString();
                        string status = workSheet.Cells[i, j++].Value.ToString();


                        // lấy ra cột ngày sinh tương ứng giá trị tại vị trí [i, 2]. i lần đầu là 2
                        // tăng j lên 1 đơn vị sau khi thực hiện xong câu lệnh
                        // lấy ra giá trị ngày tháng và ép kiểu thành DateTime                      
                        //var birthdayTemp = workSheet.Cells[i, j++].Value;

                        Lecturer lecturer = new Lecturer(LecturerID, LecturerName, Email, DOB, Gender, IDCard, Address, Phone, Int32.Parse(status), Int32.Parse(PriorityLecturer), DepartmentID);
                        /*                         

                        Đừng lười biến mà dùng đoạn code này sẽ gây ra lỗi nếu giá trị value không thỏa kiểu DateTime

                        DateTime birthday = (DateTime)workSheet.Cells[i, j++].Value;

                         */

                        // add course vào danh sách courseList
                        lecturerList.Add(lecturer);

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

            return lecturerList;

        }
    }
}

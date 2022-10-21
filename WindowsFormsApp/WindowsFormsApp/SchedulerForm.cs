using FPTULecturerScheduler;
using FPTULecturerScheduler.Entity;
using OfficeOpenXml;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Windows.Forms;
using WindowsFormsApp.DAO;

namespace WindowsFormsApp
{
    public partial class SchedulerForm : Form
    {
        public List<Semester> Semesters = new List<Semester>()
            {
                new Semester("SPRING22", "spring 2022", "05/09/2022", "31/11/2022", 1),
                new Semester("FA22", "fall 2022", "05/09/2022", "31/11/2022", 1)
        };
        public List<Course> Courses = new List<Course>();
        public List<CourseAssign> CourseAssigns = new List<CourseAssign>();
        public List<CourseGroupItem> CourseGroupItems = new List<CourseGroupItem>();
        public List<Department> Departments = new List<Department>();
        public List<Lecturer> Lecturers = new List<Lecturer>();
        public List<LecturerCourseGroup> LecturerCourseGroups = new List<LecturerCourseGroup>();
        public List<LecturerSlotConfig> LecturerSlotConfigs = new List<LecturerSlotConfig>();
        public List<SlotType> SlotTypes = new List<SlotType>();
        public List<Subject> Subjects = new List<Subject>();
        public List<SubjectOfLecturer> SubjectOfLecturers = new List<SubjectOfLecturer>();
        public int MaxCourseSlot = 70;

        public List<CourseAssign> Scheduler = new List<CourseAssign>();

        public ProgressDialog progressDialog = new ProgressDialog();
        public SchedulerForm()
        {
            //Xuat file Excel
            //List<CourseAssign> courseAssignsTemp = LecturerScheduler.Run();
            //courseAssignsTemp = courseAssignsTemp.OrderBy(courseAssign => courseAssign.LecturerID).ThenBy(courseAssign => courseAssign.SlotTypeID).ToList();
            //btnExport_Click("C:/Users/84393/Desktop/Capstone/WindowsFormsApp/WindowsFormsApp/bin/Debug/CourseAssignTemp.xlsx", courseAssignsTemp);

            InitializeComponent();
            semesterCombobox.DataSource = Semesters;
            semesterCombobox.DisplayMember = "ID";
        }



        private void loadDataButton_Click(object sender, EventArgs e)
        {
            
            loadData(semesterCombobox.SelectedItem.ToString());

            //load data vao department gridView
            departmentDataGridView.RowCount = Departments.Count();
            for (int i = 0; i < Departments.Count(); i++)
            {

                var subjectAmount = from subject in Subjects
                                    where subject.DepartmentID == Departments.ElementAtOrDefault(i).ID
                                    group subject by subject.DepartmentID into gr
                                    let count = gr.Count()
                                    select count;

                var lecturerAmount = from lecturer in Lecturers
                                     where lecturer.DepartmentID == Departments.ElementAtOrDefault(i).ID
                                     group lecturer by lecturer.DepartmentID into gr
                                     let count = gr.Count()
                                     select count;

                var courseAmount = from course in Courses
                                   join subject in Subjects on course.SubjectID equals subject.ID
                                   where subject.DepartmentID == Departments.ElementAtOrDefault(i).ID
                                   select course.ID;

                departmentDataGridView.Rows[i].Cells[0].Value = Departments.ElementAtOrDefault(i).ID;
                departmentDataGridView.Rows[i].Cells[1].Value = Departments.ElementAtOrDefault(i).DepartmentName;
                departmentDataGridView.Rows[i].Cells[2].Value = subjectAmount.ElementAtOrDefault(0);
                departmentDataGridView.Rows[i].Cells[3].Value = lecturerAmount.ElementAtOrDefault(0);
                departmentDataGridView.Rows[i].Cells[4].Value = courseAmount.Count();
            }


            //load data vao subject gridView
            subjectDataGridView.RowCount = Subjects.Count();
            for (int i = 0; i < Subjects.Count(); i++)
            {
                var courseAmount = from course in Courses
                                   where course.SubjectID == Subjects.ElementAtOrDefault(i).ID
                                   group course by course.SubjectID into gr
                                   let count = gr.Count()
                                   select count;

                var departmentName = from department in Departments
                                     where department.ID == Subjects.ElementAtOrDefault(i).DepartmentID
                                     select department.DepartmentName;


                subjectDataGridView.Rows[i].Cells[0].Value = Subjects.ElementAtOrDefault(i).ID;
                subjectDataGridView.Rows[i].Cells[1].Value = Subjects.ElementAtOrDefault(i).SubjectName;
                subjectDataGridView.Rows[i].Cells[2].Value = courseAmount.ElementAtOrDefault(0);
                subjectDataGridView.Rows[i].Cells[3].Value = departmentName.ElementAtOrDefault(0);
            }


            //load data vao lecturer gridView
            lecturerDataGridView.RowCount = Lecturers.Count();
            for (int i = 0; i < Lecturers.Count(); i++)
            {
                var semesterConfig = from lecturerCourseGroup in LecturerCourseGroups
                                     where lecturerCourseGroup.LecturerID == Lecturers.ElementAtOrDefault(i).ID
                                     select (lecturerCourseGroup.MinCourse, lecturerCourseGroup.MaxCourse);

                var departmentName = from department in Departments
                                     where department.ID == Lecturers.ElementAtOrDefault(i).DepartmentID
                                     select department.DepartmentName;

                var priorityCourseAmount = from courseGroupItem in CourseGroupItems
                                           join lecturerCourseGroup in LecturerCourseGroups on courseGroupItem.LecturerCourseGroupID equals lecturerCourseGroup.ID
                                           where lecturerCourseGroup.LecturerID == Lecturers.ElementAtOrDefault(i).ID
                                           group courseGroupItem by Lecturers.ElementAtOrDefault(i).ID into gr
                                           let count = gr.Count()
                                           select count;

                var assignCourseAmount = from courseAssign in CourseAssigns                                          
                                         where courseAssign.LecturerID == Lecturers.ElementAtOrDefault(i).ID
                                         group courseAssign by courseAssign.LecturerID into gr
                                         let count = gr.Count()
                                         select count;

                lecturerDataGridView.Rows[i].Cells[0].Value = Lecturers.ElementAtOrDefault(i).ID;
                lecturerDataGridView.Rows[i].Cells[1].Value = Lecturers.ElementAtOrDefault(i).LecturerName;
                lecturerDataGridView.Rows[i].Cells[2].Value = departmentName.ElementAtOrDefault(0);
                lecturerDataGridView.Rows[i].Cells[3].Value = semesterConfig.ElementAtOrDefault(0).MinCourse;
                lecturerDataGridView.Rows[i].Cells[4].Value = semesterConfig.ElementAtOrDefault(0).MaxCourse;
                lecturerDataGridView.Rows[i].Cells[5].Value = Lecturers.ElementAtOrDefault(0).PriorityLecturer;
                lecturerDataGridView.Rows[i].Cells[6].Value = priorityCourseAmount.ElementAtOrDefault(0);
                lecturerDataGridView.Rows[i].Cells[7].Value = assignCourseAmount.ElementAtOrDefault(0);
            }


            //load data vao slotType gridView
            slotTypeDataGridView.RowCount = SlotTypes.Count();
            for (int i = 0; i < SlotTypes.Count(); i++)
            {
                var assignAmount = from courseAssign in CourseAssigns
                                   where courseAssign.SlotTypeID == SlotTypes.ElementAtOrDefault(i).ID
                                   group courseAssign by courseAssign.SlotTypeID into gr
                                   let count = gr.Count()
                                   select count;

                slotTypeDataGridView.Rows[i].Cells[0].Value = SlotTypes.ElementAtOrDefault(i).ID;
                slotTypeDataGridView.Rows[i].Cells[1].Value = SlotTypes.ElementAtOrDefault(i).SlotNumber;
                slotTypeDataGridView.Rows[i].Cells[2].Value = SlotTypes.ElementAtOrDefault(i).TimeStart;
                slotTypeDataGridView.Rows[i].Cells[3].Value = SlotTypes.ElementAtOrDefault(i).TimeEnd;
                slotTypeDataGridView.Rows[i].Cells[4].Value = MaxCourseSlot;
                slotTypeDataGridView.Rows[i].Cells[5].Value = assignAmount.ElementAtOrDefault(0);
            }

            //reset output
            tabControl1.SelectTab(0);
            Scheduler = new List<CourseAssign>();
            outputDataGridView.Rows.Clear();
        }

        

        private void button1_Click(object sender, EventArgs e)
        {
            progressDialog.Show();
            //show dialog loading chay thuat toan


            Thread thr = new Thread(new ThreadStart(XepLich));
            thr.IsBackground = true;
            thr.Start();
                   
       
        }
       
        void XepLich()
        {
            LecturerScheduler.Courses = Courses;

            LecturerScheduler.Lecturers = Lecturers;

            LecturerScheduler.LecturerSlotConfigs = LecturerSlotConfigs;

            semesterCombobox.Invoke(new MethodInvoker(() => {
                LecturerScheduler.Semester = (Semester)semesterCombobox.SelectedItem;
            }));

            LecturerScheduler.SlotTypes = SlotTypes;

            LecturerScheduler.Subjects = Subjects;

            LecturerScheduler.SubjectOfLecturers = SubjectOfLecturers;

            LecturerScheduler.LecturerCourseGroups = LecturerCourseGroups;

            LecturerScheduler.CourseGroupItems = CourseGroupItems;

            LecturerScheduler.CourseAssigns = CourseAssigns;

            LecturerScheduler.MaxCourseSlot = MaxCourseSlot;

            Scheduler = LecturerScheduler.Run();
            Scheduler = Scheduler.OrderBy(scheduler => scheduler.LecturerID).ThenBy(scheduler => scheduler.SlotTypeID).ToList();
            btnExport_Click(@"C:\Users\84393\Desktop\Capstone\WindowsFormsApp\WindowsFormsApp\" + "CourseAssignTemp.xlsx", Scheduler);

            progressDialog.Invoke(new MethodInvoker(() => {
                 progressDialog.Close();
            }));

            tabControl1.Invoke(new MethodInvoker(() => {
                tabControl1.SelectTab(1);
            }));

            //load data vao output gridView
            outputDataGridView.Invoke(new MethodInvoker(() => {
                outputDataGridView.RowCount = Departments.Count();
                for (int i = 0; i < Departments.Count(); i++)
                {

                    var Mon_ThuAmount = from scheduler in Scheduler
                                        join course in Courses on scheduler.CourseID equals course.ID
                                        join subject in Subjects on course.SubjectID equals subject.ID
                                        where subject.DepartmentID == Departments.ElementAtOrDefault(i).ID && scheduler.SlotTypeID.Contains("ST1")
                                        select scheduler.ID;

                    var Tue_FriAmount = from scheduler in Scheduler
                                        join course in Courses on scheduler.CourseID equals course.ID
                                        join subject in Subjects on course.SubjectID equals subject.ID
                                        where subject.DepartmentID == Departments.ElementAtOrDefault(i).ID && scheduler.SlotTypeID.Contains("ST2")
                                        select scheduler.ID;

                    var Web_SatAmount = from scheduler in Scheduler
                                        join course in Courses on scheduler.CourseID equals course.ID
                                        join subject in Subjects on course.SubjectID equals subject.ID
                                        where subject.DepartmentID == Departments.ElementAtOrDefault(i).ID && scheduler.SlotTypeID.Contains("ST3")
                                        select scheduler.ID;

                    outputDataGridView.Rows[i].Cells[0].Value = Departments.ElementAtOrDefault(i).ID;
                    outputDataGridView.Rows[i].Cells[1].Value = Departments.ElementAtOrDefault(i).DepartmentName;
                    outputDataGridView.Rows[i].Cells[2].Value = Mon_ThuAmount.Count();
                    outputDataGridView.Rows[i].Cells[3].Value = Tue_FriAmount.Count();
                    outputDataGridView.Rows[i].Cells[4].Value = Web_SatAmount.Count();
                    //outputDataGridView.Rows[i].Cells[4].Value = courseAmount.Count();
                }
            }));
            
        }

        //load du lieu voi semester truyen vao
        void loadData(string semester)
        {
            string filePath = @"C:\Users\84393\Desktop\Capstone\WindowsFormsApp\WindowsFormsApp\";
            Courses = CourseDAO.ReadDataJsonCourse(filePath + "Course.json");
            Lecturers = LecturerDAO.ReadDataJsonLecturer(filePath + "Lecturer.json");
            Departments = DepartmentDAO.ReadDataJsonDepartment(filePath + "Department.json");
            SlotTypes = SlotTypeDAO.ReadDataJsonSlotType(filePath + "SlotType.json");
            Subjects = SubjectDAO.ReadDataJsonSubject(filePath + "Subject.json");
            LecturerSlotConfigs = LecturerSlotConfigDAO.ReadDataJsonLecturerSlotConfig(filePath + "LecturerSlotConfig.json");
            SubjectOfLecturers = SubjectOfLecturerDAO.ReadDataJsonSubjectOfLecturer(filePath + "SubjectOfLecturer.json");
            LecturerCourseGroups = LecturerCourseGroupDAO.ReadDataJsonLecturerCourseGroup(filePath + "LecturerCourseGroup.json");
            CourseGroupItems = CourseGroupItemDAO.ReadDataJsonCourseGroupItem(filePath + "CourseGroupItem.json");
            CourseAssigns = CourseAssignDAO.ReadDataJsonCourseAssign(filePath + "CourseAssign.json");

            Subjects = Subjects.OrderBy(subject => subject.DepartmentID).ThenBy(subject => subject.ID).ToList();
            Lecturers = Lecturers.OrderBy(lecturer => lecturer.DepartmentID).ThenBy(lecturer => lecturer.ID).ToList();
        }

        public static void btnExport_Click(string filePath, List<CourseAssign> listCourseAssign)
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
                    p.Workbook.Properties.Title = "CourseAssignTemp";

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
                Console.WriteLine(EE.Message);
            }
        }
    }
}

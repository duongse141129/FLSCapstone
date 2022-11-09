using FPTULecturerScheduler.Entity;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace WindowsFormsApp
{
    public partial class ScheduleDetailDialog : Form
    {

        public ScheduleDetailDialog(Semester semester, Lecturer lecturer, List<CourseAssign> scheduleItem, List<SlotType> slotTypes)
        {
            InitializeComponent();

            //load semester
            semesterLabel.Text = "Semester:  " + semester.Term;
            string[] temp1 = semester.DateStart.Split('-');
            string[] temp2 = semester.DateEnd.Split('-');
            DateTime dateStart = new DateTime(Convert.ToInt32(temp1[0]), Convert.ToInt32(temp1[1]), Convert.ToInt32(temp1[2]));
            DateTime dateEnd = new DateTime(Convert.ToInt32(temp2[0]), Convert.ToInt32(temp2[1]), Convert.ToInt32(temp2[2]));
            outputFromLabel.Text = "From date: " + String.Format("{0:MM/dd/yyyy}", dateStart);
            outputToLabel.Text = "To date: " + String.Format("{0:MM/dd/yyyy}", dateEnd);


            //load lecturer
            lecturerIDLabel.Text = "Lecturer ID:  " + lecturer.ID;
            lecturerNameLabel.Text =  "Lecturer name:  " + lecturer.LecturerName;
            if (lecturer.IsFullTime == 1)
            {
                roleLabel.Text =  "Role: Full time lecturer";
            }
            else
            {
                roleLabel.Text = "Role: Part time lecturer";
            }


            //load schedule
            dataGridView1.RowCount = 4;

            for (int i = 0; i < 4; i++)
            {
                dataGridView1.Rows[i].Cells[0].Value = "Slot " + (i + 1);
                for (int j = 1; j < 8; j++)
                {
                    string dateOfWeek = dataGridView1.Rows[i].Cells[j].OwningColumn.HeaderText; ;
                    
                    var view = from scheduler in scheduleItem
                               join slotType in slotTypes on scheduler.SlotTypeID equals slotType.ID
                               where slotType.SlotNumber == i + 1 && scheduler.LecturerID == lecturer.ID && slotType.DateOfWeek.Contains(dateOfWeek)
                               select scheduler;
                    if (view.Count() > 0)
                    {
                        dataGridView1.Rows[i].Cells[j].Value = view.ElementAtOrDefault(0).CourseID;
                        
                    }
                }

            }


        }


    }
}

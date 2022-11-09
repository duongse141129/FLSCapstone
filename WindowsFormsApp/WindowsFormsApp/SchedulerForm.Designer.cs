using FPTULecturerScheduler;

namespace WindowsFormsApp
{
    partial class SchedulerForm
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(SchedulerForm));
            this.runButton = new System.Windows.Forms.Button();
            this.tabControl2 = new System.Windows.Forms.TabControl();
            this.departmentTabPage = new System.Windows.Forms.TabPage();
            this.label14 = new System.Windows.Forms.Label();
            this.textBox1 = new System.Windows.Forms.TextBox();
            this.departmentDataGridView = new System.Windows.Forms.DataGridView();
            this.Column1 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.Column2 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.Column3 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.Column5 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.Column4 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.subjectTabPage = new System.Windows.Forms.TabPage();
            this.label15 = new System.Windows.Forms.Label();
            this.textBox2 = new System.Windows.Forms.TextBox();
            this.subjectCombobox = new System.Windows.Forms.ComboBox();
            this.label2 = new System.Windows.Forms.Label();
            this.subjectDataGridView = new System.Windows.Forms.DataGridView();
            this.dataGridViewTextBoxColumn1 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.dataGridViewTextBoxColumn2 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.dataGridViewTextBoxColumn3 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.Column16 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.lecturerTabPage = new System.Windows.Forms.TabPage();
            this.label16 = new System.Windows.Forms.Label();
            this.textBox3 = new System.Windows.Forms.TextBox();
            this.lecturerCombobox = new System.Windows.Forms.ComboBox();
            this.label3 = new System.Windows.Forms.Label();
            this.lecturerDataGridView = new System.Windows.Forms.DataGridView();
            this.dataGridViewTextBoxColumn4 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.dataGridViewTextBoxColumn5 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.Column8 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.Column13 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.Column14 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.Column15 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.Column6 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.Column7 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.slotTypeTabPage = new System.Windows.Forms.TabPage();
            this.label17 = new System.Windows.Forms.Label();
            this.textBox4 = new System.Windows.Forms.TextBox();
            this.slotTypeDataGridView = new System.Windows.Forms.DataGridView();
            this.Column9 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.Column10 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.Column11 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.Column35 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.Column17 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.Column12 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.tabPage1 = new System.Windows.Forms.TabPage();
            this.label18 = new System.Windows.Forms.Label();
            this.textBox9 = new System.Windows.Forms.TextBox();
            this.panel1 = new System.Windows.Forms.Panel();
            this.favoriteTrackBar = new System.Windows.Forms.TrackBar();
            this.warningLabel = new System.Windows.Forms.Label();
            this.priorityCourseTrackBar = new System.Windows.Forms.TrackBar();
            this.label12 = new System.Windows.Forms.Label();
            this.feedbackTrackBar = new System.Windows.Forms.TrackBar();
            this.favoriteLabel = new System.Windows.Forms.Label();
            this.label6 = new System.Windows.Forms.Label();
            this.feedbackLabel = new System.Windows.Forms.Label();
            this.label7 = new System.Windows.Forms.Label();
            this.priorityCourseLabel = new System.Windows.Forms.Label();
            this.label8 = new System.Windows.Forms.Label();
            this.semesterCombobox = new System.Windows.Forms.ComboBox();
            this.loadDataButton = new System.Windows.Forms.Button();
            this.tabControl1 = new System.Windows.Forms.TabControl();
            this.InputTabPage = new System.Windows.Forms.TabPage();
            this.outputTabPage = new System.Windows.Forms.TabPage();
            this.tabControl3 = new System.Windows.Forms.TabControl();
            this.tabPage2 = new System.Windows.Forms.TabPage();
            this.panel2 = new System.Windows.Forms.Panel();
            this.descriptionTextBox = new System.Windows.Forms.TextBox();
            this.totalCourseLabel = new System.Windows.Forms.Label();
            this.runTimeLabel = new System.Windows.Forms.Label();
            this.createTimeLabel = new System.Windows.Forms.Label();
            this.scheduleNOLabel = new System.Windows.Forms.Label();
            this.label25 = new System.Windows.Forms.Label();
            this.button1 = new System.Windows.Forms.Button();
            this.label21 = new System.Windows.Forms.Label();
            this.label24 = new System.Windows.Forms.Label();
            this.label22 = new System.Windows.Forms.Label();
            this.label23 = new System.Windows.Forms.Label();
            this.label20 = new System.Windows.Forms.Label();
            this.scheduleListView = new System.Windows.Forms.ListView();
            this.columnHeader1 = ((System.Windows.Forms.ColumnHeader)(new System.Windows.Forms.ColumnHeader()));
            this.columnHeader2 = ((System.Windows.Forms.ColumnHeader)(new System.Windows.Forms.ColumnHeader()));
            this.Department = new System.Windows.Forms.TabPage();
            this.scheduleNOLabel1 = new System.Windows.Forms.Label();
            this.label13 = new System.Windows.Forms.Label();
            this.textBox5 = new System.Windows.Forms.TextBox();
            this.outputDepartmentDataGridView = new System.Windows.Forms.DataGridView();
            this.dataGridViewTextBoxColumn7 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.dataGridViewTextBoxColumn8 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.Column31 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.Column18 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.dataGridViewTextBoxColumn9 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.dataGridViewTextBoxColumn10 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.dataGridViewTextBoxColumn11 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.Subject = new System.Windows.Forms.TabPage();
            this.scheduleNOLabel2 = new System.Windows.Forms.Label();
            this.label11 = new System.Windows.Forms.Label();
            this.textBox6 = new System.Windows.Forms.TextBox();
            this.outputSubjectCombobox = new System.Windows.Forms.ComboBox();
            this.label4 = new System.Windows.Forms.Label();
            this.outputSubjectDataGridView = new System.Windows.Forms.DataGridView();
            this.Column19 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.Column30 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.Column20 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.Column21 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.Lecturer = new System.Windows.Forms.TabPage();
            this.scheduleNOLabel3 = new System.Windows.Forms.Label();
            this.label19 = new System.Windows.Forms.Label();
            this.label9 = new System.Windows.Forms.Label();
            this.textBox7 = new System.Windows.Forms.TextBox();
            this.outputLecturerCombobox = new System.Windows.Forms.ComboBox();
            this.label5 = new System.Windows.Forms.Label();
            this.outputLecturerDataGridView = new System.Windows.Forms.DataGridView();
            this.Column22 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.Column32 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.Column23 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.Column24 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.Column25 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.SlotType = new System.Windows.Forms.TabPage();
            this.scheduleNOLabel4 = new System.Windows.Forms.Label();
            this.label10 = new System.Windows.Forms.Label();
            this.textBox8 = new System.Windows.Forms.TextBox();
            this.outputSlotTypeDataGridView = new System.Windows.Forms.DataGridView();
            this.Column33 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.Column34 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.Column27 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.Column36 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.Column28 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.Column29 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.label1 = new System.Windows.Forms.Label();
            this.fromDatelabel = new System.Windows.Forms.Label();
            this.toDatelabel = new System.Windows.Forms.Label();
            this.tabControl2.SuspendLayout();
            this.departmentTabPage.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.departmentDataGridView)).BeginInit();
            this.subjectTabPage.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.subjectDataGridView)).BeginInit();
            this.lecturerTabPage.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.lecturerDataGridView)).BeginInit();
            this.slotTypeTabPage.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.slotTypeDataGridView)).BeginInit();
            this.tabPage1.SuspendLayout();
            this.panel1.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.favoriteTrackBar)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.priorityCourseTrackBar)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.feedbackTrackBar)).BeginInit();
            this.tabControl1.SuspendLayout();
            this.InputTabPage.SuspendLayout();
            this.outputTabPage.SuspendLayout();
            this.tabControl3.SuspendLayout();
            this.tabPage2.SuspendLayout();
            this.panel2.SuspendLayout();
            this.Department.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.outputDepartmentDataGridView)).BeginInit();
            this.Subject.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.outputSubjectDataGridView)).BeginInit();
            this.Lecturer.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.outputLecturerDataGridView)).BeginInit();
            this.SlotType.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.outputSlotTypeDataGridView)).BeginInit();
            this.SuspendLayout();
            // 
            // runButton
            // 
            this.runButton.Location = new System.Drawing.Point(573, 23);
            this.runButton.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
            this.runButton.Name = "runButton";
            this.runButton.Size = new System.Drawing.Size(90, 30);
            this.runButton.TabIndex = 1;
            this.runButton.Text = "Run";
            this.runButton.UseVisualStyleBackColor = true;
            this.runButton.Click += new System.EventHandler(this.button1_Click);
            // 
            // tabControl2
            // 
            this.tabControl2.Controls.Add(this.departmentTabPage);
            this.tabControl2.Controls.Add(this.subjectTabPage);
            this.tabControl2.Controls.Add(this.lecturerTabPage);
            this.tabControl2.Controls.Add(this.slotTypeTabPage);
            this.tabControl2.Controls.Add(this.tabPage1);
            this.tabControl2.Location = new System.Drawing.Point(3, 2);
            this.tabControl2.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
            this.tabControl2.Name = "tabControl2";
            this.tabControl2.SelectedIndex = 0;
            this.tabControl2.Size = new System.Drawing.Size(1928, 818);
            this.tabControl2.TabIndex = 2;
            // 
            // departmentTabPage
            // 
            this.departmentTabPage.AutoScroll = true;
            this.departmentTabPage.Controls.Add(this.label14);
            this.departmentTabPage.Controls.Add(this.textBox1);
            this.departmentTabPage.Controls.Add(this.departmentDataGridView);
            this.departmentTabPage.Location = new System.Drawing.Point(4, 25);
            this.departmentTabPage.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
            this.departmentTabPage.Name = "departmentTabPage";
            this.departmentTabPage.Padding = new System.Windows.Forms.Padding(3, 2, 3, 2);
            this.departmentTabPage.Size = new System.Drawing.Size(1920, 789);
            this.departmentTabPage.TabIndex = 0;
            this.departmentTabPage.Text = "Department";
            this.departmentTabPage.UseVisualStyleBackColor = true;
            // 
            // label14
            // 
            this.label14.AutoSize = true;
            this.label14.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label14.Location = new System.Drawing.Point(1301, 15);
            this.label14.Name = "label14";
            this.label14.Size = new System.Drawing.Size(53, 25);
            this.label14.TabIndex = 5;
            this.label14.Text = "Note";
            // 
            // textBox1
            // 
            this.textBox1.Font = new System.Drawing.Font("Microsoft Sans Serif", 10.8F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.textBox1.Location = new System.Drawing.Point(1306, 43);
            this.textBox1.Multiline = true;
            this.textBox1.Name = "textBox1";
            this.textBox1.ReadOnly = true;
            this.textBox1.Size = new System.Drawing.Size(602, 739);
            this.textBox1.TabIndex = 0;
            this.textBox1.Text = resources.GetString("textBox1.Text");
            // 
            // departmentDataGridView
            // 
            this.departmentDataGridView.AutoSizeColumnsMode = System.Windows.Forms.DataGridViewAutoSizeColumnsMode.ColumnHeader;
            this.departmentDataGridView.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.departmentDataGridView.Columns.AddRange(new System.Windows.Forms.DataGridViewColumn[] {
            this.Column1,
            this.Column2,
            this.Column3,
            this.Column5,
            this.Column4});
            this.departmentDataGridView.Location = new System.Drawing.Point(3, 0);
            this.departmentDataGridView.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
            this.departmentDataGridView.MultiSelect = false;
            this.departmentDataGridView.Name = "departmentDataGridView";
            this.departmentDataGridView.ReadOnly = true;
            this.departmentDataGridView.RowHeadersWidthSizeMode = System.Windows.Forms.DataGridViewRowHeadersWidthSizeMode.AutoSizeToDisplayedHeaders;
            this.departmentDataGridView.RowTemplate.Height = 24;
            this.departmentDataGridView.Size = new System.Drawing.Size(1297, 782);
            this.departmentDataGridView.TabIndex = 0;
            // 
            // Column1
            // 
            this.Column1.AutoSizeMode = System.Windows.Forms.DataGridViewAutoSizeColumnMode.None;
            this.Column1.Frozen = true;
            this.Column1.HeaderText = "Department ID";
            this.Column1.MinimumWidth = 6;
            this.Column1.Name = "Column1";
            this.Column1.ReadOnly = true;
            this.Column1.Width = 130;
            // 
            // Column2
            // 
            this.Column2.AutoSizeMode = System.Windows.Forms.DataGridViewAutoSizeColumnMode.None;
            this.Column2.Frozen = true;
            this.Column2.HeaderText = "Department name";
            this.Column2.MinimumWidth = 6;
            this.Column2.Name = "Column2";
            this.Column2.ReadOnly = true;
            this.Column2.Width = 145;
            // 
            // Column3
            // 
            this.Column3.AutoSizeMode = System.Windows.Forms.DataGridViewAutoSizeColumnMode.None;
            this.Column3.HeaderText = "Total subject";
            this.Column3.MinimumWidth = 6;
            this.Column3.Name = "Column3";
            this.Column3.ReadOnly = true;
            this.Column3.Width = 130;
            // 
            // Column5
            // 
            this.Column5.AutoSizeMode = System.Windows.Forms.DataGridViewAutoSizeColumnMode.None;
            this.Column5.HeaderText = "Total course";
            this.Column5.MinimumWidth = 6;
            this.Column5.Name = "Column5";
            this.Column5.ReadOnly = true;
            this.Column5.Width = 130;
            // 
            // Column4
            // 
            this.Column4.AutoSizeMode = System.Windows.Forms.DataGridViewAutoSizeColumnMode.None;
            this.Column4.HeaderText = "Total lecturer ";
            this.Column4.MinimumWidth = 6;
            this.Column4.Name = "Column4";
            this.Column4.ReadOnly = true;
            this.Column4.Width = 130;
            // 
            // subjectTabPage
            // 
            this.subjectTabPage.Controls.Add(this.label15);
            this.subjectTabPage.Controls.Add(this.textBox2);
            this.subjectTabPage.Controls.Add(this.subjectCombobox);
            this.subjectTabPage.Controls.Add(this.label2);
            this.subjectTabPage.Controls.Add(this.subjectDataGridView);
            this.subjectTabPage.Location = new System.Drawing.Point(4, 25);
            this.subjectTabPage.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
            this.subjectTabPage.Name = "subjectTabPage";
            this.subjectTabPage.Padding = new System.Windows.Forms.Padding(3, 2, 3, 2);
            this.subjectTabPage.Size = new System.Drawing.Size(1920, 789);
            this.subjectTabPage.TabIndex = 1;
            this.subjectTabPage.Text = "Subject";
            this.subjectTabPage.UseVisualStyleBackColor = true;
            // 
            // label15
            // 
            this.label15.AutoSize = true;
            this.label15.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label15.Location = new System.Drawing.Point(1301, 19);
            this.label15.Name = "label15";
            this.label15.Size = new System.Drawing.Size(53, 25);
            this.label15.TabIndex = 5;
            this.label15.Text = "Note";
            // 
            // textBox2
            // 
            this.textBox2.Font = new System.Drawing.Font("Microsoft Sans Serif", 10.8F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.textBox2.Location = new System.Drawing.Point(1306, 47);
            this.textBox2.Multiline = true;
            this.textBox2.Name = "textBox2";
            this.textBox2.ReadOnly = true;
            this.textBox2.Size = new System.Drawing.Size(602, 733);
            this.textBox2.TabIndex = 1;
            this.textBox2.Text = "- Subject name column: Name of subject.\r\n\r\n- Total course column: Available cours" +
    "e amount of subject.\r\n\r\n- Total assigned course column: Assigned course amount f" +
    "or lecturer.\r\n";
            // 
            // subjectCombobox
            // 
            this.subjectCombobox.FormattingEnabled = true;
            this.subjectCombobox.Location = new System.Drawing.Point(109, 13);
            this.subjectCombobox.Name = "subjectCombobox";
            this.subjectCombobox.Size = new System.Drawing.Size(300, 24);
            this.subjectCombobox.TabIndex = 4;
            this.subjectCombobox.SelectedIndexChanged += new System.EventHandler(this.departmentCbxSubject_SelectedIndexChanged);
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Location = new System.Drawing.Point(26, 16);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(77, 16);
            this.label2.TabIndex = 3;
            this.label2.Text = "Department";
            // 
            // subjectDataGridView
            // 
            this.subjectDataGridView.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.subjectDataGridView.Columns.AddRange(new System.Windows.Forms.DataGridViewColumn[] {
            this.dataGridViewTextBoxColumn1,
            this.dataGridViewTextBoxColumn2,
            this.dataGridViewTextBoxColumn3,
            this.Column16});
            this.subjectDataGridView.Location = new System.Drawing.Point(3, 47);
            this.subjectDataGridView.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
            this.subjectDataGridView.MultiSelect = false;
            this.subjectDataGridView.Name = "subjectDataGridView";
            this.subjectDataGridView.ReadOnly = true;
            this.subjectDataGridView.RowHeadersWidth = 51;
            this.subjectDataGridView.RowTemplate.Height = 24;
            this.subjectDataGridView.Size = new System.Drawing.Size(1297, 733);
            this.subjectDataGridView.TabIndex = 1;
            // 
            // dataGridViewTextBoxColumn1
            // 
            this.dataGridViewTextBoxColumn1.AutoSizeMode = System.Windows.Forms.DataGridViewAutoSizeColumnMode.None;
            this.dataGridViewTextBoxColumn1.HeaderText = "Subject ID";
            this.dataGridViewTextBoxColumn1.MinimumWidth = 6;
            this.dataGridViewTextBoxColumn1.Name = "dataGridViewTextBoxColumn1";
            this.dataGridViewTextBoxColumn1.ReadOnly = true;
            this.dataGridViewTextBoxColumn1.Width = 110;
            // 
            // dataGridViewTextBoxColumn2
            // 
            this.dataGridViewTextBoxColumn2.AutoSizeMode = System.Windows.Forms.DataGridViewAutoSizeColumnMode.None;
            this.dataGridViewTextBoxColumn2.HeaderText = "Subject name";
            this.dataGridViewTextBoxColumn2.MinimumWidth = 6;
            this.dataGridViewTextBoxColumn2.Name = "dataGridViewTextBoxColumn2";
            this.dataGridViewTextBoxColumn2.ReadOnly = true;
            this.dataGridViewTextBoxColumn2.Width = 120;
            // 
            // dataGridViewTextBoxColumn3
            // 
            this.dataGridViewTextBoxColumn3.AutoSizeMode = System.Windows.Forms.DataGridViewAutoSizeColumnMode.None;
            this.dataGridViewTextBoxColumn3.HeaderText = "Total course";
            this.dataGridViewTextBoxColumn3.MinimumWidth = 6;
            this.dataGridViewTextBoxColumn3.Name = "dataGridViewTextBoxColumn3";
            this.dataGridViewTextBoxColumn3.ReadOnly = true;
            this.dataGridViewTextBoxColumn3.Width = 120;
            // 
            // Column16
            // 
            this.Column16.HeaderText = "Total course assigned";
            this.Column16.MinimumWidth = 6;
            this.Column16.Name = "Column16";
            this.Column16.ReadOnly = true;
            this.Column16.Width = 125;
            // 
            // lecturerTabPage
            // 
            this.lecturerTabPage.Controls.Add(this.label16);
            this.lecturerTabPage.Controls.Add(this.textBox3);
            this.lecturerTabPage.Controls.Add(this.lecturerCombobox);
            this.lecturerTabPage.Controls.Add(this.label3);
            this.lecturerTabPage.Controls.Add(this.lecturerDataGridView);
            this.lecturerTabPage.Location = new System.Drawing.Point(4, 25);
            this.lecturerTabPage.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
            this.lecturerTabPage.Name = "lecturerTabPage";
            this.lecturerTabPage.Size = new System.Drawing.Size(1920, 789);
            this.lecturerTabPage.TabIndex = 2;
            this.lecturerTabPage.Text = "Lecturer";
            this.lecturerTabPage.UseVisualStyleBackColor = true;
            // 
            // label16
            // 
            this.label16.AutoSize = true;
            this.label16.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label16.Location = new System.Drawing.Point(1301, 21);
            this.label16.Name = "label16";
            this.label16.Size = new System.Drawing.Size(53, 25);
            this.label16.TabIndex = 6;
            this.label16.Text = "Note";
            // 
            // textBox3
            // 
            this.textBox3.Font = new System.Drawing.Font("Microsoft Sans Serif", 10.8F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.textBox3.Location = new System.Drawing.Point(1306, 49);
            this.textBox3.Multiline = true;
            this.textBox3.Name = "textBox3";
            this.textBox3.ReadOnly = true;
            this.textBox3.Size = new System.Drawing.Size(602, 731);
            this.textBox3.TabIndex = 2;
            this.textBox3.Text = resources.GetString("textBox3.Text");
            // 
            // lecturerCombobox
            // 
            this.lecturerCombobox.FormattingEnabled = true;
            this.lecturerCombobox.Location = new System.Drawing.Point(113, 15);
            this.lecturerCombobox.Name = "lecturerCombobox";
            this.lecturerCombobox.Size = new System.Drawing.Size(297, 24);
            this.lecturerCombobox.TabIndex = 5;
            this.lecturerCombobox.SelectedIndexChanged += new System.EventHandler(this.departmentCbxLecturer_SelectedIndexChanged);
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Location = new System.Drawing.Point(30, 18);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(77, 16);
            this.label3.TabIndex = 4;
            this.label3.Text = "Department";
            // 
            // lecturerDataGridView
            // 
            this.lecturerDataGridView.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.lecturerDataGridView.Columns.AddRange(new System.Windows.Forms.DataGridViewColumn[] {
            this.dataGridViewTextBoxColumn4,
            this.dataGridViewTextBoxColumn5,
            this.Column8,
            this.Column13,
            this.Column14,
            this.Column15,
            this.Column6,
            this.Column7});
            this.lecturerDataGridView.Location = new System.Drawing.Point(3, 49);
            this.lecturerDataGridView.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
            this.lecturerDataGridView.MultiSelect = false;
            this.lecturerDataGridView.Name = "lecturerDataGridView";
            this.lecturerDataGridView.ReadOnly = true;
            this.lecturerDataGridView.RowHeadersWidth = 51;
            this.lecturerDataGridView.RowTemplate.Height = 24;
            this.lecturerDataGridView.Size = new System.Drawing.Size(1297, 731);
            this.lecturerDataGridView.TabIndex = 2;
            // 
            // dataGridViewTextBoxColumn4
            // 
            this.dataGridViewTextBoxColumn4.AutoSizeMode = System.Windows.Forms.DataGridViewAutoSizeColumnMode.None;
            this.dataGridViewTextBoxColumn4.HeaderText = "Lecturer ID";
            this.dataGridViewTextBoxColumn4.MinimumWidth = 6;
            this.dataGridViewTextBoxColumn4.Name = "dataGridViewTextBoxColumn4";
            this.dataGridViewTextBoxColumn4.ReadOnly = true;
            this.dataGridViewTextBoxColumn4.Width = 110;
            // 
            // dataGridViewTextBoxColumn5
            // 
            this.dataGridViewTextBoxColumn5.AutoSizeMode = System.Windows.Forms.DataGridViewAutoSizeColumnMode.None;
            this.dataGridViewTextBoxColumn5.HeaderText = "Lecturer name";
            this.dataGridViewTextBoxColumn5.MinimumWidth = 6;
            this.dataGridViewTextBoxColumn5.Name = "dataGridViewTextBoxColumn5";
            this.dataGridViewTextBoxColumn5.ReadOnly = true;
            this.dataGridViewTextBoxColumn5.Width = 130;
            // 
            // Column8
            // 
            this.Column8.HeaderText = "Full time";
            this.Column8.MinimumWidth = 6;
            this.Column8.Name = "Column8";
            this.Column8.ReadOnly = true;
            this.Column8.Width = 125;
            // 
            // Column13
            // 
            this.Column13.HeaderText = "Min course";
            this.Column13.MinimumWidth = 6;
            this.Column13.Name = "Column13";
            this.Column13.ReadOnly = true;
            this.Column13.Width = 110;
            // 
            // Column14
            // 
            this.Column14.HeaderText = "Max course";
            this.Column14.MinimumWidth = 6;
            this.Column14.Name = "Column14";
            this.Column14.ReadOnly = true;
            this.Column14.Width = 110;
            // 
            // Column15
            // 
            this.Column15.HeaderText = "Priority level";
            this.Column15.MinimumWidth = 6;
            this.Column15.Name = "Column15";
            this.Column15.ReadOnly = true;
            this.Column15.Width = 125;
            // 
            // Column6
            // 
            this.Column6.HeaderText = "Total priority course ";
            this.Column6.MinimumWidth = 6;
            this.Column6.Name = "Column6";
            this.Column6.ReadOnly = true;
            this.Column6.Width = 110;
            // 
            // Column7
            // 
            this.Column7.HeaderText = "Total assigned course";
            this.Column7.MinimumWidth = 6;
            this.Column7.Name = "Column7";
            this.Column7.ReadOnly = true;
            this.Column7.Width = 110;
            // 
            // slotTypeTabPage
            // 
            this.slotTypeTabPage.Controls.Add(this.label17);
            this.slotTypeTabPage.Controls.Add(this.textBox4);
            this.slotTypeTabPage.Controls.Add(this.slotTypeDataGridView);
            this.slotTypeTabPage.Location = new System.Drawing.Point(4, 25);
            this.slotTypeTabPage.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
            this.slotTypeTabPage.Name = "slotTypeTabPage";
            this.slotTypeTabPage.Size = new System.Drawing.Size(1920, 789);
            this.slotTypeTabPage.TabIndex = 3;
            this.slotTypeTabPage.Text = "Slot type";
            this.slotTypeTabPage.UseVisualStyleBackColor = true;
            // 
            // label17
            // 
            this.label17.AutoSize = true;
            this.label17.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label17.Location = new System.Drawing.Point(1301, 25);
            this.label17.Name = "label17";
            this.label17.Size = new System.Drawing.Size(53, 25);
            this.label17.TabIndex = 5;
            this.label17.Text = "Note";
            // 
            // textBox4
            // 
            this.textBox4.Font = new System.Drawing.Font("Microsoft Sans Serif", 10.8F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.textBox4.Location = new System.Drawing.Point(1306, 53);
            this.textBox4.Multiline = true;
            this.textBox4.Name = "textBox4";
            this.textBox4.ReadOnly = true;
            this.textBox4.Size = new System.Drawing.Size(602, 729);
            this.textBox4.TabIndex = 2;
            this.textBox4.Text = resources.GetString("textBox4.Text");
            // 
            // slotTypeDataGridView
            // 
            this.slotTypeDataGridView.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.slotTypeDataGridView.Columns.AddRange(new System.Windows.Forms.DataGridViewColumn[] {
            this.Column9,
            this.Column10,
            this.Column11,
            this.Column35,
            this.Column17,
            this.Column12});
            this.slotTypeDataGridView.Location = new System.Drawing.Point(3, 0);
            this.slotTypeDataGridView.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
            this.slotTypeDataGridView.Name = "slotTypeDataGridView";
            this.slotTypeDataGridView.ReadOnly = true;
            this.slotTypeDataGridView.RowHeadersWidth = 51;
            this.slotTypeDataGridView.RowTemplate.Height = 24;
            this.slotTypeDataGridView.Size = new System.Drawing.Size(1297, 782);
            this.slotTypeDataGridView.TabIndex = 0;
            // 
            // Column9
            // 
            this.Column9.HeaderText = "Slot number";
            this.Column9.MinimumWidth = 6;
            this.Column9.Name = "Column9";
            this.Column9.ReadOnly = true;
            this.Column9.Width = 110;
            // 
            // Column10
            // 
            this.Column10.HeaderText = "Time start";
            this.Column10.MinimumWidth = 6;
            this.Column10.Name = "Column10";
            this.Column10.ReadOnly = true;
            this.Column10.Width = 115;
            // 
            // Column11
            // 
            this.Column11.HeaderText = "Time end";
            this.Column11.MinimumWidth = 6;
            this.Column11.Name = "Column11";
            this.Column11.ReadOnly = true;
            this.Column11.Width = 115;
            // 
            // Column35
            // 
            this.Column35.HeaderText = "Date of week";
            this.Column35.MinimumWidth = 6;
            this.Column35.Name = "Column35";
            this.Column35.ReadOnly = true;
            this.Column35.Width = 125;
            // 
            // Column17
            // 
            this.Column17.HeaderText = "Max course slot";
            this.Column17.MinimumWidth = 6;
            this.Column17.Name = "Column17";
            this.Column17.ReadOnly = true;
            this.Column17.Width = 110;
            // 
            // Column12
            // 
            this.Column12.HeaderText = "Total assigned course";
            this.Column12.MinimumWidth = 6;
            this.Column12.Name = "Column12";
            this.Column12.ReadOnly = true;
            this.Column12.Width = 110;
            // 
            // tabPage1
            // 
            this.tabPage1.Controls.Add(this.label18);
            this.tabPage1.Controls.Add(this.textBox9);
            this.tabPage1.Controls.Add(this.panel1);
            this.tabPage1.Location = new System.Drawing.Point(4, 25);
            this.tabPage1.Name = "tabPage1";
            this.tabPage1.Padding = new System.Windows.Forms.Padding(3);
            this.tabPage1.Size = new System.Drawing.Size(1920, 789);
            this.tabPage1.TabIndex = 4;
            this.tabPage1.Text = "Config";
            this.tabPage1.UseVisualStyleBackColor = true;
            // 
            // label18
            // 
            this.label18.AutoSize = true;
            this.label18.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label18.Location = new System.Drawing.Point(1306, 28);
            this.label18.Name = "label18";
            this.label18.Size = new System.Drawing.Size(53, 25);
            this.label18.TabIndex = 12;
            this.label18.Text = "Note";
            // 
            // textBox9
            // 
            this.textBox9.Font = new System.Drawing.Font("Microsoft Sans Serif", 10.8F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.textBox9.Location = new System.Drawing.Point(1306, 56);
            this.textBox9.Multiline = true;
            this.textBox9.Name = "textBox9";
            this.textBox9.ReadOnly = true;
            this.textBox9.Size = new System.Drawing.Size(602, 729);
            this.textBox9.TabIndex = 11;
            this.textBox9.Text = resources.GetString("textBox9.Text");
            // 
            // panel1
            // 
            this.panel1.BackColor = System.Drawing.Color.WhiteSmoke;
            this.panel1.Controls.Add(this.favoriteTrackBar);
            this.panel1.Controls.Add(this.warningLabel);
            this.panel1.Controls.Add(this.priorityCourseTrackBar);
            this.panel1.Controls.Add(this.label12);
            this.panel1.Controls.Add(this.feedbackTrackBar);
            this.panel1.Controls.Add(this.favoriteLabel);
            this.panel1.Controls.Add(this.label6);
            this.panel1.Controls.Add(this.feedbackLabel);
            this.panel1.Controls.Add(this.label7);
            this.panel1.Controls.Add(this.priorityCourseLabel);
            this.panel1.Controls.Add(this.label8);
            this.panel1.Location = new System.Drawing.Point(3, 3);
            this.panel1.Name = "panel1";
            this.panel1.Size = new System.Drawing.Size(1297, 782);
            this.panel1.TabIndex = 10;
            // 
            // favoriteTrackBar
            // 
            this.favoriteTrackBar.LargeChange = 1;
            this.favoriteTrackBar.Location = new System.Drawing.Point(343, 307);
            this.favoriteTrackBar.Maximum = 2;
            this.favoriteTrackBar.Name = "favoriteTrackBar";
            this.favoriteTrackBar.Size = new System.Drawing.Size(260, 56);
            this.favoriteTrackBar.TabIndex = 1;
            this.favoriteTrackBar.Scroll += new System.EventHandler(this.favoriteTrackBar_Scroll);
            // 
            // warningLabel
            // 
            this.warningLabel.AutoSize = true;
            this.warningLabel.ForeColor = System.Drawing.Color.Red;
            this.warningLabel.Location = new System.Drawing.Point(93, 414);
            this.warningLabel.Name = "warningLabel";
            this.warningLabel.Size = new System.Drawing.Size(10, 16);
            this.warningLabel.TabIndex = 9;
            this.warningLabel.Text = " ";
            // 
            // priorityCourseTrackBar
            // 
            this.priorityCourseTrackBar.LargeChange = 1;
            this.priorityCourseTrackBar.Location = new System.Drawing.Point(343, 88);
            this.priorityCourseTrackBar.Maximum = 2;
            this.priorityCourseTrackBar.Name = "priorityCourseTrackBar";
            this.priorityCourseTrackBar.Size = new System.Drawing.Size(260, 56);
            this.priorityCourseTrackBar.TabIndex = 1;
            this.priorityCourseTrackBar.Value = 2;
            this.priorityCourseTrackBar.Scroll += new System.EventHandler(this.priorityCourseTrackBar_Scroll);
            // 
            // label12
            // 
            this.label12.AutoSize = true;
            this.label12.Font = new System.Drawing.Font("Microsoft Sans Serif", 9F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label12.Location = new System.Drawing.Point(93, 474);
            this.label12.Name = "label12";
            this.label12.Size = new System.Drawing.Size(409, 18);
            this.label12.TabIndex = 8;
            this.label12.Text = "*Priority lecturer level is used when point of two lecturer equal";
            // 
            // feedbackTrackBar
            // 
            this.feedbackTrackBar.LargeChange = 1;
            this.feedbackTrackBar.Location = new System.Drawing.Point(343, 201);
            this.feedbackTrackBar.Maximum = 2;
            this.feedbackTrackBar.Name = "feedbackTrackBar";
            this.feedbackTrackBar.Size = new System.Drawing.Size(260, 56);
            this.feedbackTrackBar.TabIndex = 1;
            this.feedbackTrackBar.Value = 1;
            this.feedbackTrackBar.Scroll += new System.EventHandler(this.feedbackTrackBar_Scroll);
            // 
            // favoriteLabel
            // 
            this.favoriteLabel.AutoSize = true;
            this.favoriteLabel.Font = new System.Drawing.Font("Microsoft Sans Serif", 9F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.favoriteLabel.Location = new System.Drawing.Point(621, 324);
            this.favoriteLabel.Name = "favoriteLabel";
            this.favoriteLabel.Size = new System.Drawing.Size(36, 18);
            this.favoriteLabel.TabIndex = 7;
            this.favoriteLabel.Text = "Low";
            // 
            // label6
            // 
            this.label6.AutoSize = true;
            this.label6.Font = new System.Drawing.Font("Microsoft Sans Serif", 9F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label6.Location = new System.Drawing.Point(93, 219);
            this.label6.Name = "label6";
            this.label6.Size = new System.Drawing.Size(201, 18);
            this.label6.TabIndex = 2;
            this.label6.Text = "Feedback of department level";
            // 
            // feedbackLabel
            // 
            this.feedbackLabel.AutoSize = true;
            this.feedbackLabel.Font = new System.Drawing.Font("Microsoft Sans Serif", 9F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.feedbackLabel.Location = new System.Drawing.Point(621, 221);
            this.feedbackLabel.Name = "feedbackLabel";
            this.feedbackLabel.Size = new System.Drawing.Size(61, 18);
            this.feedbackLabel.TabIndex = 6;
            this.feedbackLabel.Text = "Medium";
            // 
            // label7
            // 
            this.label7.AutoSize = true;
            this.label7.Font = new System.Drawing.Font("Microsoft Sans Serif", 9F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label7.Location = new System.Drawing.Point(93, 104);
            this.label7.Name = "label7";
            this.label7.Size = new System.Drawing.Size(137, 18);
            this.label7.TabIndex = 3;
            this.label7.Text = "Priority course level";
            // 
            // priorityCourseLabel
            // 
            this.priorityCourseLabel.AutoSize = true;
            this.priorityCourseLabel.Font = new System.Drawing.Font("Microsoft Sans Serif", 9F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.priorityCourseLabel.Location = new System.Drawing.Point(621, 106);
            this.priorityCourseLabel.Name = "priorityCourseLabel";
            this.priorityCourseLabel.Size = new System.Drawing.Size(38, 18);
            this.priorityCourseLabel.TabIndex = 5;
            this.priorityCourseLabel.Text = "High";
            // 
            // label8
            // 
            this.label8.AutoSize = true;
            this.label8.Font = new System.Drawing.Font("Microsoft Sans Serif", 9F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label8.Location = new System.Drawing.Point(93, 322);
            this.label8.Name = "label8";
            this.label8.Size = new System.Drawing.Size(164, 18);
            this.label8.TabIndex = 4;
            this.label8.Text = "Favorite of lecturer level";
            // 
            // semesterCombobox
            // 
            this.semesterCombobox.FormattingEnabled = true;
            this.semesterCombobox.Location = new System.Drawing.Point(114, 25);
            this.semesterCombobox.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
            this.semesterCombobox.Name = "semesterCombobox";
            this.semesterCombobox.Size = new System.Drawing.Size(187, 24);
            this.semesterCombobox.TabIndex = 3;
            // 
            // loadDataButton
            // 
            this.loadDataButton.Location = new System.Drawing.Point(336, 23);
            this.loadDataButton.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
            this.loadDataButton.Name = "loadDataButton";
            this.loadDataButton.Size = new System.Drawing.Size(90, 30);
            this.loadDataButton.TabIndex = 4;
            this.loadDataButton.Text = "Load data";
            this.loadDataButton.UseVisualStyleBackColor = true;
            this.loadDataButton.Click += new System.EventHandler(this.loadDataButton_Click);
            // 
            // tabControl1
            // 
            this.tabControl1.Controls.Add(this.InputTabPage);
            this.tabControl1.Controls.Add(this.outputTabPage);
            this.tabControl1.Location = new System.Drawing.Point(46, 119);
            this.tabControl1.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
            this.tabControl1.Name = "tabControl1";
            this.tabControl1.SelectedIndex = 0;
            this.tabControl1.Size = new System.Drawing.Size(1933, 849);
            this.tabControl1.TabIndex = 5;
            // 
            // InputTabPage
            // 
            this.InputTabPage.Controls.Add(this.tabControl2);
            this.InputTabPage.Location = new System.Drawing.Point(4, 25);
            this.InputTabPage.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
            this.InputTabPage.Name = "InputTabPage";
            this.InputTabPage.Padding = new System.Windows.Forms.Padding(3, 2, 3, 2);
            this.InputTabPage.Size = new System.Drawing.Size(1925, 820);
            this.InputTabPage.TabIndex = 0;
            this.InputTabPage.Text = "Input";
            this.InputTabPage.UseVisualStyleBackColor = true;
            // 
            // outputTabPage
            // 
            this.outputTabPage.Controls.Add(this.tabControl3);
            this.outputTabPage.Location = new System.Drawing.Point(4, 25);
            this.outputTabPage.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
            this.outputTabPage.Name = "outputTabPage";
            this.outputTabPage.Padding = new System.Windows.Forms.Padding(3, 2, 3, 2);
            this.outputTabPage.Size = new System.Drawing.Size(1925, 820);
            this.outputTabPage.TabIndex = 1;
            this.outputTabPage.Text = "Output";
            this.outputTabPage.UseVisualStyleBackColor = true;
            // 
            // tabControl3
            // 
            this.tabControl3.Controls.Add(this.tabPage2);
            this.tabControl3.Controls.Add(this.Department);
            this.tabControl3.Controls.Add(this.Subject);
            this.tabControl3.Controls.Add(this.Lecturer);
            this.tabControl3.Controls.Add(this.SlotType);
            this.tabControl3.Location = new System.Drawing.Point(0, 0);
            this.tabControl3.Name = "tabControl3";
            this.tabControl3.SelectedIndex = 0;
            this.tabControl3.Size = new System.Drawing.Size(1928, 820);
            this.tabControl3.TabIndex = 3;
            // 
            // tabPage2
            // 
            this.tabPage2.Controls.Add(this.panel2);
            this.tabPage2.Controls.Add(this.label20);
            this.tabPage2.Controls.Add(this.scheduleListView);
            this.tabPage2.Location = new System.Drawing.Point(4, 25);
            this.tabPage2.Name = "tabPage2";
            this.tabPage2.Size = new System.Drawing.Size(1920, 791);
            this.tabPage2.TabIndex = 4;
            this.tabPage2.Text = "Schedule";
            this.tabPage2.UseVisualStyleBackColor = true;
            // 
            // panel2
            // 
            this.panel2.BackColor = System.Drawing.Color.WhiteSmoke;
            this.panel2.Controls.Add(this.descriptionTextBox);
            this.panel2.Controls.Add(this.totalCourseLabel);
            this.panel2.Controls.Add(this.runTimeLabel);
            this.panel2.Controls.Add(this.createTimeLabel);
            this.panel2.Controls.Add(this.scheduleNOLabel);
            this.panel2.Controls.Add(this.label25);
            this.panel2.Controls.Add(this.button1);
            this.panel2.Controls.Add(this.label21);
            this.panel2.Controls.Add(this.label24);
            this.panel2.Controls.Add(this.label22);
            this.panel2.Controls.Add(this.label23);
            this.panel2.Location = new System.Drawing.Point(573, 43);
            this.panel2.Name = "panel2";
            this.panel2.Size = new System.Drawing.Size(1300, 745);
            this.panel2.TabIndex = 10;
            // 
            // descriptionTextBox
            // 
            this.descriptionTextBox.Location = new System.Drawing.Point(109, 210);
            this.descriptionTextBox.Multiline = true;
            this.descriptionTextBox.Name = "descriptionTextBox";
            this.descriptionTextBox.ReadOnly = true;
            this.descriptionTextBox.Size = new System.Drawing.Size(472, 79);
            this.descriptionTextBox.TabIndex = 15;
            // 
            // totalCourseLabel
            // 
            this.totalCourseLabel.AutoSize = true;
            this.totalCourseLabel.Location = new System.Drawing.Point(187, 303);
            this.totalCourseLabel.Name = "totalCourseLabel";
            this.totalCourseLabel.Size = new System.Drawing.Size(0, 16);
            this.totalCourseLabel.TabIndex = 14;
            // 
            // runTimeLabel
            // 
            this.runTimeLabel.AutoSize = true;
            this.runTimeLabel.Location = new System.Drawing.Point(106, 155);
            this.runTimeLabel.Name = "runTimeLabel";
            this.runTimeLabel.Size = new System.Drawing.Size(0, 16);
            this.runTimeLabel.TabIndex = 12;
            // 
            // createTimeLabel
            // 
            this.createTimeLabel.AutoSize = true;
            this.createTimeLabel.Location = new System.Drawing.Point(130, 97);
            this.createTimeLabel.Name = "createTimeLabel";
            this.createTimeLabel.Size = new System.Drawing.Size(0, 16);
            this.createTimeLabel.TabIndex = 11;
            // 
            // scheduleNOLabel
            // 
            this.scheduleNOLabel.AutoSize = true;
            this.scheduleNOLabel.Location = new System.Drawing.Point(150, 35);
            this.scheduleNOLabel.Name = "scheduleNOLabel";
            this.scheduleNOLabel.Size = new System.Drawing.Size(0, 16);
            this.scheduleNOLabel.TabIndex = 10;
            // 
            // label25
            // 
            this.label25.AutoSize = true;
            this.label25.Location = new System.Drawing.Point(13, 303);
            this.label25.Name = "label25";
            this.label25.Size = new System.Drawing.Size(144, 16);
            this.label25.TabIndex = 8;
            this.label25.Text = "Total course assigned:";
            // 
            // button1
            // 
            this.button1.Location = new System.Drawing.Point(26, 386);
            this.button1.Name = "button1";
            this.button1.Size = new System.Drawing.Size(131, 29);
            this.button1.TabIndex = 2;
            this.button1.Text = "Send schedule";
            this.button1.UseVisualStyleBackColor = true;
            this.button1.Click += new System.EventHandler(this.button1_Click_1);
            // 
            // label21
            // 
            this.label21.AutoSize = true;
            this.label21.Location = new System.Drawing.Point(13, 36);
            this.label21.Name = "label21";
            this.label21.Size = new System.Drawing.Size(118, 16);
            this.label21.TabIndex = 4;
            this.label21.Text = "Schedule number: ";
            // 
            // label24
            // 
            this.label24.AutoSize = true;
            this.label24.Location = new System.Drawing.Point(13, 210);
            this.label24.Name = "label24";
            this.label24.Size = new System.Drawing.Size(78, 16);
            this.label24.TabIndex = 7;
            this.label24.Text = "Description:";
            // 
            // label22
            // 
            this.label22.AutoSize = true;
            this.label22.Location = new System.Drawing.Point(13, 97);
            this.label22.Name = "label22";
            this.label22.Size = new System.Drawing.Size(86, 16);
            this.label22.TabIndex = 5;
            this.label22.Text = "Created time:";
            // 
            // label23
            // 
            this.label23.AutoSize = true;
            this.label23.Location = new System.Drawing.Point(13, 155);
            this.label23.Name = "label23";
            this.label23.Size = new System.Drawing.Size(62, 16);
            this.label23.TabIndex = 6;
            this.label23.Text = "Run time:";
            // 
            // label20
            // 
            this.label20.AutoSize = true;
            this.label20.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label20.Location = new System.Drawing.Point(573, 15);
            this.label20.Name = "label20";
            this.label20.Size = new System.Drawing.Size(102, 25);
            this.label20.TabIndex = 3;
            this.label20.Text = "Infomation";
            // 
            // scheduleListView
            // 
            this.scheduleListView.Columns.AddRange(new System.Windows.Forms.ColumnHeader[] {
            this.columnHeader1,
            this.columnHeader2});
            this.scheduleListView.FullRowSelect = true;
            this.scheduleListView.HideSelection = false;
            this.scheduleListView.Location = new System.Drawing.Point(2, 3);
            this.scheduleListView.MultiSelect = false;
            this.scheduleListView.Name = "scheduleListView";
            this.scheduleListView.Size = new System.Drawing.Size(565, 785);
            this.scheduleListView.TabIndex = 0;
            this.scheduleListView.UseCompatibleStateImageBehavior = false;
            this.scheduleListView.View = System.Windows.Forms.View.Details;
            this.scheduleListView.MouseClick += new System.Windows.Forms.MouseEventHandler(this.scheduleListView_MouseClick);
            // 
            // columnHeader1
            // 
            this.columnHeader1.Text = "Schedule";
            this.columnHeader1.Width = 114;
            // 
            // columnHeader2
            // 
            this.columnHeader2.Text = "Created time";
            this.columnHeader2.Width = 265;
            // 
            // Department
            // 
            this.Department.Controls.Add(this.scheduleNOLabel1);
            this.Department.Controls.Add(this.label13);
            this.Department.Controls.Add(this.textBox5);
            this.Department.Controls.Add(this.outputDepartmentDataGridView);
            this.Department.Location = new System.Drawing.Point(4, 25);
            this.Department.Name = "Department";
            this.Department.Padding = new System.Windows.Forms.Padding(3);
            this.Department.Size = new System.Drawing.Size(1920, 791);
            this.Department.TabIndex = 0;
            this.Department.Text = "Department";
            this.Department.UseVisualStyleBackColor = true;
            // 
            // scheduleNOLabel1
            // 
            this.scheduleNOLabel1.AutoSize = true;
            this.scheduleNOLabel1.Font = new System.Drawing.Font("Microsoft Sans Serif", 7.8F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.scheduleNOLabel1.Location = new System.Drawing.Point(66, 20);
            this.scheduleNOLabel1.Name = "scheduleNOLabel1";
            this.scheduleNOLabel1.Size = new System.Drawing.Size(135, 16);
            this.scheduleNOLabel1.TabIndex = 6;
            this.scheduleNOLabel1.Text = "Schedule number: ";
            // 
            // label13
            // 
            this.label13.AutoSize = true;
            this.label13.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label13.Location = new System.Drawing.Point(1300, 20);
            this.label13.Name = "label13";
            this.label13.Size = new System.Drawing.Size(53, 25);
            this.label13.TabIndex = 5;
            this.label13.Text = "Note";
            // 
            // textBox5
            // 
            this.textBox5.Font = new System.Drawing.Font("Microsoft Sans Serif", 10.8F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.textBox5.Location = new System.Drawing.Point(1305, 48);
            this.textBox5.Multiline = true;
            this.textBox5.Name = "textBox5";
            this.textBox5.ReadOnly = true;
            this.textBox5.Size = new System.Drawing.Size(602, 737);
            this.textBox5.TabIndex = 1;
            this.textBox5.Text = resources.GetString("textBox5.Text");
            // 
            // outputDepartmentDataGridView
            // 
            this.outputDepartmentDataGridView.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.outputDepartmentDataGridView.Columns.AddRange(new System.Windows.Forms.DataGridViewColumn[] {
            this.dataGridViewTextBoxColumn7,
            this.dataGridViewTextBoxColumn8,
            this.Column31,
            this.Column18,
            this.dataGridViewTextBoxColumn9,
            this.dataGridViewTextBoxColumn10,
            this.dataGridViewTextBoxColumn11});
            this.outputDepartmentDataGridView.Location = new System.Drawing.Point(2, 48);
            this.outputDepartmentDataGridView.Name = "outputDepartmentDataGridView";
            this.outputDepartmentDataGridView.ReadOnly = true;
            this.outputDepartmentDataGridView.RowHeadersWidth = 51;
            this.outputDepartmentDataGridView.RowTemplate.Height = 24;
            this.outputDepartmentDataGridView.Size = new System.Drawing.Size(1297, 737);
            this.outputDepartmentDataGridView.TabIndex = 1;
            // 
            // dataGridViewTextBoxColumn7
            // 
            this.dataGridViewTextBoxColumn7.HeaderText = "Department ID";
            this.dataGridViewTextBoxColumn7.MinimumWidth = 6;
            this.dataGridViewTextBoxColumn7.Name = "dataGridViewTextBoxColumn7";
            this.dataGridViewTextBoxColumn7.ReadOnly = true;
            this.dataGridViewTextBoxColumn7.Width = 125;
            // 
            // dataGridViewTextBoxColumn8
            // 
            this.dataGridViewTextBoxColumn8.HeaderText = "Departmnt name";
            this.dataGridViewTextBoxColumn8.MinimumWidth = 6;
            this.dataGridViewTextBoxColumn8.Name = "dataGridViewTextBoxColumn8";
            this.dataGridViewTextBoxColumn8.ReadOnly = true;
            this.dataGridViewTextBoxColumn8.Width = 125;
            // 
            // Column31
            // 
            this.Column31.HeaderText = "Total course";
            this.Column31.MinimumWidth = 6;
            this.Column31.Name = "Column31";
            this.Column31.ReadOnly = true;
            this.Column31.Width = 125;
            // 
            // Column18
            // 
            this.Column18.HeaderText = "Total assigned course ";
            this.Column18.MinimumWidth = 6;
            this.Column18.Name = "Column18";
            this.Column18.ReadOnly = true;
            this.Column18.Width = 125;
            // 
            // dataGridViewTextBoxColumn9
            // 
            this.dataGridViewTextBoxColumn9.HeaderText = "Monday, Thursday Slot";
            this.dataGridViewTextBoxColumn9.MinimumWidth = 6;
            this.dataGridViewTextBoxColumn9.Name = "dataGridViewTextBoxColumn9";
            this.dataGridViewTextBoxColumn9.ReadOnly = true;
            this.dataGridViewTextBoxColumn9.Width = 125;
            // 
            // dataGridViewTextBoxColumn10
            // 
            this.dataGridViewTextBoxColumn10.HeaderText = "Tuesday, Friday slot";
            this.dataGridViewTextBoxColumn10.MinimumWidth = 6;
            this.dataGridViewTextBoxColumn10.Name = "dataGridViewTextBoxColumn10";
            this.dataGridViewTextBoxColumn10.ReadOnly = true;
            this.dataGridViewTextBoxColumn10.Width = 125;
            // 
            // dataGridViewTextBoxColumn11
            // 
            this.dataGridViewTextBoxColumn11.HeaderText = "Wednesday, Saturday slot";
            this.dataGridViewTextBoxColumn11.MinimumWidth = 6;
            this.dataGridViewTextBoxColumn11.Name = "dataGridViewTextBoxColumn11";
            this.dataGridViewTextBoxColumn11.ReadOnly = true;
            this.dataGridViewTextBoxColumn11.Width = 125;
            // 
            // Subject
            // 
            this.Subject.Controls.Add(this.scheduleNOLabel2);
            this.Subject.Controls.Add(this.label11);
            this.Subject.Controls.Add(this.textBox6);
            this.Subject.Controls.Add(this.outputSubjectCombobox);
            this.Subject.Controls.Add(this.label4);
            this.Subject.Controls.Add(this.outputSubjectDataGridView);
            this.Subject.Location = new System.Drawing.Point(4, 25);
            this.Subject.Name = "Subject";
            this.Subject.Padding = new System.Windows.Forms.Padding(3);
            this.Subject.Size = new System.Drawing.Size(1920, 791);
            this.Subject.TabIndex = 1;
            this.Subject.Text = "Subject";
            this.Subject.UseVisualStyleBackColor = true;
            // 
            // scheduleNOLabel2
            // 
            this.scheduleNOLabel2.AutoSize = true;
            this.scheduleNOLabel2.Font = new System.Drawing.Font("Microsoft Sans Serif", 7.8F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.scheduleNOLabel2.Location = new System.Drawing.Point(68, 25);
            this.scheduleNOLabel2.Name = "scheduleNOLabel2";
            this.scheduleNOLabel2.Size = new System.Drawing.Size(135, 16);
            this.scheduleNOLabel2.TabIndex = 8;
            this.scheduleNOLabel2.Text = "Schedule number: ";
            // 
            // label11
            // 
            this.label11.AutoSize = true;
            this.label11.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label11.Location = new System.Drawing.Point(1300, 26);
            this.label11.Name = "label11";
            this.label11.Size = new System.Drawing.Size(53, 25);
            this.label11.TabIndex = 5;
            this.label11.Text = "Note";
            // 
            // textBox6
            // 
            this.textBox6.Font = new System.Drawing.Font("Microsoft Sans Serif", 10.8F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.textBox6.Location = new System.Drawing.Point(1305, 54);
            this.textBox6.Multiline = true;
            this.textBox6.Name = "textBox6";
            this.textBox6.ReadOnly = true;
            this.textBox6.Size = new System.Drawing.Size(602, 731);
            this.textBox6.TabIndex = 2;
            this.textBox6.Text = "- Subject name column: Name of subject.\r\n\r\n- Total course column: Available cours" +
    "e amount of subject.\r\n\r\n- Total assigned course column: Assigned course amount f" +
    "or lecturer.\r\n";
            // 
            // outputSubjectCombobox
            // 
            this.outputSubjectCombobox.FormattingEnabled = true;
            this.outputSubjectCombobox.Location = new System.Drawing.Point(455, 22);
            this.outputSubjectCombobox.Name = "outputSubjectCombobox";
            this.outputSubjectCombobox.Size = new System.Drawing.Size(259, 24);
            this.outputSubjectCombobox.TabIndex = 2;
            this.outputSubjectCombobox.SelectedIndexChanged += new System.EventHandler(this.outputSubjectCombobox_SelectedIndexChanged);
            // 
            // label4
            // 
            this.label4.AutoSize = true;
            this.label4.Location = new System.Drawing.Point(372, 25);
            this.label4.Name = "label4";
            this.label4.Size = new System.Drawing.Size(77, 16);
            this.label4.TabIndex = 1;
            this.label4.Text = "Department";
            // 
            // outputSubjectDataGridView
            // 
            this.outputSubjectDataGridView.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.outputSubjectDataGridView.Columns.AddRange(new System.Windows.Forms.DataGridViewColumn[] {
            this.Column19,
            this.Column30,
            this.Column20,
            this.Column21});
            this.outputSubjectDataGridView.Location = new System.Drawing.Point(2, 54);
            this.outputSubjectDataGridView.Name = "outputSubjectDataGridView";
            this.outputSubjectDataGridView.ReadOnly = true;
            this.outputSubjectDataGridView.RowHeadersWidth = 51;
            this.outputSubjectDataGridView.RowTemplate.Height = 24;
            this.outputSubjectDataGridView.Size = new System.Drawing.Size(1297, 731);
            this.outputSubjectDataGridView.TabIndex = 0;
            // 
            // Column19
            // 
            this.Column19.HeaderText = "Subject ID";
            this.Column19.MinimumWidth = 6;
            this.Column19.Name = "Column19";
            this.Column19.ReadOnly = true;
            this.Column19.Width = 125;
            // 
            // Column30
            // 
            this.Column30.HeaderText = "Subject name";
            this.Column30.MinimumWidth = 6;
            this.Column30.Name = "Column30";
            this.Column30.ReadOnly = true;
            this.Column30.Width = 125;
            // 
            // Column20
            // 
            this.Column20.HeaderText = "Total course";
            this.Column20.MinimumWidth = 6;
            this.Column20.Name = "Column20";
            this.Column20.ReadOnly = true;
            this.Column20.Width = 125;
            // 
            // Column21
            // 
            this.Column21.HeaderText = "Total assigned course";
            this.Column21.MinimumWidth = 6;
            this.Column21.Name = "Column21";
            this.Column21.ReadOnly = true;
            this.Column21.Width = 125;
            // 
            // Lecturer
            // 
            this.Lecturer.Controls.Add(this.scheduleNOLabel3);
            this.Lecturer.Controls.Add(this.label19);
            this.Lecturer.Controls.Add(this.label9);
            this.Lecturer.Controls.Add(this.textBox7);
            this.Lecturer.Controls.Add(this.outputLecturerCombobox);
            this.Lecturer.Controls.Add(this.label5);
            this.Lecturer.Controls.Add(this.outputLecturerDataGridView);
            this.Lecturer.Location = new System.Drawing.Point(4, 25);
            this.Lecturer.Name = "Lecturer";
            this.Lecturer.Padding = new System.Windows.Forms.Padding(3);
            this.Lecturer.Size = new System.Drawing.Size(1920, 791);
            this.Lecturer.TabIndex = 2;
            this.Lecturer.Text = "Lecturer";
            this.Lecturer.UseVisualStyleBackColor = true;
            // 
            // scheduleNOLabel3
            // 
            this.scheduleNOLabel3.AutoSize = true;
            this.scheduleNOLabel3.Font = new System.Drawing.Font("Microsoft Sans Serif", 7.8F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.scheduleNOLabel3.Location = new System.Drawing.Point(67, 24);
            this.scheduleNOLabel3.Name = "scheduleNOLabel3";
            this.scheduleNOLabel3.Size = new System.Drawing.Size(135, 16);
            this.scheduleNOLabel3.TabIndex = 10;
            this.scheduleNOLabel3.Text = "Schedule number: ";
            // 
            // label19
            // 
            this.label19.AutoSize = true;
            this.label19.Font = new System.Drawing.Font("Microsoft Sans Serif", 9F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label19.Location = new System.Drawing.Point(751, 22);
            this.label19.Name = "label19";
            this.label19.Size = new System.Drawing.Size(280, 18);
            this.label19.TabIndex = 5;
            this.label19.Text = "*Click on row to view schedule of lecturer";
            // 
            // label9
            // 
            this.label9.AutoSize = true;
            this.label9.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label9.Location = new System.Drawing.Point(1301, 29);
            this.label9.Name = "label9";
            this.label9.Size = new System.Drawing.Size(53, 25);
            this.label9.TabIndex = 4;
            this.label9.Text = "Note";
            // 
            // textBox7
            // 
            this.textBox7.Font = new System.Drawing.Font("Microsoft Sans Serif", 10.8F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.textBox7.Location = new System.Drawing.Point(1306, 57);
            this.textBox7.Multiline = true;
            this.textBox7.Name = "textBox7";
            this.textBox7.ReadOnly = true;
            this.textBox7.Size = new System.Drawing.Size(602, 728);
            this.textBox7.TabIndex = 3;
            this.textBox7.Text = resources.GetString("textBox7.Text");
            // 
            // outputLecturerCombobox
            // 
            this.outputLecturerCombobox.FormattingEnabled = true;
            this.outputLecturerCombobox.Location = new System.Drawing.Point(463, 21);
            this.outputLecturerCombobox.Name = "outputLecturerCombobox";
            this.outputLecturerCombobox.Size = new System.Drawing.Size(233, 24);
            this.outputLecturerCombobox.TabIndex = 2;
            this.outputLecturerCombobox.SelectedIndexChanged += new System.EventHandler(this.outputLecturerCombobox_SelectedIndexChanged);
            // 
            // label5
            // 
            this.label5.AutoSize = true;
            this.label5.Location = new System.Drawing.Point(371, 24);
            this.label5.Name = "label5";
            this.label5.Size = new System.Drawing.Size(77, 16);
            this.label5.TabIndex = 1;
            this.label5.Text = "Department";
            // 
            // outputLecturerDataGridView
            // 
            this.outputLecturerDataGridView.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.outputLecturerDataGridView.Columns.AddRange(new System.Windows.Forms.DataGridViewColumn[] {
            this.Column22,
            this.Column32,
            this.Column23,
            this.Column24,
            this.Column25});
            this.outputLecturerDataGridView.Location = new System.Drawing.Point(3, 57);
            this.outputLecturerDataGridView.Name = "outputLecturerDataGridView";
            this.outputLecturerDataGridView.ReadOnly = true;
            this.outputLecturerDataGridView.RowHeadersWidth = 51;
            this.outputLecturerDataGridView.RowTemplate.Height = 24;
            this.outputLecturerDataGridView.SelectionMode = System.Windows.Forms.DataGridViewSelectionMode.FullRowSelect;
            this.outputLecturerDataGridView.Size = new System.Drawing.Size(1297, 728);
            this.outputLecturerDataGridView.TabIndex = 0;
            this.outputLecturerDataGridView.CellClick += new System.Windows.Forms.DataGridViewCellEventHandler(this.outputLecturerDataGridView_CellClick);
            // 
            // Column22
            // 
            this.Column22.HeaderText = "Lecturer ID";
            this.Column22.MinimumWidth = 6;
            this.Column22.Name = "Column22";
            this.Column22.ReadOnly = true;
            this.Column22.Width = 125;
            // 
            // Column32
            // 
            this.Column32.HeaderText = "Lecturer name";
            this.Column32.MinimumWidth = 6;
            this.Column32.Name = "Column32";
            this.Column32.ReadOnly = true;
            this.Column32.Width = 125;
            // 
            // Column23
            // 
            this.Column23.HeaderText = "Max course";
            this.Column23.MinimumWidth = 6;
            this.Column23.Name = "Column23";
            this.Column23.ReadOnly = true;
            this.Column23.Width = 125;
            // 
            // Column24
            // 
            this.Column24.HeaderText = "Priority level";
            this.Column24.MinimumWidth = 6;
            this.Column24.Name = "Column24";
            this.Column24.ReadOnly = true;
            this.Column24.Width = 125;
            // 
            // Column25
            // 
            this.Column25.HeaderText = "Total assigned course";
            this.Column25.MinimumWidth = 6;
            this.Column25.Name = "Column25";
            this.Column25.ReadOnly = true;
            this.Column25.Width = 125;
            // 
            // SlotType
            // 
            this.SlotType.Controls.Add(this.scheduleNOLabel4);
            this.SlotType.Controls.Add(this.label10);
            this.SlotType.Controls.Add(this.textBox8);
            this.SlotType.Controls.Add(this.outputSlotTypeDataGridView);
            this.SlotType.Location = new System.Drawing.Point(4, 25);
            this.SlotType.Name = "SlotType";
            this.SlotType.Padding = new System.Windows.Forms.Padding(3);
            this.SlotType.Size = new System.Drawing.Size(1920, 791);
            this.SlotType.TabIndex = 3;
            this.SlotType.Text = "Slot type";
            this.SlotType.UseVisualStyleBackColor = true;
            // 
            // scheduleNOLabel4
            // 
            this.scheduleNOLabel4.AutoSize = true;
            this.scheduleNOLabel4.Font = new System.Drawing.Font("Microsoft Sans Serif", 7.8F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.scheduleNOLabel4.Location = new System.Drawing.Point(66, 20);
            this.scheduleNOLabel4.Name = "scheduleNOLabel4";
            this.scheduleNOLabel4.Size = new System.Drawing.Size(135, 16);
            this.scheduleNOLabel4.TabIndex = 10;
            this.scheduleNOLabel4.Text = "Schedule number: ";
            // 
            // label10
            // 
            this.label10.AutoSize = true;
            this.label10.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label10.Location = new System.Drawing.Point(1305, 21);
            this.label10.Name = "label10";
            this.label10.Size = new System.Drawing.Size(53, 25);
            this.label10.TabIndex = 5;
            this.label10.Text = "Note";
            // 
            // textBox8
            // 
            this.textBox8.Font = new System.Drawing.Font("Microsoft Sans Serif", 10.8F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.textBox8.Location = new System.Drawing.Point(1305, 49);
            this.textBox8.Multiline = true;
            this.textBox8.Name = "textBox8";
            this.textBox8.ReadOnly = true;
            this.textBox8.Size = new System.Drawing.Size(602, 736);
            this.textBox8.TabIndex = 3;
            this.textBox8.Text = resources.GetString("textBox8.Text");
            // 
            // outputSlotTypeDataGridView
            // 
            this.outputSlotTypeDataGridView.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.outputSlotTypeDataGridView.Columns.AddRange(new System.Windows.Forms.DataGridViewColumn[] {
            this.Column33,
            this.Column34,
            this.Column27,
            this.Column36,
            this.Column28,
            this.Column29});
            this.outputSlotTypeDataGridView.Location = new System.Drawing.Point(2, 49);
            this.outputSlotTypeDataGridView.Name = "outputSlotTypeDataGridView";
            this.outputSlotTypeDataGridView.ReadOnly = true;
            this.outputSlotTypeDataGridView.RowHeadersWidth = 51;
            this.outputSlotTypeDataGridView.RowTemplate.Height = 24;
            this.outputSlotTypeDataGridView.Size = new System.Drawing.Size(1297, 736);
            this.outputSlotTypeDataGridView.TabIndex = 0;
            // 
            // Column33
            // 
            this.Column33.HeaderText = "Slot number";
            this.Column33.MinimumWidth = 6;
            this.Column33.Name = "Column33";
            this.Column33.ReadOnly = true;
            this.Column33.Width = 125;
            // 
            // Column34
            // 
            this.Column34.HeaderText = "Time start";
            this.Column34.MinimumWidth = 6;
            this.Column34.Name = "Column34";
            this.Column34.ReadOnly = true;
            this.Column34.Width = 125;
            // 
            // Column27
            // 
            this.Column27.HeaderText = "Time end";
            this.Column27.MinimumWidth = 6;
            this.Column27.Name = "Column27";
            this.Column27.ReadOnly = true;
            this.Column27.Width = 125;
            // 
            // Column36
            // 
            this.Column36.HeaderText = "Date of week";
            this.Column36.MinimumWidth = 6;
            this.Column36.Name = "Column36";
            this.Column36.ReadOnly = true;
            this.Column36.Width = 125;
            // 
            // Column28
            // 
            this.Column28.HeaderText = "Max course slot";
            this.Column28.MinimumWidth = 6;
            this.Column28.Name = "Column28";
            this.Column28.ReadOnly = true;
            this.Column28.Width = 125;
            // 
            // Column29
            // 
            this.Column29.HeaderText = "Total assigned course";
            this.Column29.MinimumWidth = 6;
            this.Column29.Name = "Column29";
            this.Column29.ReadOnly = true;
            this.Column29.Width = 125;
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(43, 28);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(65, 16);
            this.label1.TabIndex = 6;
            this.label1.Text = "Semester";
            // 
            // fromDatelabel
            // 
            this.fromDatelabel.AutoSize = true;
            this.fromDatelabel.Location = new System.Drawing.Point(43, 70);
            this.fromDatelabel.Name = "fromDatelabel";
            this.fromDatelabel.Size = new System.Drawing.Size(71, 16);
            this.fromDatelabel.TabIndex = 7;
            this.fromDatelabel.Text = "From date:";
            // 
            // toDatelabel
            // 
            this.toDatelabel.AutoSize = true;
            this.toDatelabel.Location = new System.Drawing.Point(241, 70);
            this.toDatelabel.Name = "toDatelabel";
            this.toDatelabel.Size = new System.Drawing.Size(60, 16);
            this.toDatelabel.TabIndex = 8;
            this.toDatelabel.Text = "To date: ";
            // 
            // SchedulerForm
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.AutoSize = true;
            this.ClientSize = new System.Drawing.Size(1903, 979);
            this.Controls.Add(this.toDatelabel);
            this.Controls.Add(this.fromDatelabel);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.tabControl1);
            this.Controls.Add(this.loadDataButton);
            this.Controls.Add(this.semesterCombobox);
            this.Controls.Add(this.runButton);
            this.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
            this.Name = "SchedulerForm";
            this.StartPosition = System.Windows.Forms.FormStartPosition.Manual;
            this.Text = "Scheduler";
            this.WindowState = System.Windows.Forms.FormWindowState.Maximized;
            this.Shown += new System.EventHandler(this.SchedulerForm_Shown);
            this.tabControl2.ResumeLayout(false);
            this.departmentTabPage.ResumeLayout(false);
            this.departmentTabPage.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)(this.departmentDataGridView)).EndInit();
            this.subjectTabPage.ResumeLayout(false);
            this.subjectTabPage.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)(this.subjectDataGridView)).EndInit();
            this.lecturerTabPage.ResumeLayout(false);
            this.lecturerTabPage.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)(this.lecturerDataGridView)).EndInit();
            this.slotTypeTabPage.ResumeLayout(false);
            this.slotTypeTabPage.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)(this.slotTypeDataGridView)).EndInit();
            this.tabPage1.ResumeLayout(false);
            this.tabPage1.PerformLayout();
            this.panel1.ResumeLayout(false);
            this.panel1.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)(this.favoriteTrackBar)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.priorityCourseTrackBar)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.feedbackTrackBar)).EndInit();
            this.tabControl1.ResumeLayout(false);
            this.InputTabPage.ResumeLayout(false);
            this.outputTabPage.ResumeLayout(false);
            this.tabControl3.ResumeLayout(false);
            this.tabPage2.ResumeLayout(false);
            this.tabPage2.PerformLayout();
            this.panel2.ResumeLayout(false);
            this.panel2.PerformLayout();
            this.Department.ResumeLayout(false);
            this.Department.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)(this.outputDepartmentDataGridView)).EndInit();
            this.Subject.ResumeLayout(false);
            this.Subject.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)(this.outputSubjectDataGridView)).EndInit();
            this.Lecturer.ResumeLayout(false);
            this.Lecturer.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)(this.outputLecturerDataGridView)).EndInit();
            this.SlotType.ResumeLayout(false);
            this.SlotType.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)(this.outputSlotTypeDataGridView)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion
        private System.Windows.Forms.Button runButton;
        private System.Windows.Forms.TabControl tabControl2;
        private System.Windows.Forms.TabPage departmentTabPage;
        private System.Windows.Forms.TabPage subjectTabPage;
        private System.Windows.Forms.TabPage lecturerTabPage;
        public System.Windows.Forms.DataGridView departmentDataGridView;
        private System.Windows.Forms.Button loadDataButton;
        public System.Windows.Forms.DataGridView subjectDataGridView;
        private System.Windows.Forms.TabControl tabControl1;
        private System.Windows.Forms.TabPage InputTabPage;
        private System.Windows.Forms.TabPage outputTabPage;
        public System.Windows.Forms.DataGridView lecturerDataGridView;
        private System.Windows.Forms.TabPage slotTypeTabPage;
        private System.Windows.Forms.DataGridView slotTypeDataGridView;
        private System.Windows.Forms.DataGridView outputDepartmentDataGridView;
        public System.Windows.Forms.ComboBox semesterCombobox;
        private System.Windows.Forms.Button button1;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.TabControl tabControl3;
        public System.Windows.Forms.TabPage Department;
        public System.Windows.Forms.TabPage Subject;
        private System.Windows.Forms.ComboBox subjectCombobox;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.ComboBox lecturerCombobox;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.DataGridViewTextBoxColumn dataGridViewTextBoxColumn1;
        private System.Windows.Forms.DataGridViewTextBoxColumn dataGridViewTextBoxColumn2;
        private System.Windows.Forms.DataGridViewTextBoxColumn dataGridViewTextBoxColumn3;
        private System.Windows.Forms.DataGridViewTextBoxColumn Column16;
        private System.Windows.Forms.TextBox textBox1;
        private System.Windows.Forms.TextBox textBox2;
        private System.Windows.Forms.TextBox textBox3;
        private System.Windows.Forms.DataGridViewTextBoxColumn dataGridViewTextBoxColumn7;
        private System.Windows.Forms.DataGridViewTextBoxColumn dataGridViewTextBoxColumn8;
        private System.Windows.Forms.DataGridViewTextBoxColumn Column31;
        private System.Windows.Forms.DataGridViewTextBoxColumn Column18;
        private System.Windows.Forms.DataGridViewTextBoxColumn dataGridViewTextBoxColumn9;
        private System.Windows.Forms.DataGridViewTextBoxColumn dataGridViewTextBoxColumn10;
        private System.Windows.Forms.DataGridViewTextBoxColumn dataGridViewTextBoxColumn11;
        private System.Windows.Forms.ComboBox outputSubjectCombobox;
        private System.Windows.Forms.Label label4;
        private System.Windows.Forms.DataGridView outputSubjectDataGridView;
        private System.Windows.Forms.DataGridViewTextBoxColumn Column19;
        private System.Windows.Forms.DataGridViewTextBoxColumn Column30;
        private System.Windows.Forms.DataGridViewTextBoxColumn Column20;
        private System.Windows.Forms.DataGridViewTextBoxColumn Column21;
        private System.Windows.Forms.TabPage Lecturer;
        private System.Windows.Forms.DataGridView outputLecturerDataGridView;
        private System.Windows.Forms.TabPage SlotType;
        private System.Windows.Forms.DataGridView outputSlotTypeDataGridView;
        private System.Windows.Forms.TextBox textBox5;
        private System.Windows.Forms.TextBox textBox6;
        private System.Windows.Forms.TextBox textBox7;
        private System.Windows.Forms.ComboBox outputLecturerCombobox;
        private System.Windows.Forms.Label label5;
        private System.Windows.Forms.DataGridViewTextBoxColumn Column22;
        private System.Windows.Forms.DataGridViewTextBoxColumn Column32;
        private System.Windows.Forms.DataGridViewTextBoxColumn Column23;
        private System.Windows.Forms.DataGridViewTextBoxColumn Column24;
        private System.Windows.Forms.DataGridViewTextBoxColumn Column25;
        private System.Windows.Forms.TextBox textBox8;
        private System.Windows.Forms.DataGridViewTextBoxColumn Column1;
        private System.Windows.Forms.DataGridViewTextBoxColumn Column2;
        private System.Windows.Forms.DataGridViewTextBoxColumn Column3;
        private System.Windows.Forms.DataGridViewTextBoxColumn Column5;
        private System.Windows.Forms.DataGridViewTextBoxColumn Column4;
        private System.Windows.Forms.TabPage tabPage1;
        private System.Windows.Forms.TrackBar priorityCourseTrackBar;
        private System.Windows.Forms.TrackBar favoriteTrackBar;
        private System.Windows.Forms.TrackBar feedbackTrackBar;
        private System.Windows.Forms.Label favoriteLabel;
        private System.Windows.Forms.Label feedbackLabel;
        private System.Windows.Forms.Label priorityCourseLabel;
        private System.Windows.Forms.Label label8;
        private System.Windows.Forms.Label label7;
        private System.Windows.Forms.Label label6;
        private System.Windows.Forms.Label label12;
        private System.Windows.Forms.Label warningLabel;
        private System.Windows.Forms.TextBox textBox4;
        private System.Windows.Forms.Panel panel1;
        private System.Windows.Forms.Label fromDatelabel;
        private System.Windows.Forms.Label toDatelabel;
        private System.Windows.Forms.Label label14;
        private System.Windows.Forms.Label label15;
        private System.Windows.Forms.Label label16;
        private System.Windows.Forms.Label label17;
        private System.Windows.Forms.Label label13;
        private System.Windows.Forms.Label label11;
        private System.Windows.Forms.Label label9;
        private System.Windows.Forms.Label label10;
        private System.Windows.Forms.Label label18;
        private System.Windows.Forms.TextBox textBox9;
        private System.Windows.Forms.Label label19;
        private System.Windows.Forms.TabPage tabPage2;
        private System.Windows.Forms.ListView scheduleListView;
        private System.Windows.Forms.ColumnHeader columnHeader1;
        private System.Windows.Forms.ColumnHeader columnHeader2;
        private System.Windows.Forms.DataGridViewTextBoxColumn Column9;
        private System.Windows.Forms.DataGridViewTextBoxColumn Column10;
        private System.Windows.Forms.DataGridViewTextBoxColumn Column11;
        private System.Windows.Forms.DataGridViewTextBoxColumn Column35;
        private System.Windows.Forms.DataGridViewTextBoxColumn Column17;
        private System.Windows.Forms.DataGridViewTextBoxColumn Column12;
        private System.Windows.Forms.DataGridViewTextBoxColumn Column33;
        private System.Windows.Forms.DataGridViewTextBoxColumn Column34;
        private System.Windows.Forms.DataGridViewTextBoxColumn Column27;
        private System.Windows.Forms.DataGridViewTextBoxColumn Column36;
        private System.Windows.Forms.DataGridViewTextBoxColumn Column28;
        private System.Windows.Forms.DataGridViewTextBoxColumn Column29;
        private System.Windows.Forms.Label label25;
        private System.Windows.Forms.Label label24;
        private System.Windows.Forms.Label label23;
        private System.Windows.Forms.Label label22;
        private System.Windows.Forms.Label label21;
        private System.Windows.Forms.Label label20;
        private System.Windows.Forms.Panel panel2;
        private System.Windows.Forms.TextBox descriptionTextBox;
        private System.Windows.Forms.Label totalCourseLabel;
        private System.Windows.Forms.Label runTimeLabel;
        private System.Windows.Forms.Label createTimeLabel;
        private System.Windows.Forms.Label scheduleNOLabel;
        private System.Windows.Forms.Label scheduleNOLabel1;
        private System.Windows.Forms.Label scheduleNOLabel2;
        private System.Windows.Forms.Label scheduleNOLabel3;
        private System.Windows.Forms.Label scheduleNOLabel4;
        private System.Windows.Forms.DataGridViewTextBoxColumn dataGridViewTextBoxColumn4;
        private System.Windows.Forms.DataGridViewTextBoxColumn dataGridViewTextBoxColumn5;
        private System.Windows.Forms.DataGridViewTextBoxColumn Column8;
        private System.Windows.Forms.DataGridViewTextBoxColumn Column13;
        private System.Windows.Forms.DataGridViewTextBoxColumn Column14;
        private System.Windows.Forms.DataGridViewTextBoxColumn Column15;
        private System.Windows.Forms.DataGridViewTextBoxColumn Column6;
        private System.Windows.Forms.DataGridViewTextBoxColumn Column7;
    }
}


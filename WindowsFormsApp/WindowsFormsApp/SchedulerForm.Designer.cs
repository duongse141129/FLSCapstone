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
            this.runButton = new System.Windows.Forms.Button();
            this.tabControl2 = new System.Windows.Forms.TabControl();
            this.departmentTabPage = new System.Windows.Forms.TabPage();
            this.panel1 = new System.Windows.Forms.Panel();
            this.departmentDataGridView = new System.Windows.Forms.DataGridView();
            this.Column1 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.Column2 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.Column3 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.Column4 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.Column5 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.subjectTabPage = new System.Windows.Forms.TabPage();
            this.panel2 = new System.Windows.Forms.Panel();
            this.subjectDataGridView = new System.Windows.Forms.DataGridView();
            this.dataGridViewTextBoxColumn1 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.dataGridViewTextBoxColumn2 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.dataGridViewTextBoxColumn3 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.Column16 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.lecturerTabPage = new System.Windows.Forms.TabPage();
            this.panel3 = new System.Windows.Forms.Panel();
            this.lecturerDataGridView = new System.Windows.Forms.DataGridView();
            this.dataGridViewTextBoxColumn4 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.dataGridViewTextBoxColumn5 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.dataGridViewTextBoxColumn6 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.Column13 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.Column14 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.Column15 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.Column6 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.Column7 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.slotTypeTabPage = new System.Windows.Forms.TabPage();
            this.panel4 = new System.Windows.Forms.Panel();
            this.slotTypeDataGridView = new System.Windows.Forms.DataGridView();
            this.Column8 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.Column9 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.Column10 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.Column11 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.Column17 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.Column12 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.semesterCombobox = new System.Windows.Forms.ComboBox();
            this.loadDataButton = new System.Windows.Forms.Button();
            this.tabControl1 = new System.Windows.Forms.TabControl();
            this.InputTabPage = new System.Windows.Forms.TabPage();
            this.outputTabPage = new System.Windows.Forms.TabPage();
            this.outputDataGridView = new System.Windows.Forms.DataGridView();
            this.dataGridViewTextBoxColumn7 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.dataGridViewTextBoxColumn8 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.dataGridViewTextBoxColumn9 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.dataGridViewTextBoxColumn10 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.dataGridViewTextBoxColumn11 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.colorDialog1 = new System.Windows.Forms.ColorDialog();
            this.tabControl2.SuspendLayout();
            this.departmentTabPage.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.departmentDataGridView)).BeginInit();
            this.subjectTabPage.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.subjectDataGridView)).BeginInit();
            this.lecturerTabPage.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.lecturerDataGridView)).BeginInit();
            this.slotTypeTabPage.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.slotTypeDataGridView)).BeginInit();
            this.tabControl1.SuspendLayout();
            this.InputTabPage.SuspendLayout();
            this.outputTabPage.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.outputDataGridView)).BeginInit();
            this.SuspendLayout();
            // 
            // runButton
            // 
            this.runButton.Location = new System.Drawing.Point(573, 23);
            this.runButton.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
            this.runButton.Name = "runButton";
            this.runButton.Size = new System.Drawing.Size(86, 26);
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
            this.departmentTabPage.Controls.Add(this.panel1);
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
            // panel1
            // 
            this.panel1.Location = new System.Drawing.Point(1159, 0);
            this.panel1.Name = "panel1";
            this.panel1.Size = new System.Drawing.Size(681, 779);
            this.panel1.TabIndex = 1;
            // 
            // departmentDataGridView
            // 
            this.departmentDataGridView.AutoSizeColumnsMode = System.Windows.Forms.DataGridViewAutoSizeColumnsMode.ColumnHeader;
            this.departmentDataGridView.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.departmentDataGridView.Columns.AddRange(new System.Windows.Forms.DataGridViewColumn[] {
            this.Column1,
            this.Column2,
            this.Column3,
            this.Column4,
            this.Column5});
            this.departmentDataGridView.Location = new System.Drawing.Point(3, 0);
            this.departmentDataGridView.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
            this.departmentDataGridView.MultiSelect = false;
            this.departmentDataGridView.Name = "departmentDataGridView";
            this.departmentDataGridView.RowHeadersWidthSizeMode = System.Windows.Forms.DataGridViewRowHeadersWidthSizeMode.AutoSizeToDisplayedHeaders;
            this.departmentDataGridView.RowTemplate.Height = 24;
            this.departmentDataGridView.Size = new System.Drawing.Size(949, 778);
            this.departmentDataGridView.TabIndex = 0;
            // 
            // Column1
            // 
            this.Column1.AutoSizeMode = System.Windows.Forms.DataGridViewAutoSizeColumnMode.None;
            this.Column1.Frozen = true;
            this.Column1.HeaderText = "Department ID";
            this.Column1.MinimumWidth = 6;
            this.Column1.Name = "Column1";
            this.Column1.Width = 130;
            // 
            // Column2
            // 
            this.Column2.AutoSizeMode = System.Windows.Forms.DataGridViewAutoSizeColumnMode.None;
            this.Column2.Frozen = true;
            this.Column2.HeaderText = "Department name";
            this.Column2.MinimumWidth = 6;
            this.Column2.Name = "Column2";
            this.Column2.Width = 145;
            // 
            // Column3
            // 
            this.Column3.AutoSizeMode = System.Windows.Forms.DataGridViewAutoSizeColumnMode.None;
            this.Column3.HeaderText = "Subject amount";
            this.Column3.MinimumWidth = 6;
            this.Column3.Name = "Column3";
            this.Column3.Width = 130;
            // 
            // Column4
            // 
            this.Column4.AutoSizeMode = System.Windows.Forms.DataGridViewAutoSizeColumnMode.None;
            this.Column4.HeaderText = "Lecturer amount";
            this.Column4.MinimumWidth = 6;
            this.Column4.Name = "Column4";
            this.Column4.Width = 130;
            // 
            // Column5
            // 
            this.Column5.AutoSizeMode = System.Windows.Forms.DataGridViewAutoSizeColumnMode.None;
            this.Column5.HeaderText = "Course amount";
            this.Column5.MinimumWidth = 6;
            this.Column5.Name = "Column5";
            this.Column5.Width = 130;
            // 
            // subjectTabPage
            // 
            this.subjectTabPage.Controls.Add(this.panel2);
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
            // panel2
            // 
            this.panel2.Location = new System.Drawing.Point(1144, 3);
            this.panel2.Name = "panel2";
            this.panel2.Size = new System.Drawing.Size(681, 777);
            this.panel2.TabIndex = 2;
            // 
            // subjectDataGridView
            // 
            this.subjectDataGridView.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.subjectDataGridView.Columns.AddRange(new System.Windows.Forms.DataGridViewColumn[] {
            this.dataGridViewTextBoxColumn1,
            this.dataGridViewTextBoxColumn2,
            this.dataGridViewTextBoxColumn3,
            this.Column16});
            this.subjectDataGridView.Location = new System.Drawing.Point(3, 0);
            this.subjectDataGridView.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
            this.subjectDataGridView.MultiSelect = false;
            this.subjectDataGridView.Name = "subjectDataGridView";
            this.subjectDataGridView.RowHeadersWidth = 51;
            this.subjectDataGridView.RowTemplate.Height = 24;
            this.subjectDataGridView.Size = new System.Drawing.Size(839, 780);
            this.subjectDataGridView.TabIndex = 1;
            // 
            // dataGridViewTextBoxColumn1
            // 
            this.dataGridViewTextBoxColumn1.AutoSizeMode = System.Windows.Forms.DataGridViewAutoSizeColumnMode.None;
            this.dataGridViewTextBoxColumn1.HeaderText = "Subject ID";
            this.dataGridViewTextBoxColumn1.MinimumWidth = 6;
            this.dataGridViewTextBoxColumn1.Name = "dataGridViewTextBoxColumn1";
            this.dataGridViewTextBoxColumn1.Width = 110;
            // 
            // dataGridViewTextBoxColumn2
            // 
            this.dataGridViewTextBoxColumn2.AutoSizeMode = System.Windows.Forms.DataGridViewAutoSizeColumnMode.None;
            this.dataGridViewTextBoxColumn2.HeaderText = "Subject name";
            this.dataGridViewTextBoxColumn2.MinimumWidth = 6;
            this.dataGridViewTextBoxColumn2.Name = "dataGridViewTextBoxColumn2";
            this.dataGridViewTextBoxColumn2.Width = 120;
            // 
            // dataGridViewTextBoxColumn3
            // 
            this.dataGridViewTextBoxColumn3.AutoSizeMode = System.Windows.Forms.DataGridViewAutoSizeColumnMode.None;
            this.dataGridViewTextBoxColumn3.HeaderText = "Course amount";
            this.dataGridViewTextBoxColumn3.MinimumWidth = 6;
            this.dataGridViewTextBoxColumn3.Name = "dataGridViewTextBoxColumn3";
            this.dataGridViewTextBoxColumn3.Width = 120;
            // 
            // Column16
            // 
            this.Column16.HeaderText = "Department name";
            this.Column16.MinimumWidth = 6;
            this.Column16.Name = "Column16";
            this.Column16.Width = 125;
            // 
            // lecturerTabPage
            // 
            this.lecturerTabPage.Controls.Add(this.panel3);
            this.lecturerTabPage.Controls.Add(this.lecturerDataGridView);
            this.lecturerTabPage.Location = new System.Drawing.Point(4, 25);
            this.lecturerTabPage.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
            this.lecturerTabPage.Name = "lecturerTabPage";
            this.lecturerTabPage.Size = new System.Drawing.Size(1920, 789);
            this.lecturerTabPage.TabIndex = 2;
            this.lecturerTabPage.Text = "Lecturer";
            this.lecturerTabPage.UseVisualStyleBackColor = true;
            // 
            // panel3
            // 
            this.panel3.Location = new System.Drawing.Point(1440, 0);
            this.panel3.Name = "panel3";
            this.panel3.Size = new System.Drawing.Size(451, 780);
            this.panel3.TabIndex = 3;
            // 
            // lecturerDataGridView
            // 
            this.lecturerDataGridView.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.lecturerDataGridView.Columns.AddRange(new System.Windows.Forms.DataGridViewColumn[] {
            this.dataGridViewTextBoxColumn4,
            this.dataGridViewTextBoxColumn5,
            this.dataGridViewTextBoxColumn6,
            this.Column13,
            this.Column14,
            this.Column15,
            this.Column6,
            this.Column7});
            this.lecturerDataGridView.Location = new System.Drawing.Point(3, 0);
            this.lecturerDataGridView.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
            this.lecturerDataGridView.MultiSelect = false;
            this.lecturerDataGridView.Name = "lecturerDataGridView";
            this.lecturerDataGridView.RowHeadersWidth = 51;
            this.lecturerDataGridView.RowTemplate.Height = 24;
            this.lecturerDataGridView.Size = new System.Drawing.Size(1420, 780);
            this.lecturerDataGridView.TabIndex = 2;
            // 
            // dataGridViewTextBoxColumn4
            // 
            this.dataGridViewTextBoxColumn4.AutoSizeMode = System.Windows.Forms.DataGridViewAutoSizeColumnMode.None;
            this.dataGridViewTextBoxColumn4.HeaderText = "Lecturer ID";
            this.dataGridViewTextBoxColumn4.MinimumWidth = 6;
            this.dataGridViewTextBoxColumn4.Name = "dataGridViewTextBoxColumn4";
            this.dataGridViewTextBoxColumn4.Width = 110;
            // 
            // dataGridViewTextBoxColumn5
            // 
            this.dataGridViewTextBoxColumn5.AutoSizeMode = System.Windows.Forms.DataGridViewAutoSizeColumnMode.None;
            this.dataGridViewTextBoxColumn5.HeaderText = "Lecturer name";
            this.dataGridViewTextBoxColumn5.MinimumWidth = 6;
            this.dataGridViewTextBoxColumn5.Name = "dataGridViewTextBoxColumn5";
            this.dataGridViewTextBoxColumn5.Width = 130;
            // 
            // dataGridViewTextBoxColumn6
            // 
            this.dataGridViewTextBoxColumn6.AutoSizeMode = System.Windows.Forms.DataGridViewAutoSizeColumnMode.None;
            this.dataGridViewTextBoxColumn6.HeaderText = "Department name";
            this.dataGridViewTextBoxColumn6.MinimumWidth = 6;
            this.dataGridViewTextBoxColumn6.Name = "dataGridViewTextBoxColumn6";
            this.dataGridViewTextBoxColumn6.Width = 130;
            // 
            // Column13
            // 
            this.Column13.HeaderText = "Min course";
            this.Column13.MinimumWidth = 6;
            this.Column13.Name = "Column13";
            this.Column13.Width = 125;
            // 
            // Column14
            // 
            this.Column14.HeaderText = "Max course";
            this.Column14.MinimumWidth = 6;
            this.Column14.Name = "Column14";
            this.Column14.Width = 125;
            // 
            // Column15
            // 
            this.Column15.HeaderText = "Priority lecturer";
            this.Column15.MinimumWidth = 6;
            this.Column15.Name = "Column15";
            this.Column15.Width = 125;
            // 
            // Column6
            // 
            this.Column6.HeaderText = "Priority course amount";
            this.Column6.MinimumWidth = 6;
            this.Column6.Name = "Column6";
            this.Column6.Width = 130;
            // 
            // Column7
            // 
            this.Column7.HeaderText = "Assign course amount";
            this.Column7.MinimumWidth = 6;
            this.Column7.Name = "Column7";
            this.Column7.Width = 130;
            // 
            // slotTypeTabPage
            // 
            this.slotTypeTabPage.Controls.Add(this.panel4);
            this.slotTypeTabPage.Controls.Add(this.slotTypeDataGridView);
            this.slotTypeTabPage.Location = new System.Drawing.Point(4, 25);
            this.slotTypeTabPage.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
            this.slotTypeTabPage.Name = "slotTypeTabPage";
            this.slotTypeTabPage.Size = new System.Drawing.Size(1920, 789);
            this.slotTypeTabPage.TabIndex = 3;
            this.slotTypeTabPage.Text = "Slot type";
            this.slotTypeTabPage.UseVisualStyleBackColor = true;
            // 
            // panel4
            // 
            this.panel4.Location = new System.Drawing.Point(1179, 2);
            this.panel4.Name = "panel4";
            this.panel4.Size = new System.Drawing.Size(681, 783);
            this.panel4.TabIndex = 2;
            // 
            // slotTypeDataGridView
            // 
            this.slotTypeDataGridView.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.slotTypeDataGridView.Columns.AddRange(new System.Windows.Forms.DataGridViewColumn[] {
            this.Column8,
            this.Column9,
            this.Column10,
            this.Column11,
            this.Column17,
            this.Column12});
            this.slotTypeDataGridView.Location = new System.Drawing.Point(3, 0);
            this.slotTypeDataGridView.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
            this.slotTypeDataGridView.Name = "slotTypeDataGridView";
            this.slotTypeDataGridView.RowHeadersWidth = 51;
            this.slotTypeDataGridView.RowTemplate.Height = 24;
            this.slotTypeDataGridView.Size = new System.Drawing.Size(983, 784);
            this.slotTypeDataGridView.TabIndex = 0;
            // 
            // Column8
            // 
            this.Column8.HeaderText = "Slot type ID";
            this.Column8.MinimumWidth = 6;
            this.Column8.Name = "Column8";
            this.Column8.Width = 110;
            // 
            // Column9
            // 
            this.Column9.HeaderText = "Slot number";
            this.Column9.MinimumWidth = 6;
            this.Column9.Name = "Column9";
            this.Column9.Width = 110;
            // 
            // Column10
            // 
            this.Column10.HeaderText = "Time start";
            this.Column10.MinimumWidth = 6;
            this.Column10.Name = "Column10";
            this.Column10.Width = 115;
            // 
            // Column11
            // 
            this.Column11.HeaderText = "Time end";
            this.Column11.MinimumWidth = 6;
            this.Column11.Name = "Column11";
            this.Column11.Width = 115;
            // 
            // Column17
            // 
            this.Column17.HeaderText = "Max course";
            this.Column17.MinimumWidth = 6;
            this.Column17.Name = "Column17";
            this.Column17.Width = 110;
            // 
            // Column12
            // 
            this.Column12.HeaderText = "Assign amount";
            this.Column12.MinimumWidth = 6;
            this.Column12.Name = "Column12";
            this.Column12.Width = 110;
            // 
            // semesterCombobox
            // 
            this.semesterCombobox.FormattingEnabled = true;
            this.semesterCombobox.Location = new System.Drawing.Point(46, 23);
            this.semesterCombobox.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
            this.semesterCombobox.Name = "semesterCombobox";
            this.semesterCombobox.Size = new System.Drawing.Size(187, 24);
            this.semesterCombobox.TabIndex = 3;
            // 
            // loadDataButton
            // 
            this.loadDataButton.Location = new System.Drawing.Point(264, 23);
            this.loadDataButton.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
            this.loadDataButton.Name = "loadDataButton";
            this.loadDataButton.Size = new System.Drawing.Size(80, 26);
            this.loadDataButton.TabIndex = 4;
            this.loadDataButton.Text = "Load data";
            this.loadDataButton.UseVisualStyleBackColor = true;
            this.loadDataButton.Click += new System.EventHandler(this.loadDataButton_Click);
            // 
            // tabControl1
            // 
            this.tabControl1.Controls.Add(this.InputTabPage);
            this.tabControl1.Controls.Add(this.outputTabPage);
            this.tabControl1.Location = new System.Drawing.Point(46, 82);
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
            this.outputTabPage.Controls.Add(this.outputDataGridView);
            this.outputTabPage.Location = new System.Drawing.Point(4, 25);
            this.outputTabPage.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
            this.outputTabPage.Name = "outputTabPage";
            this.outputTabPage.Padding = new System.Windows.Forms.Padding(3, 2, 3, 2);
            this.outputTabPage.Size = new System.Drawing.Size(1925, 820);
            this.outputTabPage.TabIndex = 1;
            this.outputTabPage.Text = "Output";
            this.outputTabPage.UseVisualStyleBackColor = true;
            // 
            // outputDataGridView
            // 
            this.outputDataGridView.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.outputDataGridView.Columns.AddRange(new System.Windows.Forms.DataGridViewColumn[] {
            this.dataGridViewTextBoxColumn7,
            this.dataGridViewTextBoxColumn8,
            this.dataGridViewTextBoxColumn9,
            this.dataGridViewTextBoxColumn10,
            this.dataGridViewTextBoxColumn11});
            this.outputDataGridView.Location = new System.Drawing.Point(3, 5);
            this.outputDataGridView.Name = "outputDataGridView";
            this.outputDataGridView.RowHeadersWidth = 51;
            this.outputDataGridView.RowTemplate.Height = 24;
            this.outputDataGridView.Size = new System.Drawing.Size(941, 810);
            this.outputDataGridView.TabIndex = 1;
            // 
            // dataGridViewTextBoxColumn7
            // 
            this.dataGridViewTextBoxColumn7.HeaderText = "Department ID";
            this.dataGridViewTextBoxColumn7.MinimumWidth = 6;
            this.dataGridViewTextBoxColumn7.Name = "dataGridViewTextBoxColumn7";
            this.dataGridViewTextBoxColumn7.Width = 125;
            // 
            // dataGridViewTextBoxColumn8
            // 
            this.dataGridViewTextBoxColumn8.HeaderText = "Departmnt name";
            this.dataGridViewTextBoxColumn8.MinimumWidth = 6;
            this.dataGridViewTextBoxColumn8.Name = "dataGridViewTextBoxColumn8";
            this.dataGridViewTextBoxColumn8.Width = 125;
            // 
            // dataGridViewTextBoxColumn9
            // 
            this.dataGridViewTextBoxColumn9.HeaderText = "Monday, Thursday Slot";
            this.dataGridViewTextBoxColumn9.MinimumWidth = 6;
            this.dataGridViewTextBoxColumn9.Name = "dataGridViewTextBoxColumn9";
            this.dataGridViewTextBoxColumn9.Width = 125;
            // 
            // dataGridViewTextBoxColumn10
            // 
            this.dataGridViewTextBoxColumn10.HeaderText = "Tuesday, Friday slot";
            this.dataGridViewTextBoxColumn10.MinimumWidth = 6;
            this.dataGridViewTextBoxColumn10.Name = "dataGridViewTextBoxColumn10";
            this.dataGridViewTextBoxColumn10.Width = 125;
            // 
            // dataGridViewTextBoxColumn11
            // 
            this.dataGridViewTextBoxColumn11.HeaderText = "Wednesday, Saturday slot";
            this.dataGridViewTextBoxColumn11.MinimumWidth = 6;
            this.dataGridViewTextBoxColumn11.Name = "dataGridViewTextBoxColumn11";
            this.dataGridViewTextBoxColumn11.Width = 125;
            // 
            // SchedulerForm
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.AutoSize = true;
            this.ClientSize = new System.Drawing.Size(1903, 979);
            this.Controls.Add(this.tabControl1);
            this.Controls.Add(this.loadDataButton);
            this.Controls.Add(this.semesterCombobox);
            this.Controls.Add(this.runButton);
            this.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
            this.Name = "SchedulerForm";
            this.StartPosition = System.Windows.Forms.FormStartPosition.Manual;
            this.Text = "Scheduler";
            this.WindowState = System.Windows.Forms.FormWindowState.Maximized;
            this.tabControl2.ResumeLayout(false);
            this.departmentTabPage.ResumeLayout(false);
            ((System.ComponentModel.ISupportInitialize)(this.departmentDataGridView)).EndInit();
            this.subjectTabPage.ResumeLayout(false);
            ((System.ComponentModel.ISupportInitialize)(this.subjectDataGridView)).EndInit();
            this.lecturerTabPage.ResumeLayout(false);
            ((System.ComponentModel.ISupportInitialize)(this.lecturerDataGridView)).EndInit();
            this.slotTypeTabPage.ResumeLayout(false);
            ((System.ComponentModel.ISupportInitialize)(this.slotTypeDataGridView)).EndInit();
            this.tabControl1.ResumeLayout(false);
            this.InputTabPage.ResumeLayout(false);
            this.outputTabPage.ResumeLayout(false);
            ((System.ComponentModel.ISupportInitialize)(this.outputDataGridView)).EndInit();
            this.ResumeLayout(false);

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
        private System.Windows.Forms.DataGridViewTextBoxColumn Column1;
        private System.Windows.Forms.DataGridViewTextBoxColumn Column2;
        private System.Windows.Forms.DataGridViewTextBoxColumn Column3;
        private System.Windows.Forms.DataGridViewTextBoxColumn Column4;
        private System.Windows.Forms.DataGridViewTextBoxColumn Column5;
        public System.Windows.Forms.DataGridView lecturerDataGridView;
        private System.Windows.Forms.TabPage slotTypeTabPage;
        private System.Windows.Forms.DataGridView slotTypeDataGridView;
        private System.Windows.Forms.DataGridViewTextBoxColumn dataGridViewTextBoxColumn1;
        private System.Windows.Forms.DataGridViewTextBoxColumn dataGridViewTextBoxColumn2;
        private System.Windows.Forms.DataGridViewTextBoxColumn dataGridViewTextBoxColumn3;
        private System.Windows.Forms.DataGridViewTextBoxColumn Column16;
        private System.Windows.Forms.DataGridViewTextBoxColumn dataGridViewTextBoxColumn4;
        private System.Windows.Forms.DataGridViewTextBoxColumn dataGridViewTextBoxColumn5;
        private System.Windows.Forms.DataGridViewTextBoxColumn dataGridViewTextBoxColumn6;
        private System.Windows.Forms.DataGridViewTextBoxColumn Column13;
        private System.Windows.Forms.DataGridViewTextBoxColumn Column14;
        private System.Windows.Forms.DataGridViewTextBoxColumn Column15;
        private System.Windows.Forms.DataGridViewTextBoxColumn Column6;
        private System.Windows.Forms.DataGridViewTextBoxColumn Column7;
        private System.Windows.Forms.Panel panel1;
        private System.Windows.Forms.Panel panel2;
        private System.Windows.Forms.Panel panel3;
        private System.Windows.Forms.Panel panel4;
        private System.Windows.Forms.DataGridViewTextBoxColumn Column8;
        private System.Windows.Forms.DataGridViewTextBoxColumn Column9;
        private System.Windows.Forms.DataGridViewTextBoxColumn Column10;
        private System.Windows.Forms.DataGridViewTextBoxColumn Column11;
        private System.Windows.Forms.DataGridViewTextBoxColumn Column17;
        private System.Windows.Forms.DataGridViewTextBoxColumn Column12;
        private System.Windows.Forms.DataGridView outputDataGridView;
        private System.Windows.Forms.DataGridViewTextBoxColumn dataGridViewTextBoxColumn7;
        private System.Windows.Forms.DataGridViewTextBoxColumn dataGridViewTextBoxColumn8;
        private System.Windows.Forms.DataGridViewTextBoxColumn dataGridViewTextBoxColumn9;
        private System.Windows.Forms.DataGridViewTextBoxColumn dataGridViewTextBoxColumn10;
        private System.Windows.Forms.DataGridViewTextBoxColumn dataGridViewTextBoxColumn11;
        private System.Windows.Forms.ColorDialog colorDialog1;
        public System.Windows.Forms.ComboBox semesterCombobox;
    }
}


﻿namespace WindowsFormsApp
{
    partial class LoginForm
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
            this.label1 = new System.Windows.Forms.Label();
            this.tokenKeyTextBox = new System.Windows.Forms.TextBox();
            this.loginButton = new System.Windows.Forms.Button();
            this.invalidTextbox = new System.Windows.Forms.Label();
            this.SuspendLayout();
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(83, 150);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(71, 16);
            this.label1.TabIndex = 0;
            this.label1.Text = "Token key";
            // 
            // tokenKeyTextBox
            // 
            this.tokenKeyTextBox.Location = new System.Drawing.Point(171, 147);
            this.tokenKeyTextBox.Name = "tokenKeyTextBox";
            this.tokenKeyTextBox.Size = new System.Drawing.Size(350, 22);
            this.tokenKeyTextBox.TabIndex = 1;
            // 
            // loginButton
            // 
            this.loginButton.Location = new System.Drawing.Point(299, 227);
            this.loginButton.Name = "loginButton";
            this.loginButton.Size = new System.Drawing.Size(75, 23);
            this.loginButton.TabIndex = 2;
            this.loginButton.Text = "Login";
            this.loginButton.UseVisualStyleBackColor = true;
            this.loginButton.Click += new System.EventHandler(this.loginButton_ClickAsync);
            // 
            // invalidTextbox
            // 
            this.invalidTextbox.AutoSize = true;
            this.invalidTextbox.Location = new System.Drawing.Point(256, 187);
            this.invalidTextbox.Name = "invalidTextbox";
            this.invalidTextbox.Size = new System.Drawing.Size(44, 16);
            this.invalidTextbox.TabIndex = 3;
            this.invalidTextbox.Text = "label2";
            // 
            // LoginForm
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(660, 334);
            this.Controls.Add(this.invalidTextbox);
            this.Controls.Add(this.loginButton);
            this.Controls.Add(this.tokenKeyTextBox);
            this.Controls.Add(this.label1);
            this.Name = "LoginForm";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "Login";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.TextBox tokenKeyTextBox;
        private System.Windows.Forms.Button loginButton;
        private System.Windows.Forms.Label invalidTextbox;
    }
}
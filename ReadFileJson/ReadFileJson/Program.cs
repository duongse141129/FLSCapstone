using Newtonsoft.Json;
using ReadFileJson.Dao;
using ReadFileJson.Entities;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace ReadFileJson
{
    class Program
    {
        static void Main(string[] args)
        {
            SubjectOfLecturerConvert solc = new SubjectOfLecturerConvert();
            List<SubjectOfLecturer> subjectOfLecturers = solc.ReadData();
            solc.WriteData(subjectOfLecturers);
        }


    }
}

using Newtonsoft.Json;
using ReadFileJson.Entities;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReadFileJson.Dao
{
    class SubjectOfLecturerConvert
    {
        public List<SubjectOfLecturer> ReadData()
        {
            List<SubjectOfLecturer> subjectOfLecturers = new List<SubjectOfLecturer>();
            using (StreamReader sr = File.OpenText("D:/Data Capstonse/File Json/SubjectOfLecturer.json"))
            {
                var obj = sr.ReadToEnd();
                subjectOfLecturers = JsonConvert.DeserializeObject<List<SubjectOfLecturer>>(obj);

            }

            foreach (SubjectOfLecturer subjectOfLecturer in subjectOfLecturers)
            {
                Console.WriteLine(subjectOfLecturer.ToString());
            }
            return subjectOfLecturers;
        }

        public void WriteData(List<SubjectOfLecturer> subjectOfLecturers)
        {
            try
            {
                if (subjectOfLecturers != null)
                {
                    using (StreamWriter sw = File.CreateText(@"D:\SubjectOfLecturerJS.json"))
                    {
                        var subjectOfLecturerJson = JsonConvert.SerializeObject(subjectOfLecturers);
                        sw.WriteLine(subjectOfLecturerJson);
                    }
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e.ToString());
            }
        }
    }
}

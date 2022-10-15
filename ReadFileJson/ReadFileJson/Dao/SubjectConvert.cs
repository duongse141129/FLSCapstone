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
    class SubjectConvert
    {
        public List<Subject> ReadData()
        {
            List<Subject> subjects = new List<Subject>();
            using (StreamReader sr = File.OpenText("D:/Data Capstonse/File Json/Subject.json"))
            {
                var obj = sr.ReadToEnd();
                subjects = JsonConvert.DeserializeObject<List<Subject>>(obj);

            }

            foreach (Subject subject in subjects)
            {
                Console.WriteLine(subject.ToString());
            }
            return subjects;
        }

        public void WriteData(List<Subject> subjects)
        {
            try
            {
                if (subjects != null)
                {
                    using (StreamWriter sw = File.CreateText(@"D:\SubjectJS.json"))
                    {
                        var subjectsJson = JsonConvert.SerializeObject(subjects);
                        sw.WriteLine(subjectsJson);
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

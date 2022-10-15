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
    class LecturerCourseGroupConvert
    {
        public List<LecturerCourseGroup> ReadData()
        {
            List<LecturerCourseGroup> lecturerCourseGroups = new List<LecturerCourseGroup>();
            using (StreamReader sr = File.OpenText("D:/Data Capstonse/File Json/LecturerCourseGroup.json"))
            {
                var obj = sr.ReadToEnd();
                lecturerCourseGroups = JsonConvert.DeserializeObject<List<LecturerCourseGroup>>(obj);

            }

            foreach (LecturerCourseGroup lecturerCourseGroup in lecturerCourseGroups)
            {
                Console.WriteLine(lecturerCourseGroup.ToString());
            }
            return lecturerCourseGroups;
        }

        public void WriteData(List<LecturerCourseGroup> lecturerCourseGroups)
        {
            try
            {
                if (lecturerCourseGroups != null)
                {
                    using (StreamWriter sw = File.CreateText(@"D:\LecturerCourseGroupJS.json"))
                    {
                        var lecturerCourseGroupsJson = JsonConvert.SerializeObject(lecturerCourseGroups);
                        sw.WriteLine(lecturerCourseGroupsJson);
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

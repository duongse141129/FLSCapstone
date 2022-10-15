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
    class LecturerSlotConfigConvert
    {
        public List<LecturerSlotConfig> ReadData()
        {
            List<LecturerSlotConfig> lecturerSlotConfigs = new List<LecturerSlotConfig>();
            using (StreamReader sr = File.OpenText("D:/Data Capstonse/File Json/LecturerSlotConfig.json"))
            {
                var obj = sr.ReadToEnd();
                lecturerSlotConfigs = JsonConvert.DeserializeObject<List<LecturerSlotConfig>>(obj);

            }

            foreach (LecturerSlotConfig lecturerSlotConfig in lecturerSlotConfigs)
            {
                Console.WriteLine(lecturerSlotConfig.ToString());
            }
            return lecturerSlotConfigs;
        }

        public void WriteData(List<LecturerSlotConfig> lecturerSlotConfigs)
        {
            try
            {
                if (lecturerSlotConfigs != null)
                {
                    using (StreamWriter sw = File.CreateText(@"D:\LecturerSlotConfigJS.json"))
                    {
                        var lecturerSlotConfigsJson = JsonConvert.SerializeObject(lecturerSlotConfigs);
                        sw.WriteLine(lecturerSlotConfigsJson);
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


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
    class SlotTypeConvert
    {
        public List<SlotType> ReadData()
        {
            List<SlotType> slotTypes = new List<SlotType>();
            using (StreamReader sr = File.OpenText("D:/Data Capstonse/File Json/SlotType.json"))
            {
                var obj = sr.ReadToEnd();
                slotTypes = JsonConvert.DeserializeObject<List<SlotType>>(obj);

            }

            foreach (SlotType slotType in slotTypes)
            {
                Console.WriteLine(slotType.ToString());
            }
            return slotTypes;
        }

        public void WriteData(List<SlotType> slotTypes)
        {
            try
            {
                if (slotTypes != null)
                {
                    using (StreamWriter sw = File.CreateText(@"D:\SlotTypeJS.json"))
                    {
                        var slotTypesJson = JsonConvert.SerializeObject(slotTypes);
                        sw.WriteLine(slotTypesJson);
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

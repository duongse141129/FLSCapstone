using Newtonsoft.Json;
using RestSharp;
using System;
using System.Collections.Generic;
using System.IO;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Net.Http.Json;
using System.Text;
using System.Threading.Tasks;

namespace CallAPITest
{
    public class Department
    {
        public string Id { get; set; }
        public string DepartmentName { get; set; }

        public string DepartmentGroupId { get; set; }

        public int Status { get; set; }

        public override string ToString()
        {
            return "Department: " + Id + "-" + DepartmentName + "-" + DepartmentGroupId + "-" + Status;
        }

    }
    public class Program
    {
        
        public static async Task<bool> CreateDepartmentAsync(Department department)
        {
            try
            {
                var client = new HttpClient();
                var endpoint = new Uri("http://20.214.249.72/api/Department");
                var newDepartmentJson = JsonConvert.SerializeObject(department);
                var payload = new StringContent(newDepartmentJson, Encoding.UTF8, "application/json");
                HttpResponseMessage response = await client.PostAsync(endpoint, payload);
                var responseContent = await response.Content.ReadAsStringAsync();
                if (response.IsSuccessStatusCode)
                {
                    Console.WriteLine("POST success ");
                    Console.WriteLine("Status Code: "+response.StatusCode);
                    Console.WriteLine("Header: "+response.Headers);
                    Console.WriteLine("Respone: "+response.Content);
                    Console.WriteLine("Content Respone: " + responseContent);
                    return true;
                }
                Console.WriteLine("POST fail");
                return false;
            }
            catch (Exception ex)
            { 

                Console.WriteLine("Error at POST: "+ex.Message);
                return false;
            }
        }

        public static async Task<bool> UpdateDepartmentAsync(Department department)
        {
            try
            {
                var client = new HttpClient();
                var endpoint = new Uri("http://20.214.249.72/api/Department/"+ department.Id);
                var newDepartmentJson = JsonConvert.SerializeObject(department);
                var payload = new StringContent(newDepartmentJson, Encoding.UTF8, "application/json");
                HttpResponseMessage response = await client.PutAsync(endpoint, payload);
                var responseContent = await response.Content.ReadAsStringAsync();
                if (response.IsSuccessStatusCode)
                {
                    Console.WriteLine("PUT success ");
                    Console.WriteLine("Status Code: " + response.StatusCode);
                    Console.WriteLine("Header: " + response.Headers);
                    Console.WriteLine("Respone: " + response.Content);

                    Console.WriteLine("Content Respone: " + responseContent);
                    return true;
                }
                Console.WriteLine("PUT fail");
                return false;
            }
            catch (Exception ex)
            {
                Console.WriteLine("Error at PUT: " + ex.Message);
                return false;
            }
        }

        public static async Task<List<Department>> GetDepartmentAsync()
        {
            List<Department> departments;
            try
            {
                var client = new HttpClient();
                var endpoint = new Uri("http://20.214.249.72/api/Department?pageIndex=1&pageSize=1000000");
                HttpResponseMessage response = await client.GetAsync(endpoint);
                var responseContent = await response.Content.ReadAsStringAsync();
                if (response.IsSuccessStatusCode)
                {
                    Console.WriteLine("Get success ");
                    Console.WriteLine("Status Code: " + response.StatusCode);
                    Console.WriteLine("Header: " + response.Headers);
                    Console.WriteLine("Respone: " + response.Content);

                    Console.WriteLine("Content Respone: " + responseContent);
                    departments = JsonConvert.DeserializeObject<List<Department>>(responseContent);
                    return departments;
                }
                Console.WriteLine("Get fail");
                return null;
            }
            catch (Exception ex)
            {
                Console.WriteLine("Error at Get: " + ex.Message);
                return null;
            }
        }

        public static async Task<Department> GetDepartmentByIdAsync(string Id)
        {
            Department departmentResult;
            try
            {
                var client = new HttpClient();
                var endpoint = new Uri("http://20.214.249.72/api/Department/"+Id);
                HttpResponseMessage response = await client.GetAsync(endpoint);
                var responseContent = await response.Content.ReadAsStringAsync();
                if (response.IsSuccessStatusCode)
                {
                    Console.WriteLine("GetById success ");
                    Console.WriteLine("Status Code: " + response.StatusCode);
                    Console.WriteLine("Header: " + response.Headers);
                    Console.WriteLine("Respone: " + response.Content);

                    Console.WriteLine("Content Respone: " + responseContent);
                    departmentResult = JsonConvert.DeserializeObject<Department>(responseContent);
                    return departmentResult;
                }
                Console.WriteLine("GetById fail");
                return null;
            }
            catch (Exception ex)
            {
                Console.WriteLine("Error at GetById: " + ex.Message);
                return null;
            }
        }

        public static async Task<bool> DeleteDepartmentAsync(string departmentId)
        {
            try
            {
                var client = new HttpClient();
                HttpResponseMessage response = await client.DeleteAsync(
                "http://20.214.249.72/api/Department/"+departmentId);
                if (response.IsSuccessStatusCode)
                {
                    Console.WriteLine("Delete success ");
                    return true;
                }
                Console.WriteLine("Delete fail");
                return false;
            }
            catch (Exception ex)
            {
                Console.WriteLine("Delete at POST: " + ex.Message);
                return false;
            }
        }


        //static void Main(string[] args)
        //{
        //}
        static async Task Main(string[] args)
        {
            await Program.RunAsync();

        }
        public static async Task RunAsync()
        {
            try
            {
                Department department = new Department()
                {
                    DepartmentName = "UPZZZZZ",
                    DepartmentGroupId = "SE"
                };

                //var data = @"{
                //          ""DepartmentName"": ""ZZR"",
                //          ""DepartmentGroupId"": SE,
                //        }";

                var rsCreate = await CreateDepartmentAsync(department);

                string idToDelete = "wRB1HVEvbGRrAFzUhZIUj2WNS5vlTK";
                var rsDelete = await DeleteDepartmentAsync(idToDelete);

                department.Id = "S7nXRE1CXPGERzzmhFiNEl4h4Tl5b8";
                var rsUpdate = await UpdateDepartmentAsync(department);

                var rsGetList = await GetDepartmentAsync();
                foreach (Department departmentItem in rsGetList)
                {
                    Console.WriteLine(departmentItem);
                }

                string IdToFind = "S7nXRE1CXPGERzzmhFiNEl4h4Tl5b8";
                var rsGetById = await GetDepartmentByIdAsync(IdToFind);
                Console.WriteLine(rsGetById);

            }
            catch (Exception e)
            {
                Console.WriteLine("Error: "+e.Message);
            }

        }
    }
}

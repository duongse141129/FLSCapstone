using BEAPICapstoneProjectFLS.Entities;
using BEAPICapstoneProjectFLS.ViewModel;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BEAPICapstoneProjectFLS.IServices
{
    public interface IDeleteAllDataInSemesterService
    {
        Task<ApiResponse> DeleteAllDataInSemester(string semesterID);
        Task<ApiResponse> DeleteAllDataInSemesterExceptSemester(string semesterID);
        Task<List<Semester>> getAllSemester();
    }
}

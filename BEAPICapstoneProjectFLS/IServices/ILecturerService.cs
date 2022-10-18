using BEAPICapstoneProjectFLS.Requests;
using BEAPICapstoneProjectFLS.Requests.DepartmentRequest;
using BEAPICapstoneProjectFLS.Requests.LecturerRequest;
using BEAPICapstoneProjectFLS.ViewModel;
using PagedList;
using System.Collections.Generic;
using System.Threading.Tasks;
namespace BEAPICapstoneProjectFLS.IServices
{
    public interface ILecturerService
    {
        Task<LecturerViewModel> GetLecturerById(string id);
        Task<LecturerViewModel> GetLecturerByEmail(string email);
        IPagedList<LecturerViewModel> GetAllLecturer(LecturerViewModel flitter, int pageIndex,
           int pageSize, LecturerSortBy sortBy, OrderBy order);

        IPagedList<LecturerViewModel> GetAllLecturerPagein(int pageIndex, int pageSize);

        Task<LecturerViewModel> CreateLecturer(CreateLecturerRequest request);
        Task<LecturerViewModel> UpdateLecturer(string id, UpdateLecturerRequest request);
        Task<bool> DeleteLecturer(string id);

        Task<IEnumerable<LecturerViewModel>> GetAllLecturerByDepartmentID(string departmentID);
    }
}

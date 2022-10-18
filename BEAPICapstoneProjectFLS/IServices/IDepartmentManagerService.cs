using BEAPICapstoneProjectFLS.Requests;
using BEAPICapstoneProjectFLS.Requests.DepartmentManagerRequest;
using BEAPICapstoneProjectFLS.Requests.DepartmentRequest;
using BEAPICapstoneProjectFLS.Requests.LecturerRequest;
using BEAPICapstoneProjectFLS.ViewModel;
using PagedList;
using System.Collections.Generic;
using System.Threading.Tasks;
namespace BEAPICapstoneProjectFLS.IServices
{
    public interface IDepartmentManagerService
    {
        Task<DepartmentManagerViewModel> GetDepartmentManagerById(string id);
        Task<DepartmentManagerViewModel> GetDepartmentManagerByEmail(string email);
        IPagedList<DepartmentManagerViewModel> GetAllDepartmentManager(DepartmentManagerViewModel flitter, int pageIndex,
           int pageSize, DepartmentManagerSortBy sortBy, OrderBy order);

        IPagedList<DepartmentManagerViewModel> GetAllDepartmentManagerPagein(int pageIndex, int pageSize);

        Task<DepartmentManagerViewModel> CreateDepartmentManager(CreateDepartmentManagerRequest request);
        Task<DepartmentManagerViewModel> UpdateDepartmentManager(string id, UpdateDepartmentManagerRequest request);
        Task<bool> DeleteDepartmentManager(string id);

        Task<IEnumerable<DepartmentManagerViewModel>> GetAllDepartmentManagerByDepartmentID(string departmentID);
    }
}

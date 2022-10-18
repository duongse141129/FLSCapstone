using BEAPICapstoneProjectFLS.Requests;
using BEAPICapstoneProjectFLS.Requests.AdminRequest;
using BEAPICapstoneProjectFLS.Requests.DepartmentRequest;
using BEAPICapstoneProjectFLS.Requests.LecturerRequest;
using BEAPICapstoneProjectFLS.ViewModel;
using PagedList;
using System.Collections.Generic;
using System.Threading.Tasks;
namespace BEAPICapstoneProjectFLS.IServices
{
    public interface IAdminService
    {
        Task<AdminViewModel> GetAdminById(string id);
        Task<AdminViewModel> GetAdminByEmail(string email);
        IPagedList<AdminViewModel> GetAllAdmin(AdminViewModel flitter, int pageIndex,
           int pageSize, AdminSortBy sortBy, OrderBy order);

        IPagedList<AdminViewModel> GetAllAdminPagein(int pageIndex, int pageSize);

        Task<AdminViewModel> CreateAdmin(CreateAdminRequest request);
        Task<AdminViewModel> UpdateAdmin(string id, UpdateAdminRequest request);
        Task<bool> DeleteAdmin(string id);
    }
}

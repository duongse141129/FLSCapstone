using BEAPICapstoneProjectFLS.Requests;
using BEAPICapstoneProjectFLS.Requests.CourseRequest;
using BEAPICapstoneProjectFLS.Requests.DepartmentGroupRequest;
using BEAPICapstoneProjectFLS.ViewModel;
using PagedList;
using System.Threading.Tasks;

namespace BEAPICapstoneProjectFLS.IServices
{
    public interface ICourseService
    {
        Task<CourseViewModel> GetCourseById(string id);
        IPagedList<CourseViewModel> GetAllCourse(CourseViewModel flitter, int pageIndex,
           int pageSize, CourseSortBy sortBy, OrderBy order);
        Task<CourseViewModel> CreateCourse(CreateCourseRequest request);
        Task<CourseViewModel> UpdateCourse(string id, UpdateCourseRequest request);
        Task<bool> DeleteCourse(string id);
    }
}

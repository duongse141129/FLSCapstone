using BEAPICapstoneProjectFLS.Entities;
using BEAPICapstoneProjectFLS.IRepositories;
using BEAPICapstoneProjectFLS.IServices;
using BEAPICapstoneProjectFLS.Requests.DepartmentGroupRequest;
using BEAPICapstoneProjectFLS.ViewModel;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.EntityFrameworkCore;
using PagedList;
using Reso.Core.Utilities;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BEAPICapstoneProjectFLS.Enum;
using BEAPICapstoneProjectFLS.Requests;
using BEAPICapstoneProjectFLS.RandomKey;
using BEAPICapstoneProjectFLS.Requests.CourseGroupItemRequest;

namespace BEAPICapstoneProjectFLS.Services
{
    public class CourseGroupItemService : ICourseGroupItemService
    {
        private readonly IGenericRepository<CourseGroupItem> _res;
        private readonly IMapper _mapper;

        public CourseGroupItemService(IGenericRepository<CourseGroupItem> repository, IMapper mapper)
        {
            _res = repository;
            _mapper = mapper;
        }

        public async Task<CourseGroupItemViewModel> CreateCourseGroupItem(CreateCourseGroupItemRequest request)
        {
            try
            {
                var cg = _mapper.Map<CourseGroupItem>(request);
                cg.Id = RandomPKKey.NewRamDomPKKey();
                await _res.InsertAsync(cg);
                await _res.SaveAsync();
                return _mapper.Map<CourseGroupItemViewModel>(cg);
            }
            catch
            {
                return null;
            }

        }

        public async Task<bool> DeleteCourseGroupItem(string id)
        {
            var courseGroupItem = (await _res.FindByAsync(x => x.Id == id && x.Status == (int)CourseGroupItemStatus.Active)).FirstOrDefault();
            if (courseGroupItem == null)
            {
                return false;
            }
            courseGroupItem.Status = 0;
            await _res.UpdateAsync(courseGroupItem);
            await _res.SaveAsync();
            return true;
        }

        public IPagedList<CourseGroupItemViewModel> GetAllCourseGroupItem(CourseGroupItemViewModel flitter, int pageIndex, int pageSize, CourseGroupItemSortBy sortBy, OrderBy order)
        {
            var listCourseGroupItem = _res.FindBy(x => x.Status == (int)FLSStatus.Active);

            var listCourseGroupItemViewModel = (listCourseGroupItem.ProjectTo<CourseGroupItemViewModel>
                (_mapper.ConfigurationProvider)).DynamicFilter(flitter);
            switch (sortBy.ToString())
            {
                case "LecturerCourseGroupId":
                    if (order.ToString() == "Asc")
                    {
                        listCourseGroupItemViewModel = (IQueryable<CourseGroupItemViewModel>)listCourseGroupItemViewModel.OrderBy(x => x.LecturerCourseGroupId);
                    }
                    else
                    {
                        listCourseGroupItemViewModel = (IQueryable<CourseGroupItemViewModel>)listCourseGroupItemViewModel.OrderByDescending(x => x.LecturerCourseGroupId);
                    }
                    break;
                case "Id":
                    if (order.ToString() == "Asc")
                    {
                        listCourseGroupItemViewModel = (IQueryable<CourseGroupItemViewModel>)listCourseGroupItemViewModel.OrderBy(x => x.Id);
                    }
                    else
                    {
                        listCourseGroupItemViewModel = (IQueryable<CourseGroupItemViewModel>)listCourseGroupItemViewModel.OrderByDescending(x => x.Id);
                    }
                    break;
                case "CourseId":
                    if (order.ToString() == "Asc")
                    {
                        listCourseGroupItemViewModel = (IQueryable<CourseGroupItemViewModel>)listCourseGroupItemViewModel.OrderBy(x => x.CourseId);
                    }
                    else
                    {
                        listCourseGroupItemViewModel = (IQueryable<CourseGroupItemViewModel>)listCourseGroupItemViewModel.OrderByDescending(x => x.CourseId);
                    }
                    break;
            }
            return PagedListExtensions.ToPagedList<CourseGroupItemViewModel>(listCourseGroupItemViewModel, pageIndex, pageSize);
        }


        public async Task<CourseGroupItemViewModel> GetCourseGroupItemById(string id)
        {
            //var departmentGetByID = _context.Departments.SingleOrDefault(ty => ty.DepartmentID == id);

            var dg = await _res.GetAllByIQueryable()
                .Where(x => x.Id == id && x.Status == (int)CourseGroupItemStatus.Active)
                .Include(x => x.Course)
                .Include(x => x.LecturerCourseGroup)
                .FirstOrDefaultAsync();
            //var dg = await _res.GetByIDAsync(id);
            if (dg == null)
                return null;
            var courseGroupItemVM = _mapper.Map<CourseGroupItemViewModel>(dg);
            return courseGroupItemVM;
        }

        public async Task<CourseGroupItemViewModel> UpdateCourseGroupItem(string id, UpdateCourseGroupItemRequest request)
        {
            try
            {
                var listCourseGroupItem = await _res.FindByAsync(x => x.Id == id && x.Status == (int)CourseGroupItemStatus.Active);
                if (listCourseGroupItem == null)
                {
                    return null;
                }
                var courseGroupItem = listCourseGroupItem.FirstOrDefault();
                if (courseGroupItem == null)
                {
                    return null;
                }
                courseGroupItem = _mapper.Map(request, courseGroupItem);
                await _res.UpdateAsync(courseGroupItem);
                await _res.SaveAsync();

                return _mapper.Map<CourseGroupItemViewModel>(courseGroupItem);
            }
            catch
            {
                return null;
            }
        }
    }
}

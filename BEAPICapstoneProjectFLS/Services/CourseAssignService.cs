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
using BEAPICapstoneProjectFLS.Requests.CourseAssignRequest;

namespace BEAPICapstoneProjectFLS.Services
{
    public class CourseAssignService : ICourseAssignService 
    {
        private readonly IGenericRepository<CourseAssign> _res;
        private readonly IMapper _mapper;

        public CourseAssignService(IGenericRepository<CourseAssign> repository, IMapper mapper)
        {
            _res = repository;
            _mapper = mapper;
        }

        public async Task<CourseAssignViewModel> CreateCourseAssign(CreateCourseAssignRequest request)
        {
            try
            {
                var ca = _mapper.Map<CourseAssign>(request);
                ca.Id = RandomPKKey.NewRamDomPKKey();
                await _res.InsertAsync(ca);
                await _res.SaveAsync();
                return _mapper.Map<CourseAssignViewModel>(ca);
            }
            catch
            {
                return null;
            }

        }

        public async Task<bool> DeleteCourseAssign(string id)
        {
            var courseAssign = (await _res.FindByAsync(x => x.Id == id && x.Status == (int)CourseAssignStatus.Active)).FirstOrDefault();
            if (courseAssign == null)
            {
                return false;
            }
            courseAssign.Status = 0;
            await _res.UpdateAsync(courseAssign);
            await _res.SaveAsync();
            return true;
        }

        public IPagedList<CourseAssignViewModel> GetAllCourseAssign(CourseAssignViewModel flitter, int pageIndex, int pageSize, CourseAssignSortBy sortBy, OrderBy order)
        {
            var listCourseAssign = _res.FindBy(x => x.Status == (int)FLSStatus.Active);

            var listCourseAssignViewModel = (listCourseAssign.ProjectTo<CourseAssignViewModel>
                (_mapper.ConfigurationProvider)).DynamicFilter(flitter);
            switch (sortBy.ToString())
            {
                case "Id":
                    if (order.ToString() == "Asc")
                    {
                        listCourseAssignViewModel = (IQueryable<CourseAssignViewModel>)listCourseAssignViewModel.OrderBy(x => x.Id);
                    }
                    else
                    {
                        listCourseAssignViewModel = (IQueryable<CourseAssignViewModel>)listCourseAssignViewModel.OrderByDescending(x => x.Id);
                    }
                    break;
                case "LecturerId":
                    if (order.ToString() == "Asc")
                    {
                        listCourseAssignViewModel = (IQueryable<CourseAssignViewModel>)listCourseAssignViewModel.OrderBy(x => x.LecturerId);
                    }
                    else
                    {
                        listCourseAssignViewModel = (IQueryable<CourseAssignViewModel>)listCourseAssignViewModel.OrderByDescending(x => x.LecturerId);
                    }
                    break;
                case "CourseId":
                    if (order.ToString() == "Asc")
                    {
                        listCourseAssignViewModel = (IQueryable<CourseAssignViewModel>)listCourseAssignViewModel.OrderBy(x => x.CourseId);
                    }
                    else
                    {
                        listCourseAssignViewModel = (IQueryable<CourseAssignViewModel>)listCourseAssignViewModel.OrderByDescending(x => x.CourseId);
                    }
                    break;
            }
            return PagedListExtensions.ToPagedList<CourseAssignViewModel>(listCourseAssignViewModel, pageIndex, pageSize);
        }


        public async Task<CourseAssignViewModel> GetCourseAssignById(string id)
        {


            var dg = await _res.GetAllByIQueryable()
                .Where(x => x.Id == id && x.Status == (int)CourseAssignStatus.Active)
                .FirstOrDefaultAsync();
            if (dg == null)
                return null;
            var courseAssignVM = _mapper.Map<CourseAssignViewModel>(dg);
            return courseAssignVM;
        }

        public async Task<CourseAssignViewModel> UpdateCourseAssign(string id, UpdateCourseAssignRequest request)
        {
            try
            {
                var listCourseAssign = await _res.FindByAsync(x => x.Id == id && x.Status == (int)CourseAssignStatus.Active);
                if (listCourseAssign == null)
                {
                    return null;
                }
                var courseAssign = listCourseAssign.FirstOrDefault();
                if (courseAssign == null)
                {
                    return null;
                }
                courseAssign = _mapper.Map(request, courseAssign);
                await _res.UpdateAsync(courseAssign);
                await _res.SaveAsync();

                return _mapper.Map<CourseAssignViewModel>(courseAssign);
            }
            catch
            {
                return null;
            }
        }
    }
}
